import { createContext, useContext, useState, type ReactNode } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggle: () => {},
});
const root = document.body;

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");

  function toggle() {
    if (theme === "light") {
      setTheme("dark");
      root?.classList.remove("light");
      root?.classList.add("dark");
    } else {
      setTheme("light");
      root?.classList.remove("dark");
      root?.classList.add("light");
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const { theme, toggle } = useContext(ThemeContext);
  if (!theme) throw new Error("this component isn't inside theme provider");
  return { theme, toggle };
}
