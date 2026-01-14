import { useContext } from "react";
import styles from "./Header.module.css";
import { ThemeModeContext } from "../../context/ThemeModeContext";
import ButtonsThemeActions from "./ButtonsThemeActions";

export default function Header() {
  const themeContext = useContext(ThemeModeContext);

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={`material-symbols-outlined ${styles.logoIcon}`}>
          health_metrics
        </span>
        <h1 className={styles.logoText}>
          Calcula<span>IMC</span>
        </h1>
      </div>
      <ButtonsThemeActions theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
}
