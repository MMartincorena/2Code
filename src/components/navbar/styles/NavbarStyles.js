// styles/NavbarStyles.js
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const appBarStyles = css`
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5%;
  border-bottom: 2px solid #00c7ff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.35);
`;

export const iconButtonStyles = css`
  display: flex;
  padding: 0;
  margin: 0;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const menuIconStyles = css`
  padding: 0;
  margin: 0;
`;

export const navButtonsStyles = css`
  @media (max-width: 599px) {
    display: none;
  }
`;

export const navButtonStyles = css`
  margin-left: 20px;
`;

export const navButtonTextStyles = css`
  margin-right: 8px;
  font-size: 12px;
`;

export const logoStyles = css`
  width: auto;
  height: 60px; /* Ajusta el tamaño según sea necesario */
`;
