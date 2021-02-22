import { Row, Col, Button, Statistic } from "antd";
import StyleContent from "./../styles/Content.module.css";
const Content = () => {
  return (
    <Row>
      <Col span={24}>
        <div className={StyleContent.Text_Principal}>
          <h1 className={StyleContent.Text_Principal_H1}>
            Centro de Inovación y Emprendimiento
          </h1>
          <h3 className={StyleContent.Text_Principal_H3}>
            Ecosistema de emprendimiento de la Corporacion Universitaria
            Americana
          </h3>
        </div>
        <div className={StyleContent.Div_Img}>
          <img src="./working.svg" className={StyleContent.Img_Working} />
        </div>
        <div className={StyleContent.Text_Secondary}>
          <h1 className={StyleContent.Text_Secondary_H1}>Nuestra Plataforma</h1>
          <p className={StyleContent.Text_Secondary_P}>
            Es un sistema de gestion que permite integrar los procesos y
            servicios
          </p>
          <p className={StyleContent.Text_Secondary_P}>
            Del centro de inovación y emprendimiento
          </p>
        </div>
        <div className={StyleContent.Text_Secondary}>
          <h1 className={StyleContent.Text_Secondary_H1}>¿Que ofrecemos?</h1>
          <div className={StyleContent.Div_Img}>
            <img className={StyleContent.Img_Offer} src="./offer.svg" />
          </div>
        </div>
      </Col>

      <Col span={24}>
        <div className={StyleContent.Services}>
          <div className={StyleContent.Services_Content}>
            <p>Asesoria a los proyectos, por los docentes de la </p>
            <p>Corporacion Universitaria Americana</p>
            <div className={StyleContent.Div_Img}>
              <img className={StyleContent.Img_Team} src="./team.svg" />
            </div>
            <Button className={StyleContent.Button_Info} type="primary">
              Conoce mas
            </Button>
          </div>
          <div className={StyleContent.Services_Content}>
            <p>Espacios de co-working, para trabajar en</p>
            <p>tus proyectos</p>
            <div className={StyleContent.Div_Img}>
              <img className={StyleContent.Img_Team} src="./office.svg" />
            </div>
            <Button className={StyleContent.Button_Info} type="primary">
              Conoce mas
            </Button>
          </div>
          <div className={StyleContent.Services_Content}>
            <p>Te preparamos para presentarte en</p>
            <p> concursos y eventos</p>
            <div className={StyleContent.Div_Img}>
              <img className={StyleContent.Img_Team} src="./conect.svg" />
            </div>
            <Button className={StyleContent.Button_Info} type="primary">
              Conoce mas
            </Button>
          </div>
        </div>
      </Col>
      <Col span={24}>
        <div className={StyleContent.Text_Tertiary}>
          <h1 className={StyleContent.Text_Tertiary_H1}>
            Con la plataforma Gestion CIE
          </h1>
          <p>
            Ayudamos a nuestros estudiantes a llevar a cabo sus emprendimientos
          </p>
          <p>
            gestionamos los servicios y eventos ofrecidos para la formación de
          </p>
          <p>nuestros emprendedores</p>
        </div>
        <div className={StyleContent.Text_Tertiary}>
          <h1 className={StyleContent.Text_Tertiary_H1}>
            Unete hoy, nuestro equipo de docentes te ayudara
          </h1>
          <Button type="primary" style={{ width: "11%" }}>
            Unete
          </Button>
        </div>
      </Col>
      <Col span={24}>
        <div className={StyleContent.Statistics}>
          <Statistic title="Proyectos Atendidos" value={30} />

          <Statistic title="Proyectos Culminados" value={30} />
        </div>
      </Col>
    </Row>
  );
};

export default Content;
