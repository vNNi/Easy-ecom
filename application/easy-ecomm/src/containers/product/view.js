import { Row, Col } from 'antd';
import { useState } from 'react';
import { Price, Line, FreightLabel, ShippingPrice, ShippingDays } from './view.styles';
import { Header, ListHead, ShippingForm, Button } from '../../components';
import { currencyFormatter } from '../../utils';
import ShippingService from '../../services/shipping';

const View = ({ product }) => {
  const [shipping, setShipping] = useState({});

  if (!product) return <h2>Produto não encontrado :( </h2>;

  const onChange = async e => {
    const { value } = e.target;
    setShipping({});
    if (value?.length === 8) {
      const shippingEstimated = await ShippingService.postEstimate({
        product,
        zipCode: value,
      });
      setShipping(shippingEstimated);
    }
  };

  const onEstimate = e => ({ e });

  const {
    title,
    image = 'https://ninajohansson.se/wp-content/themes/koji/assets/images/default-fallback-image.png',
    description,
    price,
  } = product;

  return (
    <>
      <Header />
      <ListHead.Title>{title}</ListHead.Title>
      <Line>
        <img src={image} width={400} height={320} alt="" />
      </Line>
      <Line>
        <ListHead.Description style={{ margin: '2em 0' }}>
          {description}
        </ListHead.Description>
      </Line>
      <Row gutter={20}>
        <Col span={12}>
          <Line>
            <div style={{ marginRight: '5px' }}>
              <FreightLabel>Calcule seu frete: </FreightLabel>
            </div>
            <div>
              <ShippingForm onEstimate={onEstimate} onChange={onChange} maxLength="8" />
            </div>
          </Line>
        </Col>
        <Col>
          {shipping.error && !shipping.estimate && (
            <p>Produto não está Disponível para entregar nesete CEP</p>
          )}
          {shipping.estimate && (
            <div>
              <ShippingPrice>
                {currencyFormatter({ value: shipping.estimate.Valor.replace(',', '.') })}
              </ShippingPrice>
              <ShippingDays>
                Entrega em: {shipping.estimate.PrazoEntrega} dias
              </ShippingDays>
            </div>
          )}
        </Col>
      </Row>
      <div>
        <Row align="middle" style={{ margin: '3em 0' }}>
          <Col span={14}>
            <Line>
              <Price>À partir de: {currencyFormatter({ value: price })}</Price>
            </Line>
          </Col>
          <Col span={6}>
            <Button>COMPRAR</Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default View;
