import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  transition: all 300ms;
  background-color: transparent;
  &:hover {
    opacity: 70%;
  }
`;

const Button = ({ children, icon, className, onClick }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      <img src={icon} alt="icon" />
    </StyledButton>
  );
};

export default Button;
