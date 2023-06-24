import React, { useCallback, useEffect, useState } from 'react';
import ProductImageUploadView from '@/components/modules/products_form/product_image_upload/ProductImageUploadView';
import { Control, useController, useWatch } from 'react-hook-form';
import { ProductVal } from '@/components/modules/products_form/types';

function ProductImageUpload({ control }: { control: Control<ProductVal> }) {
  const [images, setImages] = useState<File[]>([]);
  const { field } = useController({
    name: 'images',
    control,
  });
  const imagesList = useWatch({ control, name: 'images' });
  useEffect(() => {
    return () => {
      setImages([]);
    };
  }, []);

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;
      const existingFilesArray = field?.value
        ? Array.from(field.value as FileList)
        : [];
      const newFilesArray = Array.from(e.target.files);
      const existingFileNames = existingFilesArray.map((file) => file.name);
      const uniqueNewFilesArray = newFilesArray.filter(
        (file) => !existingFileNames.includes(file.name)
      );
      if (existingFilesArray.length + uniqueNewFilesArray.length > 3) {
        alert('죄송합니다 이미지는 최대 3개 까지 업로드 가능합니다');
        return;
      }
      const combinedFilesArray = [
        ...existingFilesArray,
        ...uniqueNewFilesArray,
      ];
      const dataTransfer = new DataTransfer();
      if (!combinedFilesArray) {
        return;
      }
      combinedFilesArray?.forEach((file: File) => dataTransfer.items.add(file));
      const newFileList = dataTransfer.files;
      field.onChange(newFileList);
      setImages(combinedFilesArray);
      if (e.target) e.target.value = '';
    },
    [field]
  );

  const removeFile = useCallback(
    (index: number) => {
      const newImagesArray = images.filter((_, idx) => idx !== index);
      setImages(newImagesArray);
      const dataTransfer = new DataTransfer();
      newImagesArray.forEach((file: File) => dataTransfer.items.add(file));
      const newFileList = dataTransfer.files;
      field.onChange(newFileList);
    },
    [images, field]
  );

  return (
    <ProductImageUploadView
      imagesLength={imagesList?.length ? imagesList.length : 0}
      onChange={onChangeHandler}
      images={images}
      removeFile={removeFile}
    />
  );
}

export default ProductImageUpload;
