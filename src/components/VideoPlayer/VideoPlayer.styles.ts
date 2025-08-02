import styled, { css } from 'styled-components';
import { vp767 } from '../../styles/utils/mixins';

export const StyleContainer = styled.div`
  ${vp767(css``)}
`;

export const VideoWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);

  iframe {
    border: 1px solid red;
    width: 640px;
    height: 360px;
    /* width: 100%; */
    /* height: 100%; */
  }
`;
