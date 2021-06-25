const serviceHost = process.env.ORDER_SERVICE_HOST || 'http://localhost:4008';

const OrderService = {
  createOrder: async ({ product, user, shipping }) => {
    try {
      const url = `${serviceHost}/order/create`;
      const body = {
        product: {
          user_id: user?.id,
          product_id: product?.id,
          title: product.title,
          description: product.description,
          shipping_estimate: shipping?.estimate.PrazoEntrega,
          product_price: product?.price,
          completed: true,
        },
      };
      const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const { product: prod } = (await res.json()) || {};
      return prod;
    } catch (e) {
      return { error: e };
    }
  },
};

export default OrderService;
