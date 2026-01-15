import { listImc } from "../../data/data";
import LineItem from "./LineItem";
import styles from "./ResultClassificationImc.module.css";

type ResultClassificationImcProps = {
  imcValue: number;
};

export default function ResultClassificationImc({
  imcValue: imc,
}: ResultClassificationImcProps) {
  const result = listImc.find(
    (item) => imc >= item.minValue && imc <= item.maxValue
  );

  return (
    <div className={styles.cardResult}>
      <div
        className={`${styles.resultImcContent} ${
          result && styles[result?.color]
        }`}
      >
        <p>Seu IMC atual</p>
        <span className={styles.resultImc}>{imc}</span>
        <span className={styles.classificationImc}>
          {result?.classification}
        </span>
      </div>

      <div className={styles.cardResultText}>
        <div className={styles.line}>
          {listImc.map((item) => (
            <LineItem
              title={item.classification}
              key={item.classification}
              color={item.color}
              isImchere={
                result?.classification === item.classification && (
                  <span
                    className={`material-symbols-outlined ${styles.iconPerson}`}
                  >
                    location_on
                  </span>
                )
              }
            />
          ))}
        </div>
        <h4 className={styles.cardResultTitle}>{result?.text}</h4>
        <p className={styles.cardResultTips}>{result?.tips}</p>
      </div>
    </div>
  );
}
