import { useState } from "react";
import styleModule from "./App.module.sass";
import Footer from "./components/Layout/Footer/Footer";
import Main from "./components/Layout/Main/Main";
import MenuTopBar from "./components/Layout/MenuTopBar/MenuTopBar";

const App = () => {
  const [seccion, setSeccion] = useState("main");
  return (
    <div className={styleModule.main}>
      <MenuTopBar _handleChangeSection={(item) => setSeccion(item)} />
      <div className={styleModule.containerContent}>
        {seccion == "main" ? (
          <Main />
        ) : seccion == "add_Sensor" ? (
          <div>Agregar Sensor</div>
        ) : (
          <div>Gráficas</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
