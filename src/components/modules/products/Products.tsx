import ProductsView from '@/components/modules/products/ProductsView';
import { useGetProductsQuery } from '@/services/productApi';

function Products() {
  const { data, isFetching, isLoading } = useGetProductsQuery();
  if (isFetching) {
    return <div>로딩중</div>;
  }
  if (isLoading) {
    return <div>로딩중</div>;
  }
  return (
    <section className={`flex flex-col gap-5`}>
      <h1>이주의 인기 상품 목록</h1>
      {data ? <ProductsView data={data} /> : '데이타가없습니다'}
    </section>
  );
}

export default Products;
