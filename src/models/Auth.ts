import { z } from 'zod';

export const UserSchema = z.object({
  email: z.string(),
  favorites: z.array(z.string()),
  name: z.string(),
  surname: z.string(),
});

export type User = z.infer<typeof UserSchema>;

export const LoginUserSchema = z.object({
  email: z.string().min(5, 'Email должен содержать не менее 5-ти символов'),
  password: z.string().min(6, 'Пароль должен содержать не менее 6-ми символов'),
});

export type LoginUser = z.infer<typeof LoginUserSchema>;

export const RegisterUserSchema = z.object({
  name: z.string().min(5, 'Имя должно содержать не менее трех символов'),
  surname: z.string().min(5, 'Фамилия должна содержать не трех символов'),
  email: z
    .string()
    .email('Введите корректный email')
    .min(5, 'Email должен содержать не менее 5-ти символов'),
  password: z.string().min(6, 'Пароль должен содержать не менее 6-ми символов'),
});

export type RegisterUser = z.infer<typeof RegisterUserSchema>;
