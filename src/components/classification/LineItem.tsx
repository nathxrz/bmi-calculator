import styles from "./ResultClassificationImc.module.css";

type LineItemProps = {
  title: string;
  color: string;
  isImchere?: React.ReactNode;
};

export default function LineItem({ title, color, isImchere }: LineItemProps) {
  return (
    <span title={title} className={styles[color]}>
      {isImchere}
    </span>
  );
}
