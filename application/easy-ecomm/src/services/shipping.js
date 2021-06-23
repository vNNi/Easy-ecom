const serviceHost = process.env.SERVICE_SHIPPING_HOST;

const ShippingService = {
  postEstimate: async ({ product, zipCode }) => {
    const url = `${serviceHost}/shipping/estimate/${zipCode}`;
    const fetchData = {
      method: 'POST',
      mode: 'cors',
      body: {
        product: {
          length: product?.length,
          weight: product?.weight,
          height: product?.height,
          width: product?.width,
          depth: product?.depth,
        },
      },
    };
    const res = await fetch(url, fetchData);
    const data = await res.json();
    return data;
  },
};

export default ShippingService;
