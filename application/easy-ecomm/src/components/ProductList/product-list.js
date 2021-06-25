import { Row, Col } from 'antd';
import { Container } from './product-list.styles';
import ProductCard from '../ProductCard';
import FavoritesService from '../../services/favorites';

const ProductList = ({ products = [], onItemClick, onFavorite }) => {
  const getFavorited = productId => {
    if (typeof window === 'undefined') {
      return false;
    }
    return FavoritesService.getFavorites().find(({ id }) => id === productId);
  };
  return (
    <Container>
      <Row gutter={{ xl: 16, lg: 12, md: 10 }} justify="center">
        {products?.map(product => {
          return (
            <Col
              key={product?.id}
              xl={{ span: 5, md: 3, sm: 2 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <ProductCard
                {...product}
                onClick={onItemClick}
                onFavorite={onFavorite}
                isFavorited={getFavorited(product.id)}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductList;
