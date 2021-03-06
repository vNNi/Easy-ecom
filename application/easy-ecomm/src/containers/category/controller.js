import { useRouter } from 'next/router';

import View from './view';
import ProductService from '../../services/product';
import FavoritesService from '../../services/favorites';

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

  const onItemClick = (e, id) => {
    e.preventDefault();
    router.push(`/product/${id}`);
  };

  const onFavorite = item => {
    FavoritesService.addFavorite(item);
  };

  return (
    <View
      products={products}
      onSearch={onSearch}
      onFilterClick={onFilterClick}
      onItemClick={onItemClick}
      onFavorite={onFavorite}
    />
  );
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
