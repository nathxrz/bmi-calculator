import Card from "../Card";
import ClassificationTable from "../classification/ClassificationTable";
import styles from "./ImcClassificationSection.module.css";
import TitleSection from "./TitleSection";

export default function ImcClassificationSection() {
  return (
    <Card>
      <TitleSection text="Classificação" icon={"info"} />
      <ClassificationTable />
      <p className={styles.info}>
        *O IMC é um indicador geral. Consulte sempre um profissional de saúde
        para uma avaliação física detalhada.
      </p>
    </Card>
  );
}
