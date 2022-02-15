import { css } from "styled-components";

export const tablet = (props) => {
  return css`
    @media screen and (max-width: 760px) {
      ${props}
    }
  `;
};
export const laptop = (props) => {
  return css`
    @media screen and (max-width: 1011px) {
      ${props}
    }
  `;
};
