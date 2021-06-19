import { Row, Col } from 'antd';
import { Container } from './product-list.styles';
import ProductCard from '../ProductCard';

const ProductList = ({ products = [], onItemClick }) => {
  return (
    <Container>
      <Row gutter={{ xl: 16, lg: 12, md: 10 }} justify="center">
        {products?.map(product => {
          return (
            <Col
              xl={{ span: 5, md: 3, sm: 2 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <ProductCard {...product} onClick={onItemClick} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductList;
