import styles from "./ButtonsThemeActions.module.css";
export default function ButtonTheme({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) {
  return (
    <div className={styles.wrapper}>
      <button
        onClick={toggleTheme}
        className={`${styles.buttonTheme} ${
          theme === "dark" ? styles.hiddenLight : styles.visible
        }`}
      >
        <div className={styles.content}>
          <span className={`material-symbols-outlined ${styles.iconTheme}`}>
            light_mode
          </span>
          <p className={styles.textTheme}>Claro</p>
        </div>
      </button>

      <button
        onClick={toggleTheme}
        className={`${styles.buttonTheme} ${
          theme === "light" ? styles.hiddenDark : styles.visible
        }`}
      >
        <div className={styles.content}>
          <p className={styles.textTheme}>Escuro</p>
          <span className={`material-symbols-outlined ${styles.iconTheme}`}>
            dark_mode
          </span>
        </div>
      </button>
    </div>
  );
}
