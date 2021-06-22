import { Container, Label } from './filter-tag.styles';

const FilterTag = ({ sort, category, onFilterClick }) => {
  return (
    <>
      <Container onClick={e => onFilterClick(e, { sort, category })}>
        <Label>{sort}</Label>
      </Container>
    </>
  );
};

export default FilterTag;
