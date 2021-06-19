import View from './view';
import ProductService from '../../services/product';

const Page = ({ products }) => {
  return <View products={products} />;
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

  return {
    props: { products },
  };
}

export default Page;
