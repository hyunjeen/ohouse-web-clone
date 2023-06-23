import { z } from 'zod';
import { SingleValue } from 'react-select';

export const selectItemsSchema = z.array(
  z.object({
    uuid: z.string(),
    name: z.string(),
  })
);
export type SelectItemsTypes = z.infer<typeof selectItemsSchema>;

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectPropsType {
  id: string;
  title: string;
  value: string | null;
  data: SelectOption[];
  handleChange: (val: SingleValue<SelectOption | null>) => void;
}
