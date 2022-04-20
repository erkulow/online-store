import React from 'react'
import img2 from '../../assets/carousel/img2.jpg'
import img3 from '../../assets/carousel/img3.jpg'
import styled from 'styled-components'
import Title from './Title'

export const BanerImg1 = () => {
   return (
      <SlideShowContainer>
         <SlideFade>
            <img src={img3} alt="" />
         </SlideFade>
      </SlideShowContainer>
   )
}
export const BanerImg2 = () => {
   return (
      <SlideShowContainer>
         <Title>STOCK</Title>
         <br />
         <SlideFade>
            <img src={img2} alt="" />
         </SlideFade>
      </SlideShowContainer>
   )
}

const SlideShowContainer = styled.div`
   width: 1200px;
   height: auto;
   margin: 0 auto;
   margin-top: 100px;
   text-align: center;
`
const SlideFade = styled.div`
   img {
      width: 1200px;
   }
`
