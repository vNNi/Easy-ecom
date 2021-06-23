import View from './view';
import ProductService from '../../services/product';

const Controller = ({ product }) => {
  return <View product={product} />;
};

export async function getServerSideProps(ctx) {
  const {
    query: { productId = '' },
  } = ctx;
  console.log('ctx', productId);
  const product = await ProductService.getProduct(productId);
  console.log('product', product);
  return { props: { productId, product } };
}

export default Controller;
