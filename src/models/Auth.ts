import { z } from 'zod';

export const UserSchema = z.object({
  email: z.string(),
  favorites: z.array(z.string()),
  name: z.string(),
  surname: z.string(),
});

export type User = z.infer<typeof UserSchema>;

export const LoginUserSchema = z.object({
  email: z
    .string()
    .min(5, 'Field must contain at least 5 chars.')
    .email('Enter a valid e-mail.'),
  password: z.string().min(6, 'Field must contain at least 6 chars'),
});

export type LoginUser = z.infer<typeof LoginUserSchema>;

export const RegisterUserSchema = z
  .object({
    name: z.string().min(3, 'Field must contain at least 3 chars'),
    surname: z.string().min(3, 'Field must contain at least 3 chars'),
    email: z
      .string()
      .email('Enter a valid e-mail.')
      .min(5, 'Field must contain at least 5 chars'),
    password: z.string().min(6, 'Field must contain at least 6 chars'),
    confirmPassword: z.string().min(6, 'Field must contain at least 6 chars'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: `Passwords don't match`,
    path: ['confirmPassword'],
  });

export type RegisterUserConfirm = z.infer<typeof RegisterUserSchema>;
export type RegisterUser = Omit<RegisterUserConfirm, 'confirmPassword'>;
