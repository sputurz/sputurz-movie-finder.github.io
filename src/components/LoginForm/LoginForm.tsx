import { FormField } from '../FormField';
import { Icon } from '../Icon';
import {
  StyledLoginForm,
  StyledLoginFormBtn,
  StyledLoginFormWrap,
} from './LoginForm.styles';

export const LoginForm = () => {
  return (
    <StyledLoginForm>
      <StyledLoginFormWrap>
        <FormField>
          <Icon name="MailIcon"></Icon>
          <input type="text" placeholder="Электронная почта"></input>
        </FormField>
        <FormField>
          <Icon name="PasswordIcon"></Icon>
          <input type="password" placeholder="Пароль"></input>
        </FormField>
      </StyledLoginFormWrap>

      <StyledLoginFormBtn type="submit" disabled={false}>
        Войти
      </StyledLoginFormBtn>
    </StyledLoginForm>
  );
};
