import PropTypes from 'prop-types';
import styleModule from "./Footer.module.sass";
const Footer = props => {
  return (
    <div className={styleModule.containerFooter}>
      &copy; 2021 Luis Ángel Velázquez Palomino
    </div>
  );
};

Footer.propTypes = {
  
};

export default Footer;