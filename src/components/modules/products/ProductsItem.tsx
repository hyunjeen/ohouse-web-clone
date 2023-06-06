import Image from 'next/image';

function ProductsItem({ title }: { title: string }) {
  return (
    <li className={` overflow-hidden rounded `}>
      <div className={`relative pt-[66%]`}>
        <Image
          src={'/product.jpeg'}
          alt={'product-image'}
          fill
          sizes="(max-width:640px) 640px,300px"
          className={`object-cover`}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcWQ8AAbcBGqb119EAAAAASUVORK5CYII="
        />
      </div>
      <div>{title}</div>
    </li>
  );
}

export default ProductsItem;
