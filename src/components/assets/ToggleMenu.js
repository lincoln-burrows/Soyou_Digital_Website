import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";


const SIZES = {
  sm: css`
    --button-font-size: 31.2pt;
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
  default: css`
    --button-color: #ffffff;
    --button-bg-color: #C0C0C0;

  `,
  defaultActive: css`
    --button-color: #ffffff;
    --button-bg-color: #000000;

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
  font-size: var(--button-font-size,);
  padding: var(--button-padding,);
  border-radius: var(--button-radius,);
  color: var(--button-color, #ffffff);
  background: var(--button-bg-color, #0d6efd);
  width:500px;

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