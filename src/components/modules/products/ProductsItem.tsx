import Image from 'next/image';
import { ProductItem } from '@/services/types';

function ProductsItem({ title, productImg }: ProductItem) {
  console.log(productImg);
  return (
    <li className={`overflow-hidden rounded`}>
      <div
        className={`before:content-["] relative before:block before:pt-[66%]`}
      >
        <Image
          className={'absolute left-0 top-0 aspect-[2/1] object-cover'}
          src={productImg[0].url}
          alt={'product-image'}
          fill
        />
      </div>
      <div>{title}</div>
    </li>
  );
}

export default ProductsItem;
