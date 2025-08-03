import styled, { css } from 'styled-components';
import { vp1023, vp767 } from '../../styles/utils/mixins';
import { Link } from 'react-router-dom';
import {
  transitionOpacity,
  transitionTransform,
} from '../../styles/utils/variables';
import React, { forwardRef } from 'react';

const LinkWithRef = forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof Link>
>((props, ref) => React.createElement(Link, { ...props, ref }));

export const LinkItem = styled(LinkWithRef)`
  ${transitionOpacity}
  ${transitionTransform}

  display: flex;
  align-items: center;

  padding: 7px 0;

  img {
    height: 18px;
  }

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  ${vp767(css`
    padding: 13px 0;

    img {
      height: 24px;
    }
  `)}

  ${vp1023(css`
    padding: 8px 0;

    img {
      height: 32px;
    }
  `)}
`;

export const Img = styled.img`
  height: 100%;
`;
