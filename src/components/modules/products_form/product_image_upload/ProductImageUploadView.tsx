import React, { useRef } from 'react';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

function ProductImageUploadView({
  imagesLength,
  onChange,
  images,
  removeFile,
}: {
  images: File[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: (index: number) => void;
  imagesLength: number;
}) {
  const imageRef = useRef<HTMLInputElement | null>(null);
  const onClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    imageRef?.current?.click();
  };
  const onButtonClickHandler = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    removeFile(index);
  };

  return (
    <div className={'m-auto w-full border py-20 text-center'}>
      <div className={'mb-2 font-bold'}>여러장의 사진을 업로드해보세요</div>
      <div className={'flex justify-center text-sm text-gray-400'}>
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index}>
              <p>{image.name}</p>
              <button
                className={
                  'mt-2 rounded-full bg-gray-400 px-1 text-sm text-white'
                }
                onClick={(e) => onButtonClickHandler(e, index)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>이미지를 업로드해주세요</p>
        )}
      </div>
      <Button
        className={` inline-block w-[150px] py-2 disabled:cursor-not-allowed disabled:bg-gray-400`}
        onClick={onClickHandler}
        disabled={imagesLength == 3}
      >
        사진 업로드
      </Button>
      <Input
        ref={imageRef}
        type={'file'}
        hidden
        multiple
        onChange={onChange}
        accept={'image/jpeg, image/jpg, image/png'}
      />
    </div>
  );
}

export default ProductImageUploadView;
