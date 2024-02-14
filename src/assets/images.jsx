import React from 'react';
import { useState } from 'react';
import image1 from './IMG_0170.jpeg';
import image2 from './IMG_0171.jpeg';
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
import n01 from './Img/n01.jpg'
import n02 from './Img/n02.jpg'
import n03 from './Img/n03.jpg'
import n04 from './Img/n04.jpg'
import n05 from './Img/n05.jpg'
import n06 from './Img/n06.jpg'
import n07 from './Img/n07.jpg'
import n08 from './Img/n08.jpg'
import n09 from './Img/n09.jpg'
import n001 from './Img/n001.jpg'
import n002 from './Img/n002.jpg'
import n003 from './Img/n003.jpg'
import n004 from './Img/n004.jpg'
import n005 from './Img/n005.jpg'
import n006 from './Img/n006.jpg'
import n007 from './Img/n007.jpg'
import n008 from './Img/n008.jpg'
import n009 from './Img/n009.jpg'
import n0001 from './Img/n0001.jpg'
import n0002 from './Img/n0002.jpg'
import n0003 from './Img/n0003.jpg'
import n0004 from './Img/n0004.jpg'
import n0005 from './Img/n0005.jpg'

const Images = ({ id }) => {

    const [index, setIndex] = useState(0)

    const images = [image1, n01, image2, n02, image3, n03, image4, n04, image5, n05, image6, n06, image7, n07,
        image8, n08, image9, n09, image01, n001, image02, n002, image03, n003, image04, n004, image001, n005,
        image002, n006, image05, n007, image06, n008, image07, n009, image08, n0001, image09, n0002, n0003, n0004, n0005
    ];
    const randNumber = Math.floor(Math.random() * images.length);

    function loop() {
        const image = document.querySelector('.image');

        if (index === images.length - 1) {
            setIndex(0)
        } else {
            setIndex(() => index + 1)
        }

        image.src = images[randNumber]

        return image
    }

    setInterval(() => {
        loop()
    }, 3500)

    return (
        <>
            <img src={n04} id={id} className='image' style={{
                width: '200px', borderRadius: '20px', display: 'none'
            }} />
        </>

    )
}

export default Images
