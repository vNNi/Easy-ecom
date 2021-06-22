import { HeartOutlined } from '@ant-design/icons';

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
  title,
  price,
  image = 'https://ninajohansson.se/wp-content/themes/koji/assets/images/default-fallback-image.png',
  stock_count: stockCount,
  onClick,
  onFavorite,
}) => {
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
          <StockValue>{stockCount || 0}</StockValue>
        </div>
        <Price>{currencyFormatter({ value: Number(price) })}</Price>
      </InfosContainer>
    </Container>
  );
};

export default ProductCard;
