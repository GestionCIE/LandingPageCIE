import Link from "next/link";
import { Row, Col } from "antd";

import StyleMenu from "../styles/Menu.module.css";
import StyleUtils from "../styles/Utils.module.css";
const Menu = () => {
  return (
    <nav className={`${StyleUtils.UtilityFlex} ${StyleMenu.Menu} `}>
      <ul className={`${StyleUtils.UtilityFlex} ${StyleMenu.Ul}`}>
        <Link href="/">
          <a>CIE</a>
        </Link>
        <Link href="/about">
          <a>Acerca de</a>
        </Link>
        <Link href="/profiles">
          <a>Perfiles</a>
        </Link>
        <Link href="/projects">
          <a>Proyectos</a>
        </Link>
        <Link href="/advisers">
          <a>Asesores</a>
        </Link>
      </ul>
    </nav>
  );
  /* <Row className={StyleMenu.Row}>
        <Col span={24} className={StyleMenu.Menu}>
          <Row>
            <Col>
              <Link href="/">
                <a>CIE</a>
              </Link>
            </Col>
            <Col>
              <Link href="/about">
                <a>Acerca de</a>
              </Link>
            </Col>
            <Col>
              <Link href="/profiles">
                <a>Perfiles</a>
              </Link>
            </Col>
            <Col>
              <Link href="/projects">
                <a>Proyectos</a>
              </Link>
            </Col>
            <Col>
              <Link href="/advisers">
                <a>Asesores</a>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link href="/signup">
                <a>Iniciar Seccion</a>
              </Link>
            </Col>
            <Col>
              <Link href="/signin">
                <a>Registrarse</a>
              </Link>
            </Col>
          </Row>
        </Col>
    </Row> */
};

export default Menu;
