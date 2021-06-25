import View from './view';

import ProductService from '../../services/product';

const Page = ({ products }) => {
  return <View products={products} />;
};

export async function getServerSideProps(ctx) {
  const { genreId = '' } = ctx.query;

  const products = await ProductService.getProducts({
    filters: { genre: genreId },
  });

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products, genreId },
  };
}

export default Page;
