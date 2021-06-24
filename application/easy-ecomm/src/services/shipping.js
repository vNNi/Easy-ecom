const serviceHost =
  process.env.NEXT_PUBLIC_SERVICE_SHIPPING_HOST || 'http://localhost:4022';

const ShippingService = {
  postEstimate: async ({ product, zipCode }) => {
    try {
      const url = `${serviceHost}/shipping/estimate/${zipCode}`;
      const fetchData = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product: {
            length: product?.length || '20',
            weight: product?.weight || '1',
            height: product?.height || '20',
            width: product?.width || '20',
            depth: product?.depth || '0',
          },
        }),
      };
      console.log('ur', url);
      const res = await fetch(url, fetchData);
      const data = await res.json();
      return data;
    } catch (e) {
      console.log('error', e);
      return { error: e };
    }
  },
};

export default ShippingService;
