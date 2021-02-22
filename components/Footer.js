import { Col, Row } from "antd";
import StylesFooter from "./../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={StylesFooter.Footer}>
      <div className={StylesFooter.Footer_Info}>
        <Row>
          <Col className={StylesFooter.Footer_Info_1} span={8}>
            <p>Edificios</p>
            <p>Cosmo: calle 72 No. 41c - 64</p>
            <p>Barranquilla - Atlantico</p>
          </Col>
          <Col className={StylesFooter.Footer_Info_2} span={8}>
            <p>Contactos</p>
            <p>Telefono: 3827745</p>
            <p>Celular: 3017591492</p>
            <p>Correo Electronico:</p>
            <p>gestioncie@americana.edu.co</p>
          </Col>
          <Col className={StylesFooter.Footer_Info_3} span={8}>
            <img
              className={StylesFooter.Img_Footer_Americana}
              src="./footer_americana.png"
            />
          </Col>
        </Row>
      </div>
      <div className={StylesFooter.Footer_Copyright}>
        <Row>
          <Col className={StylesFooter.Copyright} span={24}>
            <p>
              Corporación Universitaria Americana - Todos los derechos
              reservados
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
