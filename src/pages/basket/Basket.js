import React, { useCallback, useEffect, useRef, useState } from 'react'
import { GiShoppingCart } from 'react-icons/gi'
import { AiOutlineDelete } from 'react-icons/ai'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { FaOpencart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Logo from '../../assets/img/Logo.png'
import { ListItem } from '../../components/UI/ListItem'
import { CreditModal } from '../../components/UI/CreditModal'
import { Text } from '../../components/UI/Text'
import { TitleItem } from '../../components/UI/TitleItem'
import { Header } from '../../components/header/Header'
import { NavigateLink } from '../../components/Layout/NavigateLink'
import { SearchBar } from '../../components/Layout/SearchBar'
import { Footer } from '../../components/footer/Footer'
import { StockBlock } from '../home/Layout/StockBlock'
import { Advertising } from '../home/Layout/Advertising'
import { ScrollTop } from '../../components/Layout/ScrollTop'
import { useToggle } from '../../hooks/useToggle'
import { productActions } from '../../store/productSlice'
import { Trending } from '../../components/Layout/Trending'
import { PROMO_CODE } from '../../utils/constants/general'
import Title from '../../components/UI/Title'

const Busket = () => {
   const dispatch = useDispatch()
   const { basket } = useSelector((state) => state.product)
   const [showModal, toggleShowModal] = useToggle(false)
   const [totalPrice, setTotalPrice] = useState(0)
   const [isValidPromoCode, setIsValidPromoCode] = useState('')
   const promoCode = useRef()

   const promoCodeHandler = () => {
      const promoCodeValue = promoCode.current
      if (promoCodeValue.value === PROMO_CODE) {
         const discount = (totalPrice * 20) / 100
         const minusDiscountOfTotalPrice = totalPrice - discount
         setTotalPrice(minusDiscountOfTotalPrice)
         setIsValidPromoCode('Congratulations on your 20% discount')
      } else {
         setIsValidPromoCode('Incorrect promo code')
      }
   }

   const logoImgAdvertising = (
      <img style={{ width: '250px' }} src={Logo} alt="" />
   )
   useEffect(() => {
      window.onbeforeunload = () => {
         return localStorage.setItem('basket', JSON.stringify(basket))
      }
      return () => localStorage.setItem('basket', JSON.stringify(basket))
   }, [basket])
   const deleteBasketHandler = (item) => {
      dispatch(productActions.deleteCardHandler(item))
   }
   const calculateTotalPrice = useCallback(() => {
      if (basket.length > 0) {
         const total = basket.reduce((acc, current) => {
            return acc + current.totalProductPrice
         }, 0)
         setTotalPrice(total)
      } else {
         setTotalPrice(0)
      }
   }, [basket])
   useEffect(() => {
      calculateTotalPrice()
   }, [calculateTotalPrice])

   return (
      <>
         <Header />
         <ScrollTop />
         <SearchBar />
         <NavigateLink logoImgAdvertising={logoImgAdvertising} />
         {basket.length < 1 && (
            <Title style={{ textAlign: 'center' }}>Basket is Empty</Title>
         )}
         {basket.map((productInCart) => (
            <WrapperDesk key={productInCart.id}>
               <DeskHeader>
                  <FlexDiv>
                     <TitleItem>Basket</TitleItem>
                     <GiShoppingCart fontSize="30" color="#5c5252" />
                  </FlexDiv>
                  <FlexDiv className="deleteBtn">
                     <TitleItem>Delete everything</TitleItem>
                     <AiOutlineDelete
                        id={productInCart.id}
                        onClick={() => deleteBasketHandler(productInCart)}
                        fontSize="30"
                        color="#5c5252"
                     />
                  </FlexDiv>
               </DeskHeader>
               <Main>
                  <OrderCard>
                     <AboutFood>
                        <img src={productInCart.image} alt="" />
                        <div>
                           <ListItem>{productInCart.title}</ListItem>
                           <Text>{productInCart.category}</Text>
                           <AmountProductsDiv>
                              Count : {productInCart.rating.count}
                           </AmountProductsDiv>
                        </div>
                     </AboutFood>
                     <WrapperCounter>
                        <p>$ {productInCart.price}</p>
                        <FlexAmountDiv>
                           <button
                              disabled={productInCart.amount === 1}
                              onClick={() =>
                                 dispatch(
                                    productActions.removeProductFromBasket(
                                       productInCart.id
                                    )
                                 )
                              }
                           >
                              -
                           </button>
                           <TitleItem>{productInCart.amount}</TitleItem>
                           <button
                              onClick={() =>
                                 dispatch(
                                    productActions.addToBasket(productInCart)
                                 )
                              }
                              disabled={
                                 productInCart.amount ===
                                 productInCart.rating.count
                              }
                           >
                              +
                           </button>
                        </FlexAmountDiv>
                     </WrapperCounter>
                  </OrderCard>
               </Main>
               <DeskFooter>
                  <WrapperTotal>
                     <TitleItem>
                        {productInCart.category} price : &nbsp;
                     </TitleItem>{' '}
                     <TitleItem>
                        {' '}
                        $ {productInCart.totalProductPrice.toFixed(2)}
                     </TitleItem>
                  </WrapperTotal>
               </DeskFooter>
            </WrapperDesk>
         ))}
         <WrapperTotalandPromo>
            <WrapperPromo>
               <ListItem>
                  Promo-Code: <br /> {isValidPromoCode}
               </ListItem>
               <WrapperInput>
                  <input ref={promoCode} type="text" />
                  <IoIosArrowDroprightCircle
                     onClick={promoCodeHandler}
                     fontSize="30px"
                     color="grey"
                  />
               </WrapperInput>
            </WrapperPromo>
            <TotalBlock>
               {showModal ? <CreditModal /> : ''}
               <TitleItem>Total: ${totalPrice.toFixed(2)}</TitleItem>
               <ButtonCheckout onClick={toggleShowModal}>
                  Checkout Order <FaOpencart fontSize="20px" />
               </ButtonCheckout>
            </TotalBlock>
         </WrapperTotalandPromo>

         <StockBlock />
         <Trending />
         <Advertising />
         <Footer />
      </>
   )
}
const FlexAmountDiv = styled.div`
   width: 100px;
   display: flex;
   align-items: center;
   justify-content: space-around;
   button {
      width: 20px;
      font-family: 'Rubik', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      color: #fff;
      border-radius: 4px;
      background: #7ac751;
      border: none;
      cursor: pointer;
      &:hover {
         opacity: 0.9;
      }
   }
`
const TotalBlock = styled.div`
   margin: 0 auto;
   margin-top: 50px;
   display: flex;
   flex-direction: column;
   p {
      margin: 0 auto;
   }
`
const WrapperDesk = styled.div`
   width: 1100px;
   padding: 5px 10px;
   margin: 0 auto;
   margin-top: 20px;
   display: flex;
   flex-direction: column;
   background: #f7f8fa;
   border-radius: 8px;
   .deleteBtn {
      cursor: pointer;
   }
`
const FlexDiv = styled.div`
   display: flex;
   align-items: center;
`
const DeskHeader = styled.div`
   height: 50px;
   border-bottom: 3px solid #7ac751;
   padding: 0 15px;
   display: flex;
   justify-content: space-between;
`
const Main = styled.div``
const OrderCard = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 1px solid silver;
`
const AboutFood = styled.div`
   display: flex;
   align-items: center;
   img {
      margin-right: 25px;
      width: 80px;
      height: 80px;
      margin: 8px;
   }
`
const AmountProductsDiv = styled.div`
   width: 100px;
   text-align: center;
   border: 1px solid #555555;
   border-radius: 4px;
   padding: 5px;
   margin-top: 5px;
   font-family: 'Rubik', sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 120%;
   letter-spacing: 0.005em;
   color: #555555;
`
const WrapperCounter = styled.div`
   display: flex;
   align-items: center;
   p {
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 17px;
      color: #7ac751;
   }
`
const DeskFooter = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 10px;
   padding: 5px;
`
const WrapperTotal = styled.div`
   display: flex;
   align-items: center;
`
const WrapperTotalandPromo = styled.div`
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 300px;
`
const WrapperPromo = styled.div`
   margin-left: 5px;
   width: 250px;
   margin: 0 auto;
   margin-right: 5px;
   margin-top: 30px;
`
const WrapperInput = styled.div`
   display: flex;
   padding: 2px 2px 2px 5px;
   border-radius: 22px;
   border: 2px solid grey;
   input {
      width: 210px;
      height: 30px;
      background: none;
      outline: none;
      border: none;
      font-family: 'Rubik', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 120%;
      letter-spacing: 0.005em;
      color: #555555;
   }
`
const ButtonCheckout = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 170px;
   margin: 0 auto;
   height: 50px;
   margin-top: 15px;
   border-radius: 4px;
   border: none;
   background: #7ac751;
   font-family: 'Rubik', sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 120%;
   letter-spacing: 0.005em;
   color: #fff;
   cursor: pointer;
   transition: 1s;
   &:hover {
      opacity: 0.9;
      width: 190px;
      margin: 0 auto;
      margin-top: 15px;
      transition: 1s;
   }
`
export default Busket
