import ClassificationItem from "./ClassificationItem";
import styles from "./Classificationtable.module.css";
export default function ClassificationTable() {
  return (
    <div className={styles.classificationTable}>
      <ClassificationItem
        text={"Abaixo do peso"}
        valueLeft={""}
        symbol={"<"}
        valueRight={"18.5"}
        classification={"lowWeight"}
      />

      <ClassificationItem
        text={"Peso Normal"}
        valueLeft={"18.5"}
        symbol={"–"}
        valueRight={"24.9"}
        classification={"normalWeight"}
      />

      <ClassificationItem
        text={"Sobrepeso"}
        valueLeft={"25"}
        symbol={"–"}
        valueRight={"29.9"}
        classification={"overweight"}
      />

      <ClassificationItem
        text={"Obesidade I, II ou III"}
        valueLeft={""}
        symbol={">"}
        valueRight={"30"}
        classification={"obesity"}
      />
    </div>
  );
}
