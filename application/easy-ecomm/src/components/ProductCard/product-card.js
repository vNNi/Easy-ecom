import { HeartOutlined } from '@ant-design/icons';

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

const ProductCard = ({ title, price, image, stockCount, onClick, onFavorite }) => {
  return (
    <Container onClick={onClick}>
      <IconContainer>
        <HeartOutlined onClick={onFavorite} />
      </IconContainer>
      <ImageContainer>
        <img alt="" src={image} width={120} height={100} />
      </ImageContainer>
      <InfosContainer>
        <Title>{title}</Title>
        <div>
          <InStockLabel>Em estoque: </InStockLabel>
          <StockValue>{stockCount}</StockValue>
        </div>
        <Price>{price}</Price>
      </InfosContainer>
    </Container>
  );
};

export default ProductCard;
