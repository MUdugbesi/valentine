import { useState } from 'react'

import './App.css'
import { ThemeProvider } from '@emotion/react'
import {theme, Button, CardWrapper, ButtonWrapper, TextWrapper, SpanText, Image } from './styles';
import beMine from './assets/beMine.gif';
import beMine2 from './assets/beMine2.gif';
import yesVal from './assets/yesVal.png';

import Images from './assets/images';

function App() {
  const [randNumber, setRandNumber] = useState(10);

  const handleNo = () => {
    setRandNumber(() => Math.floor(Math.random() * 40));

    const setStyle = () => {
      const hSides = ['right', 'left'];
      const randHSide = Math.floor(Math.random() * hSides.length);
      const round = document.querySelector('#round2');
      round.style.position = 'absolute';
      round.style[hSides[randHSide]] = randNumber + 'em';
      round.style.top = randNumber + 'em';
      round.style.overflow = 'hidden'
      round.style.display = 'flex'
      round.style.alignItems = 'center';
      round.style.justifyContent = 'center';
      round.style.width = '50px';
    }
    setStyle()

    const image = document.querySelector('#img');
    image.src = beMine;


  }


  const handleYes = () => {
    const image = document.querySelector('#img');
    image.src = yesVal;
    image.style.borderRadius = '8px'
    const poem = document.querySelector('#poem');
    const newP = document.createElement('quote')
    poem.append(newP);
    newP.innerHTML = `Because of you, I am who I am, <br/> You're everything I've ever <br/> wanted, hoped for, and dreamed of. <br/><br/> <b>'I love you to the moon and back'</b>`;

    const text = document.querySelector('#text');
    text.innerHTML = '<span style="color: purple; font-family: Roboto"; font-size: 6em; font-weight: 700>HAPPY VALENTINE</span>'


    const btnNo = document.querySelector('#round2');
    btnNo.style.display = 'none'
    const btnYes = document.querySelector('#round');
    btnYes.style.display = 'none'

    const imgCol = document.querySelector('#imgCol');
    imgCol.style.display = 'block';


  }

  return (


    <ThemeProvider theme={theme}>
      <CardWrapper>
        <Image src={beMine} id='img' />
        <ButtonWrapper>
          <Button onClick={handleYes} id='round'>YES</Button>
          <Button onClick={handleNo} id='round2'>NO</Button>
        </ButtonWrapper>

        <SpanText id='poem'></SpanText>
        <SpanText id='text'></SpanText>

        <Images id='imgCol' />

      </CardWrapper>
    </ThemeProvider >
  )

}

export default App;
