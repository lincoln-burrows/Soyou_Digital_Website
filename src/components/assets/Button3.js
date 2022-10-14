import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { momentumAction } from "../../redux/actions/momentumAction";
import { stableAction } from "../../redux/actions/stableAction";

const SIZES = {
  left: css`
    --button-font-size: 18.2pt;
    --button-padding: 6px 0px 6px 0px;
    --button-radius: 25px;
    margin: 0px 1.8% 3.5% 0px;

    @media all and (max-width:767px), (max-height:450px) and (max-width:1023px){
      --button-font-size: 19px;
      --button-padding: 3px 0px 3px 0px;
    }
  `,
  middle: css`
    --button-font-size: 18.2pt;
    --button-padding: 6px 0px 6px 0px;
    --button-radius: 25px;
    margin: 0px 1.8% 0px 1.8%;

    @media all and (max-width:767px), (max-height:450px) and (max-width:1023px){
      --button-font-size: 19px;
      --button-padding: 3px 0px 3px 0px;
    }
  `,
  right: css`
    --button-font-size: 18.2pt;
    --button-padding: 6px 0px 6px 0px;
    --button-radius: 25px;
    margin: 0px 0px 0px 1.8%;

    @media all and (max-width:767px), (max-height:450px) and (max-width:1023px){
      --button-font-size: 19px;
      --button-padding: 3px 0px 3px 0px;
    }
  `
};

const VARIANTS = {
  success: css`
    --button-color: #ffffff;
    --button-bg-color: #C0C0C0;
    --button-hover-bg-color: #000000;
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

function Button3({ disabled, size, variant, children, actionName }) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];
  const dispatch = useDispatch();


  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
      onClick={()=>{
        dispatch({type:actionName});
        {actionName.includes("MOMENTUM") ? 
        dispatch(momentumAction.getMomentumGraph(actionName))
        : dispatch(stableAction.getStableGraph(actionName))}
    }}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}

  
  border: none;
  cursor: pointer;
  font-family: "noto-sans-kr-medium";
  font-size: var(--button-font-size,);
  padding: var(--button-padding, );
  border-radius: var(--button-radius,);
  color: var(--button-color, #ffffff);
  background: var(--button-bg-color, #0d6efd);
  width:22.3%

`;

export default Button3;