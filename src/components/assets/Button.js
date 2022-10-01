import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const SIZES = {
  sm: css`
    --button-font-size: 1.2rem;
    --button-padding: 4px 12px;
    --button-radius: 20px;
  `,
  md: css`
    --button-font-size: 1rem;
    --button-padding: 12px 16px;
    --button-radius: 8px;
  `,
  lg: css`
    --button-font-size: 1.25rem;
    --button-padding: 16px 20px;
    --button-radius: 12px;
  `
};

const VARIANTS = {
  success: css`
    --button-color: #ffffff;
    --button-bg-color: #C0C0C0;
  `,
  default: css`
    --button-color: #ffffff;
    --button-bg-color: #C0C0C0;

  `,
  defaultActive: css`
    --button-color: #ffffff;
    --button-bg-color: #000000;

  `
};

const Button = (props) => {
  const sizeStyle = SIZES[props.size];
  const variantStyle = VARIANTS[props.variant];
  const dispatch = useDispatch();
  const disabled = props.disabled;
  const actionName = props.actionName;
  

  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
      onClick={()=>{dispatch({type:actionName}); }}
    >
      {props.children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}

  margin: 7px 14px 7px 14px;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  color: var(--button-color, #ffffff);
  background: var(--button-bg-color, #0d6efd);
  width:400px;

  
`;

export default Button;