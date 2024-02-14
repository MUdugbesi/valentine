import { useState } from 'react'

import './App.css'
import { ThemeProvider } from '@emotion/react'
import { theme, Button, CardWrapper, ButtonWrapper, SpanText, Image, ImageWrapper } from './styles';
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
    newP.innerHTML = `
    <span style="color:red;font-size:16px;"> Happy Lovers day boo <br />
                       You are an amazing person and I love you for your wonderful, strong and loving spirit.<br/>
                        I’m glad we met and I’d do it over again. <br />
    Thanks for your listening hears, forgiving spirits, thanks for believing in us.<br />
    God Bless and Keep you.
    </span>
                
    <p></p>`

    const text3 = document.querySelector('#text3');
    text3.innerHTML = `<b style="color:blue; font-size: 46px; @media (max-width:400px){font-size: 12px}">Happy VALENTINE Babe</b>`



    const text = document.querySelector('#text');
    text.innerHTML = '<span style="color: purple; font-family: Roboto"; font-size: 6em; font-weight: 700>⥥</span>'

    const btnNo = document.querySelector('#round2');
    btnNo.style.display = 'none'
    const btnYes = document.querySelector('#round');
    btnYes.style.display = 'none'

    const imgCol = document.querySelector('#imgCol');
    imgCol.style.display = 'block';

    const text2 = document.querySelector('#text2');
    text2.innerHTML = `Because of you, I am who I am, <br/> You're everything I've ever <br/> wanted, hoped for, and dreamed of. <br/><br/> <b>'I love you to the moon and back'</b> <p></p>
    `

  }

  return (


    <ThemeProvider theme={theme}>
      <CardWrapper>
        <Image src={beMine} id='img' alt='image' />

        <ButtonWrapper>
          <Button onClick={handleYes} id='round'>YES</Button>
          <Button onClick={handleNo} id='round2'>NO</Button>
        </ButtonWrapper>

        <SpanText id='poem'></SpanText>
        <SpanText id='text'></SpanText>
        <SpanText id='text3' className='media'></SpanText>

        <ImageWrapper>
          <Images id='imgCol' />
        </ImageWrapper>

        <SpanText id='text2'></SpanText>

      </CardWrapper>
    </ThemeProvider >
  )

}

export default App;
