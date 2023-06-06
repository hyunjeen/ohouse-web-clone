import ProductsView from '@/components/modules/products/ProductsView';

function Products() {
  const data = Array.from({ length: 20 }, (v, k) => ({ title: `title-${k}` }));
  return (
    <section className={`flex flex-col gap-5`}>
      <h1>이주의 인기 상품 목록</h1>
      <ProductsView data={data} />
    </section>
  );
}

export default Products;
