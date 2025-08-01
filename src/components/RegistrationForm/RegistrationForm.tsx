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
          <input
            type="text"
            placeholder="Электронная почта"
            autoComplete="email"
          ></input>
        </FormField>
        <FormField>
          <Icon name="UserIcon"></Icon>
          <input
            type="text"
            placeholder="Имя"
            autoComplete="given-name"
          ></input>
        </FormField>
        <FormField>
          <Icon name="UserIcon"></Icon>
          <input
            type="text"
            placeholder="Фамилия"
            autoComplete="family-name"
          ></input>
        </FormField>
        <FormField>
          <Icon name="PasswordIcon"></Icon>
          <input
            type="password"
            placeholder="Пароль"
            autoComplete="new-password"
          ></input>
        </FormField>
        <FormField>
          <Icon name="PasswordIcon"></Icon>
          <input
            type="password"
            placeholder="Подтвердите пароль"
            autoComplete="new-password"
          ></input>
        </FormField>
      </StyledRegistrationFormWrap>

      <StyledRegistrationFormBtn type="submit" disabled={false}>
        Создать аккаунт
      </StyledRegistrationFormBtn>
    </StyledRegistrationForm>
  );
};
