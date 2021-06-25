import { FilterFilled } from '@ant-design/icons';
import { Container, Description, IconContainer, Title } from './filter-box.styles';

const FilterBox = ({ key, title, description, icon, onClick }) => {
  const Icon = icon || <FilterFilled style={{ fontSize: '50px', color: 'white' }} />;
  return (
    <Container onClick={e => onClick(key, e)} id={key || title}>
      <IconContainer>{Icon}</IconContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default FilterBox;
