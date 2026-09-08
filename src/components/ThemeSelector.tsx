import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setTheme, type ThemeMode } from "../features/theme/themeSlice";

function ThemeSelector() {
  const dispatch = useAppDispatch();

  const theme = useAppSelector((state) => state.theme.mode);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTheme(event.target.value as ThemeMode));
  };

  return (
    <select value={theme} onChange={handleChange} aria-label="Select theme">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
}

export default ThemeSelector;
