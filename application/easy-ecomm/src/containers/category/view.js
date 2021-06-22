import { Row, Col } from 'antd';

import {
  Header,
  Footer,
  ProductList,
  InputSearch,
  FilterTag,
  ListHead,
} from '../../components';

const Category = ({ products = [], onSearch, onFilterClick }) => {
  const filters = products.map(item => ({
    sort: item?.sort,
    category: item?.category,
  }));
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
          <InputSearch onSearch={onSearch} />
        </Col>
        <Col
          xl={{ span: 12, offset: 6 }}
          md={{ span: 10, offset: 8 }}
          sm={{ span: 10, offset: 8 }}
          style={{ marginTop: '2em', marginBottom: '2em' }}
        >
          <Row style={{ justifyContent: 'space-evenly' }}>
            {filters.map(({ sort, category }) => (
              <Col>
                <FilterTag
                  sort={sort}
                  category={category}
                  onFilterClick={onFilterClick}
                />
              </Col>
            ))}
          </Row>
        </Col>

        <Col
          md={{ span: 10, offset: 8 }}
          sm={{ span: 10, offset: 8 }}
          xl={{ span: 12, offset: 6 }}
        >
          <ListHead.Title>Página de Categoria!</ListHead.Title>
          <ListHead.Description>
            Filtre pela categoria que mais tem a ver com você!
          </ListHead.Description>
        </Col>
        <Col span={20} offset={2}>
          <ProductList products={products} />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Category;
