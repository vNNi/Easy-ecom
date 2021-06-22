import FavoritesService from './favorites';

const key = 'favorites_easy_ecomm';
const productMock = { id: 2 };

describe('[Services] - Favorites', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
  });

  describe('[getFavorites]', () => {
    test('Should get Item from localStorage', () => {
      FavoritesService.getFavorites();
      expect(localStorage.getItem).toHaveBeenCalled();
    });
  });

  describe('[addFavorite]', () => {
    test('Should set item to storage', () => {
      // eslint-disable-next-line
    localStorage.__STORE__[key] = JSON.stringify([productMock]);
      FavoritesService.addFavorite({ id: 1 });
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'favorites_easy_ecomm',
        JSON.stringify([productMock, { id: 1 }])
      );
    });

    test('Should not add duplicated items', () => {
      // eslint-disable-next-line
    localStorage.__STORE__[key] = JSON.stringify([productMock]);
      FavoritesService.addFavorite(productMock);
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });
  });

  describe('[removeFavorite & removeAllFavorites]', () => {
    test('should remove item from localStorage', () => {
      // eslint-disable-next-line
      localStorage.__STORE__[key] = JSON.stringify([productMock]);
      FavoritesService.removeFavorite(productMock);
      expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify([]));
    });

    test('should not call localStorage when does not have favorites', () => {
      FavoritesService.removeFavorite(productMock);
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });

    test('Should call removeItem', () => {
      FavoritesService.removeAllFavorites();
      expect(localStorage.removeItem).toHaveBeenCalledWith(key);
    });
  });
});
