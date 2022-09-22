import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export default function Gallery() {
    return (
    <div className='flex justify-center flex-wrap'>
      <StaticImage
        layout='constrained'
        height={350}
        quality={80}
        placeholder="blurred"
        src="../../assets/images/working.jpg" alt="Working" />
      <StaticImage
        layout='constrained'
        height={350}
        quality={80}
        placeholder="blurred"
        src="../../assets/images/climbing-grande-grotta.jpg" alt="Climbing" />
      <StaticImage
        layout='constrained'
        height={350}
        quality={80}
        placeholder="blurred"
        src="../../assets/images/working-from-kalymnos.jpg" alt="Kalymnos office" />
    </div>)
}