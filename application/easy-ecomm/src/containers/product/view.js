import { Row, Col } from 'antd';
import { useState } from 'react';
import {
  Price,
  Line,
  FreightLabel,
  ShippingPrice,
  ShippingDays,
  ShippingError,
  OrderSuccess,
  OrderError,
} from './view.styles';
import { Header, ListHead, ShippingForm, Button } from '../../components';
import { currencyFormatter } from '../../utils';

import ShippingService from '../../services/shipping';
import OrderService from '../../services/order';

const View = ({ product }) => {
  const [shipping, setShipping] = useState({});
  const [order, setOrder] = useState({});

  if (!product?.price) return <h2>Produto não encontrado :( </h2>;

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

  const onBuyButtonClick = async () => {
    const created = await OrderService.createOrder({
      product,
      shipping,
      user: { id: 1 },
    });
    if (!created.error) {
      setOrder({ success: true, ...created });
    } else {
      setOrder({ error: 'Não foi possível adicionar ao carrinho' });
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
            <ShippingError>
              Produto não está Disponível para entregar nesete CEP
            </ShippingError>
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
              <Price id="price">À partir de: {currencyFormatter({ value: price })}</Price>
            </Line>
          </Col>
          <Col span={6}>
            <Button id="buy-button" onClick={onBuyButtonClick}>
              COMPRAR
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'center' }}>
            {order?.success && <OrderSuccess>Pedido criado com sucesso!</OrderSuccess>}
          </Col>
          <Col span={24}>{order?.error && <OrderError>{order.error}</OrderError>}</Col>
        </Row>
      </div>
    </>
  );
};

export default View;
