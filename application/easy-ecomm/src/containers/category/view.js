import { Row, Col } from 'antd';
import { useRouter } from 'next/router';

import { Header, Footer, ProductList, InputSearch } from '../../components';

const Category = ({ products }) => {
  const router = useRouter();

  const onSearch = (e, term) => {
    e.preventDefault();
    router.push(`/search/${term}`);
  };

  return (
    <>
      <Header width={90} height={90} />
      <Row>
        <Col xl={{ span: 18, offset: 6 }}>
          <InputSearch onSearch={onSearch} />
        </Col>
      </Row>
      <Col xl={{ span: 16, offset: 8 }}>
        <ProductList products={products} />
      </Col>
      <Footer />
    </>
  );
};

export default Category;
