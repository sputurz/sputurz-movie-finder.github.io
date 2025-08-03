import { Container } from '../Container';
import { Social } from '../Socials';
import * as S from './Footer.styles';

export const Footer = () => {
  return (
    <S.Wrap>
      <Container>
        <Social></Social>
      </Container>
    </S.Wrap>
  );
};
