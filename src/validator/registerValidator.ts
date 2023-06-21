import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
const registerValidator = z
  .object({
    name: z.string().min(1, { message: '이름은 필수입니다.' }),
    email: z
      .string()
      .min(1, { message: '이메일은 필수입니다.' })
      .email({ message: '이메일 형식이 아닙니다' }),
    password: z.string().min(1, { message: '패스워드는 필수입니다.' }),
    password1: z.string().min(1, { message: '패스워드는 필수입니다.' }),
  })
  .refine((data) => data.password === data.password1, {
    path: ['password1'],
    message: '패스워드가 일치하지않습니다',
  });
export const registerResolver = zodResolver(registerValidator);
export type RegisterValidator = z.infer<typeof registerValidator>;
