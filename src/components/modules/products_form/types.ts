import { z } from 'zod';

export const Product = z.object({
  price: z.string().min(1),
  stock: z.string().min(1),
  images: z.custom<FileList>((v) => v instanceof FileList),
  category: z.string(),
  subcategory: z.string(),
  title: z.string(),
  contents: z.string(),
});
export type ProductVal = z.infer<typeof Product>;
