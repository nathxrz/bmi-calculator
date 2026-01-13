import { useContext, useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Intro from "./components/Intro";
import ClassificationTable from "./components/classification/ClassificationTable";
import TipBox from "./components/TipBox";
import ResultClassificationImc from "./components/ResultClassificationImc";
import { ThemeModeContext } from "./context/ThemeModeContext";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setIMC] = useState(0);
  const [visibleResult, setVisibleResult] = useState(false);
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

    const imcValue = weightValue / Math.pow(heightValue / 100, 2);

    setIMC(imcValue);
    setVisibleResult(true);
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
    setVisibleResult(false);
  };

  const themeContext = useContext(ThemeModeContext);

  if (!themeContext) {
    return null;
  }

  const { theme } = themeContext;

  return (
    <div className={theme === "dark" ? "main theme-dark" : "main theme-light"}>
      <Header />
      <div className="container">
        <Intro />
        <div className="contentLayoutGrid">
          <Card>
            <h2 className="sectionTitle">
              <span className="material-symbols-outlined">edit_square</span>
              Insira seus dados
            </h2>
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
            <h2 className="sectionTitle">
              <span className="material-symbols-outlined">info</span>
              Classificação
            </h2>
            <ClassificationTable />
            <p className="info">
              *O IMC é um indicador geral. Consulte sempre um profissional de
              saúde para uma avaliação física detalhada.
            </p>
          </Card>
        </div>
        <TipBox />

        {visibleResult && <ResultClassificationImc imcValue={imc} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
