import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Button from "./components/Button";
import ResultTableImc from "./components/resultTable";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setIMC] = useState<number | null>(null);
  const [weightError, setWeightError] = useState(false);
  const [heighttError, setHeightError] = useState(false);

  const calculaIMC = () => {
    const isWeightInvalid = weight.trim() === "";
    const isHeightInvalid = height.trim() === "";

    setWeightError(isWeightInvalid);
    setHeightError(isHeightInvalid);

    if (isWeightInvalid || isHeightInvalid) {
      return;
    }
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    const imcValue = weightValue / Math.pow(heightValue, 2);

    setIMC(imcValue);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
  };

  const cleanFields = () => {
    setWeight("");
    setHeight("");
    setWeightError(false);
    setHeightError(false);
  };

  const restart = () => {
    setIMC(null);
  };

  return (
    <>
      {imc === null ? (
        <>
          <Form
            weightValue={weight}
            heightValue={height}
            handleHeightChangeFunction={handleHeightChange}
            handleWeightChangeFunction={handleWeightChange}
            weightError={weightError}
            heighttError={heighttError}
          />
          <Button onClick={calculaIMC} text="Calcular" />
          <Button onClick={cleanFields} text="Limpar" />
        </>
      ) : (
        <>
          <ResultTableImc imcValue={imc} />
          <Button onClick={restart} text="Voltar" />
        </>
      )}
    </>
  );
}

export default App;
