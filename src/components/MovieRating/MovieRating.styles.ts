import styled from 'styled-components';

export const StyledMovieRating = styled.div`
  height: 32px;
  width: 70px;
  padding: 4px 12px;
  background-color: red;
  border-radius: 16px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.color};

  > svg {
    height: 16px;
    width: 16px;
  }
`;

export const StyledMovieRatingText = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
`;
