import type { ReactNode } from "react";
import styles from "./ButtonForm.module.css";
export default function ButtonForm({
  text,
  onClick: handleFunction,
  icon,
}: {
  text: string;
  onClick: () => void;
  icon?: ReactNode;
}) {
  return (
    <button
      className={text === "Limpar" ? styles.actionClear : styles.actionSubmit}
      onClick={handleFunction}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </button>
  );
}
