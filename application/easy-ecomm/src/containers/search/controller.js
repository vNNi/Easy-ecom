import View from './view';
import ProductService from '../../services/product';

const Page = () => {
  return <View />;
};

export async function getServerSideProps(ctx) {
  const { category, query } = ctx.query;

  const products = await ProductService.getProducts({
    filters: { category, term: query },
  });

  if (!products) {
    return {
      notFound: true,
    };
  }

  console.log('products', products);

  return {
    props: { products },
  };
}
export default Page;
