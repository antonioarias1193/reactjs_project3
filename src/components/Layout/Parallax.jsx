import React from 'react'
import { useParallax, Parallax, ParallaxProvider } from 'react-scroll-parallax'

const Parallaxing = () => {
  return (
    <ParallaxProvider>
     <Parallax translateX={['-100px', '200px']}>
    <div className="my-thing" />
  </Parallax>
    </ParallaxProvider>
  )
}

export default Parallax