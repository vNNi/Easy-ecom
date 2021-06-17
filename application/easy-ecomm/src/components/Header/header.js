import { Menu, Row, Col } from 'antd';
import {
  HeartOutlined,
  HomeOutlined,
  SearchOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Container } from './header.styles';

const Header = ({ logo }) => {
  return (
    <Container>
      <Row between="xs">
        <Col span={12}>{logo}</Col>
        <Col span={12}>
          <Row style={{ justifyContent: 'flex-end' }}>
            <Col span={12}>
              <Menu theme="dark" mode="horizontal">
                <Menu.Item key="home" icon={<HomeOutlined style={{ color: 'white' }} />}>
                  Início
                </Menu.Item>
                <Menu.Item key="favorites" icon={<HeartOutlined />}>
                  Favoritos
                </Menu.Item>
                <Menu.Item
                  key="categories"
                  icon={<ShareAltOutlined style={{ color: 'white' }} />}
                >
                  Categorias
                </Menu.Item>
                <Menu.Item
                  key="search"
                  icon={<SearchOutlined style={{ color: 'white' }} />}
                >
                  Busca
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
