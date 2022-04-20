import React from 'react'
import styled from 'styled-components'
import bus from '../../../assets/img/bus.png'
import gif from '../../../assets/img/gif.png'
import wallet from '../../../assets/img/wallet.png'
import support from '../../../assets/img/support.png'
export const StockBlock = () => {
   return (
      <Wrapper>
         <StockCards>
            <img src={bus} alt="" />
            <div>
               <p>
                  <b>Free Shipping</b>
               </p>
               <p>Orders over $100</p>
            </div>
         </StockCards>
         <StockCards>
            <img src={gif} alt="" />
            <div>
               <p>
                  <b>Smart Gift Card</b>
               </p>
               <p>Buy $1000 to get card</p>
            </div>
         </StockCards>
         <StockCards>
            <img src={wallet} alt="" />
            <div>
               <p>
                  <b>Quick Payment</b>
               </p>
               <p>100% secure payment</p>
            </div>
         </StockCards>
         <StockCards>
            <img src={support} alt="" />
            <div>
               <p>
                  <b>24/7 Support</b>
               </p>
               <p>Quick support</p>
            </div>
         </StockCards>
      </Wrapper>
   )
}
const Wrapper = styled.div`
   width: 1200px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   margin-top: 100px;
`
const StockCards = styled.div`
   display: flex;
   align-items: center;
   div {
      margin-left: 5px;
      display: flex;
      flex-direction: column;
      p {
         font-family: 'Rubik';
         font-style: normal;
         font-weight: 400;
         font-size: 14px;
         line-height: 26px;
         color: rgba(81, 81, 81, 0.71);
         margin: 0;
      }
   }
   img {
      width: 55px;
   }
`
