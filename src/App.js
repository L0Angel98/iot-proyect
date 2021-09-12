import { useState } from "react";
import styleModule from "./App.module.sass"

const App = () => {
  const [counter, setCounter] = useState(0);
  const [values, setValues] = useState();

  const handleClick = () => {
    setCounter(counter + 1);
    setValues(values.concat(counter));
  };

  return(
  <div className={styleModule.container}>
    <h1>Hello World</h1>
    <button onClick={handleClick}> press this!</button>
    <div>
      <strong> {counter} </strong>
      </div>
  </div>
  );
}

export default App;