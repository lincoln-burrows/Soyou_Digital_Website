import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";


const SIZES = {
  sm: css`
    --button-font-size: 2.3rem;
    --button-padding: 4px 12px;
    --button-radius: 20px;
    
  `,
  md: css`
    --button-font-size: 1rem;
    --button-padding: 4px 12px;
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
    --button-bg-color: #000000;
    --button-hover-bg-color: #c0c0c0;
  
  `,
  error: css`
    --button-color: #ffffff;
    --button-bg-color: #dc3545;
    --button-hover-bg-color: #c82333;
  `,
  warning: css`
    --button-color: #212529;
    --button-bg-color: #ffc107;
    --button-hover-bg-color: #e0a800;
  `
};

const ToggleMenu = (props) =>{
  const dispatch = useDispatch();
  const sizeStyle = SIZES[props.size];
  const variantStyle = VARIANTS[props.variant];

  return (
    <StyledButton
      // disabled="active"
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
      onClick={()=>{props.modalNavStep2(props.targetPage); dispatch({type:"SET_MODAL_OFF"});}}
    >
      {props.children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}

  margin: 7px 15px 7px 15px;
  text-align: right;
  font-weight: bold;
  float: right;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  color: var(--button-color, #ffffff);
  background: var(--button-bg-color, #0d6efd);
  width:400px;

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #000000);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #000000);
  }
`;

export default ToggleMenu;