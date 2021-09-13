import PropTypes from "prop-types";
import myLocalStorage from "../../Utils/myLocalStorage";
import styleModule from "./AddSensor.module.sass";
import { useState } from "react";

const InputText = ({ title, _onChange, value, placeholder, name }) => {
  return (
    <label className={styleModule.containerInputText}>
      {title}
      <input
        name={name}
        className={styleModule.input}
        onChange={_onChange}
        value={value}
        placeholder={placeholder}
        type="text"
        required
      />
    </label>
  );
};

InputText.propTypes = {
  name: PropTypes.string,
  _onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

const AddSensor = ({_nextPage}) => {
  const [dataSensor, setDataSensor] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataSensor({ ...dataSensor, [name]: value });
    console.log(name, value);
  };
  const handleSubmit = (e) => {
    const dataSensorSave = myLocalStorage.get("sensors");
    let clearSpace = {};
    Object.keys(dataSensor).forEach(
      (item) =>
        (clearSpace = { ...clearSpace, [item]: dataSensor[item].trim() })
    );
    myLocalStorage.set(
      "sensors",
      !!dataSensorSave ? [{ ...clearSpace }, ...dataSensorSave ] : [{ ...clearSpace }]
    );
    //setDataSensor({});
    _nextPage();
    e.preventDefault();
  };

  return (
    <form className={styleModule.containerAddSensor} onSubmit={handleSubmit}>
      <h2>Agrega un sensor</h2>
      <InputText
        title={"Nombre del Sensor"}
        name={"sensorName"}
        value={dataSensor.sensorName || ""}
        placeholder={"Escribe un nombre para tu sensor"}
        _onChange={handleChange}
      />
      <InputText
        title={"Id del Canal"}
        name={"idChannel"}
        value={dataSensor.idChannel || ""}
        placeholder={"Escribe el Id del Canal"}
        _onChange={handleChange}
      />
      <InputText
        title={"Api key"}
        name={"apiKey"}
        value={dataSensor.apiKey || ""}
        placeholder={"Escribe el Api Key"}
        _onChange={handleChange}
      />
      <InputText
        title={"Número de Campo"}
        name={"numberField"}
        value={dataSensor.numberField || ""}
        placeholder={"Escribe el numero de campo"}
        _onChange={handleChange}
      />
      <button type="submit" value="Submit">
        Agregar Sensor
      </button>
    </form>
  );
};

AddSensor.propTypes = {
  _nextPage: PropTypes.func
};

export default AddSensor;
