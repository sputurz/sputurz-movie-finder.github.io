import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const Img = styled.img<{ $isBusy: boolean }>`
  opacity: ${({ $isBusy }) => ($isBusy ? 0.1 : 1)};
`;
