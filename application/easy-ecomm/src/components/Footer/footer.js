import { Row, Col } from 'antd';
import { Container, Item, FooterBottom, FooterBottomText } from './footer.styles';

const FooterComp = () => {
  return (
    <>
      <Container>
        <Row>
          <Col span={12} offset={6}>
            <Row gutter={20}>
              <Col span={6}>
                <Item>Icon</Item>
              </Col>
              <Col span={6}>
                <p>
                  <Item>Categorias</Item>
                </p>
                <p>
                  <Item>Busca</Item>
                </p>
              </Col>
              <Col span={6}>
                <p>
                  <Item>Favoritos</Item>
                </p>
                <p>
                  <Item>Suporte</Item>
                </p>
              </Col>
              <Col span={6}>
                <p>
                  <Item>Redes sociais</Item>
                </p>
                <p>
                  <Item href="#">Home</Item>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <FooterBottom>
        <Row justify="space-around" align="middle" style={{ height: '100%' }}>
          <Col span={12}>
            <FooterBottomText>Easy Ecomm</FooterBottomText>
          </Col>
          <Col span={12}>
            <FooterBottomText>
              Copyright © 2010-2021 Todos os direitos reservados.
            </FooterBottomText>
          </Col>
        </Row>
      </FooterBottom>
    </>
  );
};

export default FooterComp;
