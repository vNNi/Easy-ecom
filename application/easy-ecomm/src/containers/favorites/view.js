import { ProductList, Header, ListHead } from '../../components';

const View = ({ favorites }) => {
  return (
    <>
      <Header />
      <ListHead.Title>Página de Favoritos!</ListHead.Title>
      <ListHead.Description>Todos seus favoritos em um só lugar</ListHead.Description>
      <ProductList products={favorites} />
    </>
  );
};

export default View;
