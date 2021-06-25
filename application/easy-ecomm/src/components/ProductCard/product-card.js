import { useState } from 'react';

import { HeartOutlined, HeartFilled } from '@ant-design/icons';

import { currencyFormatter } from '../../utils';
import {
  Container,
  IconContainer,
  ImageContainer,
  InfosContainer,
  Title,
  InStockLabel,
  StockValue,
  Price,
} from './product-card.styles';

const ProductCard = ({
  id,
  title,
  price,
  image = 'https://ninajohansson.se/wp-content/themes/koji/assets/images/default-fallback-image.png',
  stock_count: stockCount,
  onClick = () => ({}),
  onFavorite = () => ({}),
  isFavorited,
}) => {
  const [favorited, setFavorited] = useState(isFavorited);
  const handleFavoriteClick = () => {
    onFavorite({ id, title, price, image, stock_count: stockCount });
    setFavorited(true);
  };

  const icon = favorited ? (
    <HeartFilled style={{ color: 'red' }} onClick={handleFavoriteClick} />
  ) : (
    <HeartOutlined onClick={handleFavoriteClick} />
  );
  return (
    <Container onClick={e => onClick(e, id)}>
      <IconContainer>{icon}</IconContainer>
      <ImageContainer>
        <img alt="" src={image} width={120} height={100} />
      </ImageContainer>
      <InfosContainer>
        <Title>{title}</Title>
        <div>
          <InStockLabel>Em estoque: </InStockLabel>
          <StockValue>{stockCount || 0}</StockValue>
        </div>
        <Price>{currencyFormatter({ value: Number(price) })}</Price>
      </InfosContainer>
    </Container>
  );
};

export default ProductCard;
