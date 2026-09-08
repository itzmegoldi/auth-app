import axios from "axios";
import { store } from "../app/store";
import { logout, setCredentials } from "../features/auth/authSlice";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

let refreshPromise = null;

api.interceptors.request.use(
  (config) => {
    const requiresAuth = config.requiresAuth !== false;

    if (requiresAuth) {
      const accessToken = store.getState().auth.accessToken;

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const originalRequest = error.config;

    if (!error.response) {
      return Promise.reject(error);
    }

    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    // Don't refresh if the refresh endpoint itself failed
    if (originalRequest.url === "/user/refresh") {
      store.dispatch(logout());
      return Promise.reject(error);
    }

    // Prevent infinite retry
    if (originalRequest._retry) {
      store.dispatch(logout());
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      if (!refreshPromise) {
        refreshPromise = api
          .post("/user/refresh")
          .then((response) => {
            const newAccessToken = response.data.access_token;

            store.dispatch(setCredentials({
              user: store.getState().auth.user,
              accessToken: newAccessToken,
            }));

            return newAccessToken;
          })
          .finally(() => {
            refreshPromise = null;
          });
      }

      const newAccessToken = await refreshPromise;

      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

      return api(originalRequest);
    } catch (refreshError) {
      store.dispatch(logout());

      return Promise.reject(refreshError);
    }
  },
);

export default api;

export const api_request = async (
  method,
  endpoint,
  {
    data = null,
    params = null,
    success_handler = null,
    error_handler = null,
    finally_handler = null,

    requires_auth = true,

    responseType = "json",

    onDownloadProgress = null,
    onUploadProgress = null,

    headers = null,
    timeout = null,
    signal = null,

    ...axiosOptions
  } = {},
) => {
  try {
    const config = {
      method,
      url: endpoint,
      requiresAuth: requires_auth,
      responseType,
    };

    /*
     * Query parameters
     */
    if (params) {
      config.params = params;
    }

    /*
     * Request body
     */
    if (data !== null && data !== undefined) {
      config.data = data;
    }

    /*
     * Optional headers
     */
    if (headers) {
      config.headers = headers;
    }

    /*
     * Optional timeout
     */
    if (timeout !== null) {
      config.timeout = timeout;
    }

    /*
     * AbortController signal
     */
    if (signal) {
      config.signal = signal;
    }

    /*
     * Upload progress
     */
    if (onUploadProgress) {
      config.onUploadProgress = onUploadProgress;
    }

    /*
     * Download progress
     */
    if (onDownloadProgress) {
      config.onDownloadProgress = onDownloadProgress;
    }

    /*
     * Allow any other Axios configuration
     */
    Object.assign(config, axiosOptions);

    const response = await api(config);

    if (success_handler) {
      success_handler(response);
    }

    return response.data;
  } catch (error) {
    if (error_handler) {
      error_handler(error);
    }

    throw error;
  } finally {
    if (finally_handler) {
      finally_handler();
    }
  }
};
