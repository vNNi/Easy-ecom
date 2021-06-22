import { useRouter } from 'next/router';

import View from './view';
import ProductService from '../../services/product';

const Page = ({ products, term }) => {
  const router = useRouter();

  const onPressEnter = newTerm => {
    router.push(`/search/${newTerm}`);
  };

  const onSearch = value => {
    router.push(`/search/${value}`);
  };

  return (
    <View
      products={products}
      onSearch={onSearch}
      onPressEnter={onPressEnter}
      term={term}
    />
  );
};

export async function getServerSideProps(ctx) {
  const { query } = ctx.query;

  const products = await ProductService.getProducts({
    filters: { term: query },
  });

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products, term: query },
  };
}
export default Page;
