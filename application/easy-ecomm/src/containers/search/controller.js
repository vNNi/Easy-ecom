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

  const onProductClick = (e, id) => {
    router.push(`/product/${id}`);
  };

  return (
    <View
      products={products}
      onSearch={onSearch}
      onPressEnter={onPressEnter}
      term={term}
      onProductClick={onProductClick}
    />
  );
};

export async function getServerSideProps(ctx) {
  const { query = '', sort = 'price' } = ctx.query;

  const products =
    (await ProductService.getProducts({
      filters: { term: query, order: `${sort},asc` },
    })) || [];

  return {
    props: { products, term: query },
  };
}
export default Page;
