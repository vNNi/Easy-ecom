import View from './view';
import ProductService from '../../services/product';

const Controller = ({ product }) => {
  return <View product={product} />;
};

export async function getServerSideProps(ctx) {
  const {
    query: { productId = '' },
  } = ctx;
  const product = (await ProductService.getProduct(productId)) || {};
  return { props: { productId, product } };
}

export default Controller;
