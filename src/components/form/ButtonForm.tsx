import type { ReactNode } from "react";
import styles from "./ButtonForm.module.css";

type ButtonFormProps = {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
  icon?: ReactNode;
};

export default function ButtonForm({
  text,
  onClick: handleFunction,
  className,
  icon,
}: ButtonFormProps) {
  return (
    <button className={styles[className]} onClick={handleFunction}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </button>
  );
}
