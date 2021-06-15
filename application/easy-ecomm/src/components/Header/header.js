import { Menu } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { Container } from './header.styles';

const Header = () => {
  return (
    <Container>
      <div />
      <div />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="favorites" icon={<HeartOutlined />}>
          Favoritos
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default Header;
