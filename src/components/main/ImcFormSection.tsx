import Card from "../Card";
import ButtonForm from "../form/ButtonForm";
import Form from "../form/Form";
import styles from "./ImcFormSection.module.css";
import TitleSection from "./TitleSection";

type ImcFormSectionProps = {
  weight: string;
  height: string;
  handleHeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleWeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  weightError: boolean;
  heightError: boolean;
  calculaIMC: () => void;
  cleanFields: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function ImcFormSection({
  weight,
  height,
  handleHeightChange,
  handleWeightChange,
  weightError,
  heightError,
  calculaIMC,
  cleanFields,
}: ImcFormSectionProps) {
  return (
    <Card>
      <TitleSection text="Insira seus dados" icon={"edit_square"} />

      <Form
        weightValue={weight}
        heightValue={height}
        handleHeightChangeFunction={handleHeightChange}
        handleWeightChangeFunction={handleWeightChange}
        weightError={weightError}
        heightError={heightError}
      />

      <div className={styles.actionsContainer}>
        <ButtonForm
          onClick={calculaIMC}
          text="Calcular"
          className={"actionSubmit"}
          icon={<span className="material-symbols-outlined"> calculate </span>}
        />
        <ButtonForm
          onClick={cleanFields}
          text="Limpar"
          className={"actionClear"}
          icon=""
        />
      </div>
    </Card>
  );
}
