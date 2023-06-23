import dynamic from 'next/dynamic';
const ReactQuill = dynamic(import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { Control, useController } from 'react-hook-form';
import { useState } from 'react';
import { ProductVal } from '@/components/modules/products_form/types';
interface EditorProps {
  control: Control<ProductVal>;
}

function Editor({ control }: EditorProps) {
  const { field } = useController({ name: 'contents', control });
  useState();

  const onEditorStateChange = (value: string) => {
    field.onChange(value);
  };
  return (
    <ReactQuill
      theme="snow"
      value={field.value}
      onChange={onEditorStateChange}
    />
  );
}

export default Editor;
