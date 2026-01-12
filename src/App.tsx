import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Button from "./components/Button";
import ResultTableImc from "./components/ResultTable";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Intro from "./components/Intro";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setIMC] = useState(0);
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

  return (
    <>
      <Header />
      <div className="container">
        <Intro />
        <div className="contentLayoutGrid">
          <Card>
            <Form
              weightValue={weight}
              heightValue={height}
              handleHeightChangeFunction={handleHeightChange}
              handleWeightChangeFunction={handleWeightChange}
              weightError={weightError}
              heighttError={heighttError}
            />
            <div className="actionsContainer">
              <Button
                onClick={calculaIMC}
                text="Calcular"
                icon={
                  <span className="material-symbols-outlined"> calculate </span>
                }
              />
              <Button onClick={cleanFields} text="Limpar" icon="" />
            </div>
          </Card>

          <Card>
            <ResultTableImc imcValue={imc} />
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
