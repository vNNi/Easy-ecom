import { ShippingForm } from '../../components';

const View = ({ product }) => {
  const { title, image, description, price } = product;
  return (
    <>
      <h1>{title}</h1>
      <img src={image} alt="" />
      <p>{description}</p>
      <div>
        <p>Calcule seu frete: </p>
        <ShippingForm />
      </div>
      <div>
        <span>{price}</span>
        <button>COMPRAR</button>
      </div>
    </>
  );
};

export default View;
