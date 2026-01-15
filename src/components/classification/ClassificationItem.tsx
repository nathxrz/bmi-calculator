import styles from "./ClassificationItem.module.css";

type ClassificationItemProps = {
  text: string;
  valueLeft: string;
  symbol: string;
  valueRight: string;
  classification: string;
};

export default function ClassificationItem({
  text,
  valueLeft,
  symbol,
  valueRight,
  classification,
}: ClassificationItemProps) {
  return (
    <p className={`${styles.item} ${styles[classification]}`}>
      {text}{" "}
      <span>
        {valueLeft} {symbol} {valueRight}
      </span>
    </p>
  );
}
