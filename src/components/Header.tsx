import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const handleButton = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

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
      <button onClick={handleButton} className={styles.buttonTheme}>
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
