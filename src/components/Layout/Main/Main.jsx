import PropTypes from "prop-types";
import styleModule from "./Main.module.sass";
import Image1 from "./../../../assets/images/iot-conection.png";
import { ReactComponent as ReactIconArrow } from "./../../../assets/icons/right-arrow.svg";
import Image2 from "./../../../assets/images/conect.png";
import Image3 from "./../../../assets/images/configuration.png";
import Image4 from "./../../../assets/images/segnal.png";

const ImgDescription = ({src, alt, description}) => {
  return(
    <div className={styleModule.containerImgDescription}>
      <img src={src} alt={alt} />
      <h2>{description}</h2>
    </div>
  )
}

const Main = (props) => {
  return (
    <div className={styleModule.containerMain}>
      <img src={Image1} />
      <div className={styleModule.slogan}>Conecta tu proceso</div>
      <div className={styleModule.flow}>
        {/*<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>*/}
        <ImgDescription src={Image2} alt="conecta" description={"Conecta"}/>
        <ReactIconArrow heigth="3em" width="3em" stroke="#000" />
        <ImgDescription src={Image3} alt="configura" description={"Configura"}/>
        <ReactIconArrow heigth="3em" width="3em" stroke="#000" />
        <ImgDescription alt="monitora" src={Image4} description={"Monitorea"}/>
      </div>
    </div>
  );
};

Main.propTypes = {};

export default Main;
