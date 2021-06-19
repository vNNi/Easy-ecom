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
  PrincipalText,
  SubText,
  TextWrapper,
} from './view.styles';

import { Button, Header, FilterBox, Footer, ProductList } from '../../components';

const product = {
  title: 'Testando com um titulo maneiro',
  stockCount: 10,
  price: 'R$ 12',
  image:
    'https://electrolux.vteximg.com.br/arquivos/ids/194421-1000-1000/Range_76USV_Front_View_Electrolux_1000x1000.png?v=636987981570200000',
};
const productList = new Array(10).fill(product);

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Header logo={<Image width={90} height={90} src="/logo_white.png" />} />
      <Row>
        <Col xl={12} md={24} xs={24}>
          <TextWrapper>
            <PrincipalText>
              {' '}
              Tudo o que você precisa, procura e deseja. Está aqui!
            </PrincipalText>
            <SubText>
              de modo fácil e prático, crie sua lista de compras online baseado nas
              melhores lojas.
            </SubText>
          </TextWrapper>
        </Col>
        <Col xl={12} md={24} xs={24}>
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
      <Row>
        <ProductList products={productList} />
      </Row>
      <Row style={{ margin: '3em 0' }}>
        <Col span={24}>
          <WhoWeAreContainer>
            <WhoWeAreTitle>Quem somos?</WhoWeAreTitle>
            <WhoWeAreDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but also the
              leap into electronic typesetting, remaining essentially unchanged.
            </WhoWeAreDescription>
          </WhoWeAreContainer>
        </Col>
      </Row>
      <Row>
        <Col xl={12} md={12} xs={24} style={{ padding: '2em 0' }}>
          <FavoriteOffersTitle>Deixei todas ofertas salvas!</FavoriteOffersTitle>
          <FavoriteOffersDescription>
            Favoritando os produtos sem precisar de um login, é nossa forma de deixar
            rápido e fácil, você ter suas ofertas rápidamente e sem nenhuma burocrácia!
          </FavoriteOffersDescription>
          <Col span={12} offset={6}>
            <Button>Ver favoritos!</Button>
          </Col>
        </Col>
        <Col xl={12} md={12} xs={24}>
          <Image src="/home_tech.jpg" width={900} height={600} />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Home;
