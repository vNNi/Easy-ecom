import { Input } from 'antd';

import { Container } from './input-search.styles';

const InputSearch = ({ onSearch }) => {
  return (
    <Container>
      <Input.Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        enterButton
      />
    </Container>
  );
};

export default InputSearch;
