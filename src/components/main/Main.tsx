import { useState } from "react";
import ResultClassificationImc from "../classification/ResultClassificationImc";
import styles from "./Main.module.css";
import ImcHeader from "./ImcHeader";
import ImcFormSection from "./ImcFormSection";
import ImcClassificationSection from "./ImcClassificationSection";
import HealthTip from "../HealthTip";

export default function Main() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setIMC] = useState(0);
  const [visibleResult, setVisibleResult] = useState(false);
  const [weightError, setWeightError] = useState(false);
  const [heightError, setHeightError] = useState(false);

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

    const imcValue = weightValue / Math.pow(heightValue / 100, 2);

    setIMC(Number(imcValue.toFixed(1)));
    setVisibleResult(true);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/^(\d+(\.\d?)?).*$/, "$1");

    setWeight(value);
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");

    setHeight(value);
  };

  const cleanFields = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setWeight("");
    setHeight("");
    setWeightError(false);
    setHeightError(false);
    setVisibleResult(false);
  };

  return (
    <main className={styles.container}>
      <ImcHeader />

      <div className={styles.contentLayoutGrid}>
        <ImcFormSection
          weight={weight}
          height={height}
          handleHeightChange={handleHeightChange}
          handleWeightChange={handleWeightChange}
          weightError={weightError}
          heightError={heightError}
          calculaIMC={calculaIMC}
          cleanFields={cleanFields}
        />

        <ImcClassificationSection />
      </div>
      <HealthTip />

      {visibleResult && <ResultClassificationImc imcValue={imc} />}
    </main>
  );
}
