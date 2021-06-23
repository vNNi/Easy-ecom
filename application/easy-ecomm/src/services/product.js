import { objToQueryString } from '../utils';

const serviceHost = process.env.SERVICE_PRODUCT_HOST;

const ProductService = {
  getProducts: async ({ filters = {} } = {}) => {
    try {
      const filtersQuery = objToQueryString(filters);
      const url = `${serviceHost}/products/?${filtersQuery}`;

      const res = await fetch(url);
      const { products } = await res.json();
      return products?.data;
    } catch (e) {
      return [];
    }
  },
  getProduct: async productId => {
    try {
      const url = `${serviceHost}/products/${productId}`;
      const res = await fetch(url);

      const { product } = await res.json();
      const [data] = product || [];
      return data;
    } catch (e) {
      return null;
    }
  },
};

export default ProductService;
