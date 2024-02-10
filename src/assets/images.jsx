import React from 'react';
import { useState } from 'react';
import image1 from './IMG_0019 2.jpeg';
import image2 from './IMG_0019 3.jpeg';
import image3 from './IMG_0019.jpeg';
import image4 from './IMG_2381.jpeg';
import image5 from './IMG_4916.jpeg';
import image6 from './IMG_2559.jpeg';
import image7 from './IMG_2603.jpeg';
import image8 from './IMG_4915.jpeg';
import image9 from './IMG_5058.jpeg';
import image01 from './IMG_5059.jpeg';
import image02 from './IMG_9419.jpeg';
import image03 from './IMG_9469.jpeg';
import image04 from './IMG_9660.jpeg';
import image05 from './IMG_0614.jpeg';
import image06 from './IMG_0851.jpeg';
import image07 from './IMG_1275.jpeg';
import image08 from './IMG_1473.jpeg';
import image09 from './IMG_1701.jpeg';
import image001 from './IMG_4770.jpeg';
import image002 from './IMG_4781.jpeg';
import { Button } from '../styles';

const Images = ({ id }) => {

    const [index, setIndex] = useState(0)

    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image01, image02, image03, image04, image001, image002, image05, image06, image07, image08, image09];
    function loop() {
        const image = document.querySelector('.image');

        if (index === images.length - 1) {
            setIndex(0)
        } else {
            setIndex(() => index + 1)
        }

        image.src = images[index]
    }

    setInterval(() => {
        loop()
    }, 3500)

    return (
        <>
            <img src='' id={id} className='image' style={{
                width: '200px', borderRadius: '20px', display: 'none'
            }} />
        </>

    )
}

export default Images
