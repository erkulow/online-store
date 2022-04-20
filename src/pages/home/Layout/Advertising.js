import React from 'react'
import styled from 'styled-components'
import AdImg from '../../../assets/img/advertising.png'
import { TitleItem } from '../../../components/UI/TitleItem'
import { Text } from '../../../components/UI/Text'

export const Advertising = () => {
   return (
      <Wrapper>
         <FirstBlock>
            <TitleItem>Living Room Furniture</TitleItem>
            <Text>
               You don't have a chair. Are you ready for <br /> growth? Shop
               with us 40% discount!
            </Text>
            <PriceBlock>
               <h6>$150</h6>
               <p>$250</p>
               <button>BUY</button>
            </PriceBlock>
         </FirstBlock>
         <SecondBlock>
            <TitleItem>Living Room Furniture</TitleItem>
            <Text>
               Hot chairs of the modern era are now <br /> available in our
               stock.
            </Text>
            <PriceBlock>
               <h6>$75</h6>
               <p>$150</p>
               <button>BUY</button>
            </PriceBlock>
         </SecondBlock>
      </Wrapper>
   )
}
const Wrapper = styled.div`
   width: 1200px;
   margin: 0 auto;
   display: flex;
   justify-content: space-around;
   margin-top: 50px;
`
const FirstBlock = styled.div`
   width: 550px;
   height: 250px;
   background: url(${AdImg});
   padding: 30px 0 0 25px;
`
const SecondBlock = styled.div`
   width: 550px;
   height: 250px;
   background: url(${AdImg});
   padding: 30px 0 0 25px;
`
const PriceBlock = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 250px;
   button {
      width: 70px;
      padding: 5px 8px;
      border: none;
      border-radius: 4px;
      background: #7ac751;
      color: white;
      font-family: 'Mulish';
      font-style: normal;
      font-weight: 700;
      cursor: pointer;
      margin: 0;
      &:hover {
         opacity: 0.9;
      }
   }
   p {
      font-family: 'Mulish';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 120%;
      letter-spacing: 0.005em;
      color: #cccccc;
      text-decoration: line-through;
      margin: 0;
   }
   h6 {
      font-family: 'Mulish';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 120%;
      letter-spacing: 0.005em;
      color: #7ac751;
      margin: 0;
   }
`
