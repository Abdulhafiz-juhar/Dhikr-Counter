import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Read the exact media query state right on mount
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const systemTheme = mediaQuery.matches ? "dark" : "light";

    // Sync state and DOM immediately to prevent light mode override
    setTheme(systemTheme);

    if (systemTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }

    // Listen for ongoing system changes
    const handleChange = (e: MediaQueryListEvent) => {
      const nextTheme = e.matches ? "dark" : "light";
      setTheme(nextTheme);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const root = document.body;
    if (theme === "light") {
      root?.classList.remove("dark");
      root?.classList.add("light");
    } else {
      root?.classList.remove("light");
      root?.classList.add("dark");
    }
  }, [theme]);

  function toggle() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
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
