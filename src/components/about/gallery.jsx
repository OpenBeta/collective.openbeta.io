import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export default function Gallery() {
    return (
    <div className='about-gallery'>
      <StaticImage
        className='rounded-lg'
        layout='constrained'
        height={320}
        quality={80}
        placeholder="blurred"
        src="../../assets/images/working.jpg" alt="Working" />
      <StaticImage
        layout='constrained'
        height={320}
        quality={80}
        placeholder="blurred"
        src="../../assets/images/climbing-grande-grotta.jpg" alt="Climbing" />
      <StaticImage
        layout='constrained'
        height={320}
        quality={80}
        placeholder="blurred"
        src="../../assets/images/working-from-kalymnos.jpg" alt="Kalymnos office" />
      <StaticImage
        layout='constrained'
        height={320}
        quality={80}
        placeholder="blurred"
        src="../../assets/images/tshirt.jpg" alt="T-shirt and sticker" />
      <StaticImage
        layout='constrained'
        height={320}
        quality={80}
        placeholder="blurred"
        src="../../assets/images/tshirt2.jpg" alt="OpenBeta T-shirt" />
      <StaticImage
        layout='constrained'
        height={350}
        quality={80}
        placeholder="blurred"
        src="../../assets/images/meeting.jpg" alt="Video meeting" />
      <StaticImage
        layout='constrained'
        height={320}
        quality={80}
        placeholder="blurred"
        src="../../assets/images/deurali.jpg" alt="Deurali, our 4-legged volunteer" />
      <StaticImage
        layout='constrained'
        height={320}
        quality={80}
        placeholder="blurred"
        src="../../assets/images/shelby.jpg" alt="Shelby, our 4-legged volunteer" />
    </div>)
}