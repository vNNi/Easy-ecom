import { Menu, Row, Col } from 'antd';
import { useRouter } from 'next/router';

import {
  HeartOutlined,
  HomeOutlined,
  SearchOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Container } from './header.styles';

const Header = ({ logo }) => {
  const router = useRouter();

  return (
    <Container id="header">
      <Row between="xs">
        <Col span={12}>{logo}</Col>
        <Col span={12}>
          <Row style={{ justifyContent: 'flex-end' }}>
            <Col span={12}>
              <Menu theme="dark" mode="horizontal">
                <Menu.Item
                  onClick={() => router.push('/')}
                  key="home"
                  icon={<HomeOutlined style={{ color: 'white' }} />}
                >
                  Início
                </Menu.Item>
                <Menu.Item
                  onClick={() => router.push('/favorites')}
                  key="favorites"
                  icon={<HeartOutlined />}
                >
                  Favoritos
                </Menu.Item>
                <Menu.Item
                  onClick={() => router.push('/category')}
                  key="categories"
                  icon={<ShareAltOutlined style={{ color: 'white' }} />}
                >
                  Categorias
                </Menu.Item>
                <Menu.Item
                  onClick={() => router.push('/search')}
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
