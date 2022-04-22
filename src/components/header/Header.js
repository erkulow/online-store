import React from 'react'
import styled from 'styled-components'
import { AiOutlineBell } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
   const novigate = useNavigate()
   const { basket } = useSelector((state) => state.product)
   const amountProductInBasket = basket.reduce(
      (acc, produsctAmount) => acc + produsctAmount.amount,
      0
   )
   return (
      <WrapperForHeader>
         <Container>
            <p>Welcome to our online shop</p>
            <WrapperRightHeader>
               <p>English (USD) | Login or Sign up</p>
               <WrapperBell onClick={() => novigate('/basket')}>
                  {amountProductInBasket}
                  <AiOutlineBell className="iconBell" />
               </WrapperBell>
            </WrapperRightHeader>
         </Container>
      </WrapperForHeader>
   )
}
const WrapperForHeader = styled.div`
   width: 100%;
   background: ${(props) => props.backColor || '#7ac751'};
   height: auto;
   position: fixed;
   z-index: 999;
   top: 0;
`
const Container = styled.header`
   width: 1200px;
   height: 50px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   p {
      font-family: 'Rubik', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
      margin: 0;
   }
`
const WrapperRightHeader = styled.div`
   display: flex;
   align-items: center;
`
const WrapperBell = styled.div`
   margin-left: 10px;
   width: 55px;
   padding: 2px 0 2px 3px;
   border: 3px double #fff;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 20px;
   color: #fff;
   font-size: 18px;
   cursor: pointer;
   &:hover {
      border: 3px solid #fff;
   }
   .iconBell {
      font-size: 23px;
   }
`
