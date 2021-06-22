import { useRouter } from 'next/router';

import View from './view';
import ProductService from '../../services/product';

const Page = ({ products }) => {
  const router = useRouter();
  const onSearch = (term, e) => {
    e.preventDefault();
    router.push(`/search/${term}`);
  };
  const onFilterClick = (e, item) => {
    e.preventDefault();
    router.push(`/category/${item?.category}`);
  };

  return <View products={products} onSearch={onSearch} onFilterClick={onFilterClick} />;
};

export async function getServerSideProps(ctx) {
  const { categoryId = '', query } = ctx.query;

  const products = await ProductService.getProducts({
    filters: { category: categoryId, term: query },
  });

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: { products, categoryId },
  };
}

export default Page;
