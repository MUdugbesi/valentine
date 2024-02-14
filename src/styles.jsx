// /** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const theme = {
  colors: {
    p: 'purple',
  }
};

export const Spin = keyframes`
    0%{
        width: 40%
    },
    50%{
      width: 45%
    }
    80%{
        width: 50%
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
display: flex;
  border-radius: 10px;
  border: 1px solid transparent;
  padding: 1em 2em;
  font-size: 1.025em;
  font-weight: 700;
  font-family: inherit;
  background-color: #7209b7;
  cursor: pointer;
  transition: all 500ms 200ms;
  :hover {
    border-color: #646cff;
    cursor: pointer;
    filter: drop-shadow(0 0 2em #7209b7);
    
  }

  @media (max-width:950px){
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 0.75em;
    justify-content: center;
    align-items: center;
   }
  @media (max-width:620px){
    width: 15px;
    height: 30px;
    font-size: 0.5em
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

  @media (max-width:950px){
    width: 100%;
    height: 50%
  }
  @media (max-width:620px){
    width: 90%;
    height: 400px;
    padding: 1em 2em;
  }
  @media (max-width:400px){
    width: 50%;
    height:300px;
    padding: 1em 2em;
  }
`;

export const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center
width: auto;
height: auto;
padding: 1em 2em;
gap: 70px;

@media (max-width:950px){
 width: 40%;
 height: 40px;
 gap: 30px
}
`;

export const ImageWrapper = styled.div`
display: flex;
width: 100%;
height: auto;
padding: 1em 2em;
justify-content: center;
align-items: center;

`;


export const SpanText = styled.p`
color: purple;
text-align: center;
font-family: 'Amita', serif;

`;

export const Image = styled.img`
max-width: 80%;
margin-top: 20%;
margin-bottom: 20%;
animation: ${Spin} infinite 15s linear 10s;


 @media (max-width:950px){
    width: 50%;
  }

  @media (max-width:620px){
    width: 40%;
  }
  @media (max-width:400px){
    width: 80%;
    
  }
`;
