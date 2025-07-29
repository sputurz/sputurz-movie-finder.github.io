import { FormField } from '../FormField';
import { Icon } from '../Icon';
import {
  StyledRegistrationForm,
  StyledRegistrationFormBtn,
  StyledRegistrationFormTitle,
  StyledRegistrationFormWrap,
} from './RegistrationForm.styles';

export const RegistrationForm = () => {
  return (
    <StyledRegistrationForm>
      <StyledRegistrationFormTitle>Регистрация</StyledRegistrationFormTitle>
      <StyledRegistrationFormWrap>
        <FormField>
          <Icon name="MailIcon"></Icon>
          <input type="text" placeholder="Электронная почта"></input>
        </FormField>
        <FormField>
          <Icon name="UserIcon"></Icon>
          <input type="text" placeholder="Имя"></input>
        </FormField>
        <FormField>
          <Icon name="UserIcon"></Icon>
          <input type="text" placeholder="Фамилия"></input>
        </FormField>
        <FormField>
          <Icon name="PasswordIcon"></Icon>
          <input type="password" placeholder="Пароль"></input>
        </FormField>
        <FormField>
          <Icon name="PasswordIcon"></Icon>
          <input type="password" placeholder="Подтвердите пароль"></input>
        </FormField>
      </StyledRegistrationFormWrap>

      <StyledRegistrationFormBtn type="submit" disabled={false}>
        Создать аккаунт
      </StyledRegistrationFormBtn>
    </StyledRegistrationForm>
  );
};
