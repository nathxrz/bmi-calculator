import InputField from "./InputField";

export default function Form({
  weightValue,
  heightValue,
  handleWeightChangeFunction,
  handleHeightChangeFunction,
  weightError,
  heighttError,
}: {
  weightValue: string;
  heightValue: string;
  handleWeightChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleHeightChangeFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  weightError: boolean;
  heighttError: boolean;
}) {
  return (
    <>
      <h1>Calculadora IMC</h1>
      <InputField
        inputValue={weightValue}
        handleValueChange={handleWeightChangeFunction}
        text="Peso (kg)"
        htmlForLabel="weightInput"
        error={weightError}
      />
      <InputField
        inputValue={heightValue}
        handleValueChange={handleHeightChangeFunction}
        text="Altura (m)"
        htmlForLabel="heightInput"
        error={heighttError}
      />
    </>
  );
}
