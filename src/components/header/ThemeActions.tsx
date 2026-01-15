import styles from "./ThemeActions.module.css";
import ButtonTheme from "./ButtonTheme";
import { ThemeModeContext } from "../../context/ThemeModeContext";
import { useContext } from "react";
export default function ThemeActions() {
  const themeContext = useContext(ThemeModeContext);

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;
  return (
    <div className={styles.wrapper}>
      <ButtonTheme
        theme={"light_mode"}
        toggleTheme={toggleTheme}
        visibility={theme === "dark" ? "hiddenLight" : "visible"}
        text="Claro"
      />
      <ButtonTheme
        theme={"dark_mode"}
        toggleTheme={toggleTheme}
        visibility={theme === "light" ? "hiddenDark" : "visible"}
        text="Escuro"
      />
    </div>
  );
}
