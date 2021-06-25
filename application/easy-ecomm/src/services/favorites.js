const FAVORITE_KEY = 'favorites_easy_ecomm';
const FavoritesService = {
  getFavorites: () => {
    const favorites = JSON.parse(localStorage.getItem(FAVORITE_KEY));
    if (favorites?.length) return favorites;
    return null;
  },
  addFavorite: product => {
    const favorites = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
    const favorited = favorites?.find(({ id }) => id === product?.id);

    if (favorited) return false;
    const newFavorites = [...favorites].concat({ ...product, isFavorited: true });
    window.localStorage.setItem(FAVORITE_KEY, JSON.stringify(newFavorites));
    return true;
  },
  removeFavorite: product => {
    const favorites = JSON.parse(localStorage.getItem(FAVORITE_KEY));
    const filtered = favorites?.filter(({ id }) => id !== product?.id);
    if (favorites?.length >= 1 && (filtered?.length || filtered?.length === 0)) {
      window.localStorage.setItem(FAVORITE_KEY, JSON.stringify(filtered));
      return filtered;
    }
    return null;
  },
  removeAllFavorites: () => window.localStorage.removeItem(FAVORITE_KEY),
};

export default FavoritesService;
