import { Input } from 'antd';

import { Container } from './input-search.styles';

const InputSearch = ({ onSearch, ...props }) => {
  return (
    <Container>
      <Input.Search
        placeholder="input search text"
        onSearch={onSearch}
        enterButton
        {...props}
      />
    </Container>
  );
};

export default InputSearch;
