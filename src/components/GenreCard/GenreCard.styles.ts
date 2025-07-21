import styled from 'styled-components';

export const StyledCard = styled.a`
  height: 100%;
  background: #0a0b0b;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0px 0px 80px 0px rgba(255, 255, 255, 0.33);
`;

export const StyledCardImg = styled.img`
  height: calc(220 / 304 * 100%);
  border-radius: 24px 24px 0 0;
`;

export const StyledCardName = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  text-align: center;
  margin: 22px 0 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
