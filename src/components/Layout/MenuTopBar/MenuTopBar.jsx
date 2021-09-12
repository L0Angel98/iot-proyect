import PropTypes from 'prop-types';
import {ReactComponent as ReactIconIoT} from "./../../../assets/icons/iot.svg"
import styleModule from "./MenuTopBar.module.sass";

const MenuTopBar = ({_handleChangeSection}) => {
  return (
    <div className={styleModule.containerTopBar}>
      <button onClick={() => _handleChangeSection("main")}><ReactIconIoT height="2em" width="2em" stroke="#000" /></button>
      {/*<div>Iconos diseñados por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>*/}
      <div className={styleModule.containerButtonsOptions}>
        <button onClick={() => _handleChangeSection("add_Sensor")} >Agregar sensor</button>
        <button onClick={() => _handleChangeSection("graph")}>Gráficas</button>
      </div>
    </div>
  );
};

MenuTopBar.propTypes = {
  _handleChangeSection: PropTypes.func
};

export default MenuTopBar;