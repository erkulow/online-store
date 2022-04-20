import React from 'react'
import styled from 'styled-components'
import { TitleItem } from '../UI/TitleItem'
import { RatingStars } from '../UI/RatingStars'

export const ProductCard = ({ currentProduct }) => {
   return (
      <Wrapper key={currentProduct.id}>
         <CoverImg>
            <img src={currentProduct.image} alt="" />
         </CoverImg>
         <WrapperInfo>
            <TitleItem>{currentProduct.title}</TitleItem>
            <div>
               <h6>${currentProduct.price}</h6>
               <RatingStars />
            </div>
         </WrapperInfo>
      </Wrapper>
   )
}
const Wrapper = styled.div`
   width: 260px;
   height: 380px;
   margin: 10px 0 10px 0;
   h6 {
      font-family: 'Mulish';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 120%;
      letter-spacing: 0.005em;
      color: #7ac751;
   }
`
const CoverImg = styled.div`
   position: relative;
   overflow: hidden;
   width: 260px;
   height: 280px;
   outline-offset: -8px;
   img {
      width: 260px;
      height: 280px;
      position: absolute;
      inset: 0;
      object-fit: cover;
      transition: transform 1.75s;
   }
   &:hover img {
      transform: scale(1.15);
   }
`
const WrapperInfo = styled.div`
   display: flex;
   justify-content: space-around;
   flex-direction: column;
   padding: 5px 2px 0 2px;
   div {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
   button {
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px 8px;
      border: none;
      border-radius: 4px;
      background: #7ac751;
      color: white;
      font-family: 'Mulish';
      font-style: normal;
      font-weight: 700;
      cursor: pointer;
      &:hover {
         opacity: 0.9;
      }
   }
`
