import styles from "./ClassificationItem.module.css";

export default function ClassificationItem({
  text,
  valueLeft,
  symbol,
  valueRight,
  classification,
}: {
  text: string;
  valueLeft: string;
  symbol: string;
  valueRight: string;
  classification: string;
}) {
  return (
    <p className={`${styles.item} ${styles[classification]}`}>
      {text}{" "}
      <span>
        {valueLeft} {symbol} {valueRight}
      </span>
    </p>
  );
}
