import styles from "./ButtonTheme.module.css";

type ButtonThemeProps = {
  theme: string;
  toggleTheme: () => void;
  visibility: "hiddenDark" | "hiddenLight" | "visible";
  text: string;
};

export default function ButtonTheme({
  theme,
  toggleTheme,
  visibility,
  text,
}: ButtonThemeProps) {
  const renderButtonContent = () => {
    if (theme === "light_mode") {
      return (
        <div className={styles.content}>
          <span className={`material-symbols-outlined ${styles.iconTheme}`}>
            {theme}
          </span>
          <p className={styles.textTheme}>{text}</p>
        </div>
      );
    }
    return (
      <div className={styles.content}>
        <p className={styles.textTheme}>{text}</p>
        <span className={`material-symbols-outlined ${styles.iconTheme}`}>
          {theme}
        </span>
      </div>
    );
  };

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.buttonTheme} ${styles[visibility]}`}
    >
      {renderButtonContent()}
    </button>
  );
}
