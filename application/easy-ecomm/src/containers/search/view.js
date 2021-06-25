import { useState } from 'react';

import { Row, Col } from 'antd';

import { Header, InputSearch, ProductList, ListHead, Footer } from '../../components';

const View = ({ products, onSearch, onPressEnter, term, onProductClick }) => {
  const [userTerm, setUserTerm] = useState(term);

  const onChange = e => {
    setUserTerm(e.target.value);
  };

  return (
    <>
      <Header width={90} height={90} />
      <Row>
        <Col
          xl={{ span: 12, offset: 6 }}
          md={{ span: 10, offset: 8 }}
          sm={{ span: 10, offset: 8 }}
          style={{ marginTop: '2em', marginBottom: '2em' }}
        >
          <InputSearch
            onSearch={onSearch}
            defaultValue={term}
            onPressEnter={() => onPressEnter(userTerm)}
            onChange={onChange}
          />
        </Col>
        <Col
          md={{ span: 10, offset: 8 }}
          sm={{ span: 10, offset: 8 }}
          xl={{ span: 12, offset: 6 }}
        >
          <ListHead.Title>Página de Busca!</ListHead.Title>
          <ListHead.Description>
            Pesquise por um termo e encontre os melhores preços!
          </ListHead.Description>
        </Col>
        <Col span={20} offset={2}>
          <ProductList products={products} onItemClick={onProductClick} />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default View;
