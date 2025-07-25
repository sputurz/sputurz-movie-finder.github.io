import { Container } from '../Container';
import { StyledErrorFallback } from './ErrorFallback.styles';

export const ErrorFallback = () => {
  return (
    <Container>
      <StyledErrorFallback>
        Что-то пошло не так. Пожалуйста, перезагрузите страницу.
      </StyledErrorFallback>
    </Container>
  );
};
