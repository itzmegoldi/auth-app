import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";

function ThemeProvider() {
  const theme = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return null;
}

export default ThemeProvider;
