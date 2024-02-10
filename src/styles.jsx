// /** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const theme = {
  colors: {
    p: 'red',
  }
};

export const Spin = keyframes`
    from{
        transform: rotate(0deg)
    }
    to{
        transform: rotate(360deg)
    }
`;

export const Text = styled.p`
    font-size: 32px;
    color: ${(props) => props.theme.colors.p};
    padding: 10px 30px;
    border: 2px solid #fff;
    border-radius: 5px;
    animation: Spin 10s linear infinite;
    
`;

// export const Round = styled.div`
// width:100px;
// height: 100px;
// border: none;
// border-radius: 50%;
// background-color:${(props) => props.theme.colors.p};
// will-change: filter;
// transition: filter 300ms;
// display: flex;
// align-items: center;
//   justify-content: center;
// padding: 10px;
// :hover{
//     animation: ${Spin} infinite 10s linear;
//     filter: drop-shadow(0 0 2em red);
//     cursor: pointer;
// }
// `;

export const Button = styled.button`
  border-radius: 10px;
  border: 1px solid transparent;
  padding: 1em 2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #7209b7;
  cursor: pointer;
  transition: all 500ms 200ms;
  :hover {
    border-color: #646cff;
    cursor: pointer;
    filter: drop-shadow(0 0 2em #7209b7);
    
  }
`;

export const CardWrapper = styled.div`
  border: 6px solid red;
  border-radius: 12px;
  width: auto;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;

  overflow: scroll;
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
display: flex;
width: auto;
height: auto;
padding: 1em 2em;
gap: 70px;
`;

export const TextWrapper = styled.div`
display: flex;
width: auto;
height: auto;
padding: 1em 2em;
justify-content: center;
align-items = center;

`;


export const SpanText = styled.p`
color: red;
text-align: center;
font-family: 'Amita', serif;

`;

export const Image = styled.img`
max-width: 100%;
margin-top: 20%;
margin-bottom: 10%;
animation: ${Spin} infinite 15s linear 10s;

`;
