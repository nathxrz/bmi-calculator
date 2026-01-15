import "./App.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ThemeModeContext } from "./context/ThemeModeContext";
import { useContext } from "react";
import Main from "./components/main/Main";

function App() {
  const themeContext = useContext(ThemeModeContext);

  if (!themeContext) {
    return null;
  }

  const { theme } = themeContext;

  return (
    <div className={theme === "dark" ? "main theme-dark" : "main theme-light"}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
