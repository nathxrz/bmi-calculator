import InputField from "./InputField";
import styles from "./Form.module.css";

type FormProps = {
  weightValue: string;
  heightValue: string;
  handleWeightChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleHeightChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  weightError: boolean;
  heightError: boolean;
};

export default function Form({
  weightValue,
  heightValue,
  handleWeightChangeFunction,
  handleHeightChangeFunction,
  weightError,
  heightError,
}: FormProps) {
  return (
    <form className={styles.form}>
      <InputField
        inputValue={weightValue}
        handleValueChange={handleWeightChangeFunction}
        text="Peso (kg)"
        placeholder="00.0"
        metric="kg"
        htmlForLabel="weightInput"
        error={weightError}
      />
      <InputField
        inputValue={heightValue}
        handleValueChange={handleHeightChangeFunction}
        text="Altura (cm)"
        placeholder="175"
        metric="cm"
        htmlForLabel="heightInput"
        error={heightError}
      />
    </form>
  );
}
