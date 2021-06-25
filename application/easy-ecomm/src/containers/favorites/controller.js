import View from './view';
import FavoritesService from '../../services/favorites';

const Page = () => {
  let favorites = [];
  if (typeof window !== 'undefined') {
    favorites = FavoritesService.getFavorites();
  }
  return <View favorites={favorites} />;
};

export default Page;
