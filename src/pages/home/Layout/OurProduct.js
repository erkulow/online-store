/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Title from '../../../components/UI/Title'
import { TitleItem } from '../../../components/UI/TitleItem'
import { productActions } from '../../../store/productSlice'

export const OurProduct = () => {
   const dispatch = useDispatch()
   const [isHave, setIsHave] = useState(false)
   const { products, basket } = useSelector((state) => state.product)
   const addBaskethandler = (item) => {
      dispatch(productActions.addToBasket(item))
      const currontIndex = basket.some((el) => el.id === item.id)
      if (currontIndex) {
         setIsHave(true)
      } else {
         setIsHave(false)
      }
   }
   return (
      <Wrapper>
         <Title>Our Product</Title>
         <WrapperCards>
            {products.map((apiProduct) => (
               <Card key={apiProduct.id}>
                  <CoverImg>
                     <img src={apiProduct.image} alt="" />
                  </CoverImg>
                  <WrapperInfo>
                     <TitleItem>{apiProduct.category}</TitleItem>
                     <div>
                        <h6>${apiProduct.price}</h6>
                        {}
                        <button
                           id={apiProduct.id}
                           onClick={() => addBaskethandler(apiProduct)}
                        >
                           <MdAddShoppingCart color="white" fontSize="25px" />
                        </button>
                     </div>
                  </WrapperInfo>
               </Card>
            ))}
         </WrapperCards>
      </Wrapper>
   )
}
const Wrapper = styled.div`
   width: 1200px;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-top: 100px;
`
const WrapperCards = styled.div`
   padding-top: 50px;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(2, 1fr);
   grid-column-gap: 30px;
   grid-row-gap: 30px;
   margin: 0 auto;
   margin-bottom: 100px;
`
const Card = styled.div`
   width: 260px;
   height: 380px;
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
