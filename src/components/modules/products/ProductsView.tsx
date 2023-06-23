import ProductsItem from '@/components/modules/products/ProductsItem';
import { ProductItems } from '@/services/types';
interface ProductsProps {
  data: ProductItems;
}
function ProductsView({ data }: ProductsProps) {
  return (
    <ul className={`grid grid-cols-1 gap-10 sm:grid-cols-2  md:grid-cols-4 `}>
      {data.map(({ productImg, title, stock, uuid, price }) => (
        <ProductsItem
          title={title}
          key={uuid}
          productImg={productImg}
          uuid={uuid}
          price={price}
          stock={stock}
        />
      ))}
    </ul>
  );
}
export default ProductsView;
