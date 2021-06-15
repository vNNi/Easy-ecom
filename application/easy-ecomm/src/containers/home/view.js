import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  SearchOutlined,
  TrophyOutlined,
  TagsOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Row, Col } from 'antd';

import {
  WhoWeAreContainer,
  WhoWeAreDescription,
  WhoWeAreTitle,
  FavoriteOffersTitle,
  FavoriteOffersDescription,
} from './view.styles';

import { Button, Header, FilterBox, Footer } from '../../components';

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <Row>
        <Col span={12}>
          <p>Some cool text to do later</p>
        </Col>
        <Col span={12}>
          <Image width={1600} height={1000} src="/home_grocery.jpg" />
        </Col>
      </Row>
      <Row style={{ margin: '2em 0' }}>
        <Col span={12} offset={6}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <FilterBox
                onClick={() => router.push('/category')}
                title="Categorias"
                description="Veja os últimos produtos ordenados por categorias!"
                icon={<ShareAltOutlined style={{ fontSize: '50px', color: 'white' }} />}
              />
            </Col>
            <Col span={12}>
              <FilterBox
                onClick={() => router.push('/search')}
                title="Palavra"
                description="Pesquise por um produto por palavras chaves!"
                icon={<SearchOutlined style={{ fontSize: '50px', color: 'white' }} />}
              />
            </Col>
            <Col span={12}>
              <FilterBox
                onClick={() => router.push('/search?sort=mostViewed')}
                title="Visualizados"
                description="Veja os últimos produtos mais visualizados!"
                icon={<TrophyOutlined style={{ fontSize: '50px', color: 'white' }} />}
              />
            </Col>
            <Col span={12}>
              <FilterBox
                title="Estilo"
                onClick={() => router.push('/genre')}
                description="Veja os últimos produtos ordenados por genêros!"
                icon={<TagsOutlined style={{ fontSize: '50px', color: 'white' }} />}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ margin: '3em 0' }}>
        <Col span={24}>
          <WhoWeAreContainer>
            <WhoWeAreTitle>Quem somos?</WhoWeAreTitle>
            <WhoWeAreDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially unchanged.
            </WhoWeAreDescription>
          </WhoWeAreContainer>
        </Col>
      </Row>
      <Row>
        <Col span={12} style={{ padding: '2em 0' }}>
          <FavoriteOffersTitle>Deixei todas ofertas salvas!</FavoriteOffersTitle>
          <FavoriteOffersDescription>
            Favoritando os produtos sem precisar de um login, é nossa forma de deixar
            rápido e fácil, você ter suas ofertas rápidamente e sem nenhuma burocrácia!
          </FavoriteOffersDescription>
          <Col span={12} offset={6}>
            <Button>Ver favoritos!</Button>
          </Col>
        </Col>
        <Col span={12}>
          <Image src="/home_tech.jpg" width={900} height={600} />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Home;
