import ProductsItem from '@/components/modules/products/ProductsItem';
interface ProductsProps {
  data: { title: string }[];
}
function ProductsView({ data }: ProductsProps) {
  return (
    <ul className={`grid grid-cols-1 gap-10 sm:grid-cols-2  md:grid-cols-4 `}>
      {data.map((value, index) => (
        <ProductsItem title={value.title} key={index} />
      ))}
    </ul>
  );
}
export default ProductsView;
