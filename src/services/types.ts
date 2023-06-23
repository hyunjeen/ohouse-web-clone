import { z } from 'zod';

export interface CategoryType {
  uuid: string;
  name: string;
}

export interface SubcategoryType {
  uuid: string;
  name: string;
}

const productItem = z.object({
  uuid: z.string(),
  title: z.string(),
  price: z.number(),
  stock: z.number(),
  productImg: z.array(
    z.object({
      uuid: z.string(),
      url: z.string(),
      isThumbnail: z.boolean(),
    })
  ),
});
const productItems = z.array(productItem);
export type ProductItem = z.infer<typeof productItem>;
export type ProductItems = z.infer<typeof productItems>;
