import React from "react";

import { noop } from "lodash";
import PropTypes from "prop-types";
import styled from "styled-components";

import themes from "../../../styles/theme";

const { colors } = themes;

const Button = ({ startIcon, endIcon, text, onClick, ...props }) => {
  return (
    <Container {...props} onClick={onClick}>
      {startIcon && startIcon}
      {text}
      {endIcon && endIcon}
    </Container>
  );
};

Button.propTypes = {
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  text: PropTypes.string,
  hasHover: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  margin: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
};

Button.defaultProps = {
  startIcon: null,
  endIcon: null,
  text: "",
  hasHover: true,
  onClick: noop,
  size: "sm",
  margin: "sm",
  color: colors.blue_1,
  textColor: colors.white_1,
};

const Container = styled.button`
  padding: ${({ theme }) => theme.space.sm};
  border-radius: 0.4rem;
  background: ${(props) => props.color};
  border: none;
  color: ${(props) => props.textColor};
  cursor: pointer;

  ${({ margin }) =>
    margin &&
    `
    margin: ${({ theme }) => theme.space[margin]};
  `}

  ${({ size }) => {
    switch (size) {
      case "sm":
        return `
          width: 9rem;
          height: 3rem;
          font-size: ${({ theme }) => theme.fontSizes.sm};
        `;
      case "md":
        return `
          width: 10rem;
          height: 3.5rem;
          font-size: ${({ theme }) => theme.fontSizes.md};
        `;
      case "lg":
        return `
          width: 15rem;
          height: 4rem;
          font-size: ${({ theme }) => theme.fontSizes.lg};
        `;
      case "long":
        return `
          width: 15rem;
          height: 3.5rem;
          font-size: ${({ theme }) => theme.fontSizes.md};
        `;
      default:
        return `
          width: 8rem;
          height: 3rem;
          font-size: ${({ theme }) => theme.fontSizes.sm};
        `;
    }
  }}

  ${({ theme, color, hasHover }) =>
    hasHover &&
    `
      &:hover {
        transform: scale(1.1);
        border: 0.1rem solid ${color};
        background-color: ${theme.colors.white_1};
        color: ${color};
      }
      &:active {
        border: 0.1rem solid ${color};
        background-color: ${theme.colors.white_1};
        color: ${color};
      }
  `}
`;

export default Button;
