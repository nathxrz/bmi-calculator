import { createContext, useState, type ReactNode } from "react";

type ThemeValue = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeModeContext = createContext<ThemeValue | undefined>(undefined);

function ThemeModeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export { ThemeModeContext, ThemeModeProvider };
