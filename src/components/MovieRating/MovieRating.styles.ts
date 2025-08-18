import styled from 'styled-components';

export const Wrap = styled.div<{
  $color?: string;
  $isSearch?: boolean;
}>`
  padding: ${(props) => (props.$isSearch ? '2px 8px' : '4px 12px')};
  background-color: red;
  border-radius: 16px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.$color};
  color: ${(props) => props.theme.colorRating};

  > svg {
    height: 16px;
    width: 16px;
  }
`;

export const Text = styled.span<{
  $isSearch?: boolean;
}>`
  font-weight: 700;
  font-size: ${(props) => (props.$isSearch ? '12px' : '18px')};
  line-height: ${(props) => (props.$isSearch ? '16px' : '24px')};
`;
