import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';
import { BtnPrimaryStyles } from '../../styles/global/BtnPrimary';

export const StyledSettingTab = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${vp767(
    css`
      gap: 64px;
    `
  )}
`;

export const StyledSettingTabBtnLogout = styled.button`
  ${BtnPrimaryStyles}

  ${vp767(
    css`
      width: 262px;
    `
  )}
`;
