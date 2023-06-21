import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
const loginValidator = z.object({
  email: z
    .string()
    .min(1, { message: '이메일은 필수입니다.' })
    .email({ message: '이메일 형식이 아닙니다' }),
  password: z.string().min(1, { message: '패스워드는 필수입니다.' }),
});
export const loginResolver = zodResolver(loginValidator);
export type LoginValidator = z.infer<typeof loginValidator>;
