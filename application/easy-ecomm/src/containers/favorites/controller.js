import { useRouter } from 'next/router';
import View from './view';
import FavoritesService from '../../services/favorites';

const Page = () => {
  let favorites = [];
  if (typeof window !== 'undefined') {
    favorites = FavoritesService.getFavorites();
  }
  const { push } = useRouter();

  const onItemClick = (e, id) => {
    push(`/product/${id}`);
  };

  return <View favorites={favorites} onItemClick={onItemClick} />;
};

export default Page;
