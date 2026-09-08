import { jwtDecode } from "jwt-decode";

export function getDecodedAccessToken(token) {
  try {
    return jwtDecode(token);
  } catch (Error) {
    return null;
  }
}
