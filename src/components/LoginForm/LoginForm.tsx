import { StyledLoginForm, StyledLoginFormBtn } from './LoginForm.styles';

export const LoginForm = () => {
  return (
    <StyledLoginForm>
      {/* <FormField label="Email" errorMessage={errors.email?.message}>
          <input type="text" />
        </FormField>
        <FormField label="РџР°СЂРѕР»СЊ" errorMessage={errors.password?.message}>
          <input type="password" />
        </FormField> */}

      <StyledLoginFormBtn type="submit" disabled={false}>
        Войти
      </StyledLoginFormBtn>
    </StyledLoginForm>
  );
};
