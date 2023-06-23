import React, { useEffect, useState } from 'react';
import ProductImageUploadView from '@/components/modules/products_form/product_image_upload/ProductImageUploadView';
import { Control, useController } from 'react-hook-form';
import { ProductVal } from '@/components/modules/products_form/types';

function ProductImageUpload({ control }: { control: Control<ProductVal> }) {
  const [images, setImages] = useState<File[]>([]);
  const { field } = useController({
    name: 'images',
    control,
  });
  useEffect(() => {
    return () => {
      setImages([]);
    };
  }, []);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const existingFilesArray = field.value
      ? Array.from(field.value as FileList)
      : [];
    const newFilesArray = Array.from(e.target.files);
    const existingFileNames = existingFilesArray.map((file) => file.name);
    const uniqueNewFilesArray = newFilesArray.filter(
      (file) => !existingFileNames.includes(file.name)
    );
    const combinedFilesArray = [...existingFilesArray, ...uniqueNewFilesArray];
    const dataTransfer = new DataTransfer();
    combinedFilesArray.forEach((file: File) => dataTransfer.items.add(file));
    const newFileList = dataTransfer.files;
    field.onChange(newFileList);
    setImages(combinedFilesArray);
    if (e.target) e.target.value = '';
  };

  const removeFile = (index: number) => {
    const newImagesArray = images.filter((_, idx) => idx !== index);
    setImages(newImagesArray);
    const dataTransfer = new DataTransfer();
    newImagesArray.forEach((file: File) => dataTransfer.items.add(file));
    const newFileList = dataTransfer.files;
    field.onChange(newFileList);
  };

  return (
    <ProductImageUploadView
      onChange={onChangeHandler}
      images={images}
      removeFile={removeFile}
    />
  );
}

export default ProductImageUpload;
