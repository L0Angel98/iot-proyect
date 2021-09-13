import { useState } from "react";
import styleModule from "./App.module.sass";
import AddSensor from "./components/Layout/AddSensor/AddSensor";
import Footer from "./components/Layout/Footer/Footer";
import GraphsSensors from "./components/Layout/GraphsSensors/GraphsSensors";
import Main from "./components/Layout/Main/Main";
import MenuTopBar from "./components/Layout/MenuTopBar/MenuTopBar";
import myLocalStorage from "./components/Utils/myLocalStorage";
const App = () => {
  const [seccion, setSeccion] = useState( !!myLocalStorage.get("section") ? myLocalStorage.get("section")  : "main");
  return (
    <div className={styleModule.main}>
      <MenuTopBar _handleChangeSection={(item) => setSeccion(item)} />
      <div className={styleModule.containerContent}>
        {seccion == "main" ? (
          <Main />
        ) : seccion == "add_Sensor" ? (
          <AddSensor _nextPage={() => setSeccion("")}/>
        ) : (
          <GraphsSensors />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
