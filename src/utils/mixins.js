import { css } from "styled-components";

export const circle = (color, size = "8px") => css`
  width: ${size};
  height: ${size};
  border-radius: 50%;
  background-color: ${color};
`;
// activeBar参数使用了结构赋值
export const activeBar = ({ barWidth = "8px", shadowWidth = "20px" } = {}) =>
  css`
    position: relative;
    &::before,
    &::after {
      display: block;
      content: "";
      position: absolute;
      height: 100%;
      left: 0;
      transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    &::before {
      width: ${barWidth};
      background: linear-gradient(
        180deg,
        rgba(142, 197, 242, 1) 0%,
        rgba(79, 157, 222, 1) 100%
      );
    }

    &::after {
      width: ${shadowWidth};
      background: linear-gradient(
        270deg,
        rgba(41, 47, 76, 1) 0%,
        rgba(142, 197, 242, 1) 100%
      );
      opacity: 0.6;
    }
  `;