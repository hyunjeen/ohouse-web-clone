import { useForm } from 'react-hook-form';
import Input from '@/components/common/Input';
import Editor from '@/components/common/Editor';
import Button from '@/components/common/Button';
import Label from '@/components/common/Label';
import { zodResolver } from '@hookform/resolvers/zod';
import ProductImageUpload from '@/components/modules/products_form/product_image_upload/ProductImageUpload';
import CategoryGroup from '@/components/modules/products_form/categories/CategoryGroup';
import { useCreateProductMutation } from '@/services/productApi';
import { useRouter } from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import { PulseLoader } from 'react-spinners';
import { Product, ProductVal } from '@/components/modules/products_form/types';

function ProductForm() {
  const {
    register,
    handleSubmit,
    control: formControl,
  } = useForm<ProductVal>({
    resolver: zodResolver(Product),
  });
  const router = useRouter();
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const onSubmit = async (data: ProductVal) => {
    console.log(data);
    const { images, ...rest } = data;
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }
    for (const key in rest) {
      const value: string = rest[key as keyof typeof rest];
      formData.append(key, value);
    }
    const result = await createProduct(formData);
    if (result) {
      toast.success('상품등록이 완료되었습니다', {
        position: 'top-center',
      });
      toast.onChange((toast1) => {
        console.log(toast1);
        router.push('/');
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={'flex'}>
        <ProductImageUpload control={formControl} />
        <div className={'ml-10 flex w-full flex-col justify-between'}>
          <div>
            <Label title={'가격'} htmlFor={'price'} />
            <Input
              {...register('price')}
              placeholder="가격"
              id={'price'}
              type={'number'}
              defaultValue={0}
              step={1000}
            />
          </div>
          <div>
            <Label htmlFor={'stock'} title={'재고'} />
            <Input
              {...register('stock')}
              placeholder="재고"
              type={'number'}
              defaultValue={0}
              min={1}
            />
          </div>
          <div className={'flex gap-10'}>
            <CategoryGroup control={formControl} />
          </div>
        </div>
      </div>
      <div className={'mb-10'}></div>
      <Input
        {...register('title')}
        placeholder="제목"
        className={'mb-3 rounded-none border-0 border-b border-b-gray-400'}
      />
      <Editor control={formControl} />
      <Button
        className={'w-full disabled:cursor-not-allowed disabled:bg-gray-400'}
        type={'submit'}
        disabled={isLoading}
      >
        {isLoading ? <PulseLoader color="#36d7b7" /> : '등록'}
      </Button>
      <ToastContainer autoClose={1000} />
    </form>
  );
}
export default ProductForm;
