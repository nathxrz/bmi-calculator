import { useContext } from "react";
import styles from "./Header.module.css";
import { ThemeModeContext } from "../context/ThemeModeContext";

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
      <button onClick={toggleTheme} className={styles.buttonTheme}>
        <div>
          <span className={`material-symbols-outlined ${styles.iconTheme}`}>
            {theme === "light" ? "light_mode" : "dark_mode"}
          </span>
          <p className={styles.textTheme}>
            {theme === "light" ? "Claro" : "Escuro"}
          </p>
        </div>
      </button>
    </header>
  );
}
