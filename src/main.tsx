import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { router } from "./app/router.tsx";

import { RouterProvider } from "react-router-dom";
import ThemeProvider from "./features/theme/ThemeProvider.tsx";

import "./index.css";
import "./theme/tokens.css";
import "./theme/dark.css";
import "./theme/light.css";
import "./theme/system.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
