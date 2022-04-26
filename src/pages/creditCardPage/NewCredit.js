import React, { useState } from 'react'
import styled from 'styled-components'
import wave from '../../assets/svg/wave.svg'
import { TitleItem } from '../../components/UI/TitleItem'
import { RiVisaFill } from 'react-icons/ri'
import { MdNfc } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useInput } from '../../hooks/useInput'
import { Header } from '../../components/header/Header'
import { VISA_CARD_CODE } from '../../utils/helpers/regex'
import { useDispatch } from 'react-redux'
import { productActions } from '../../store/productSlice'

const NewCredit = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const name = useInput()
   const numberCard = useInput()
   const dateCard = useInput()
   const securityCode = useInput('')
   const inputYear = new Date().getFullYear().toString()
   const inputMonth = new Date().getMonth().toString()

   const [nameIsValid, setNameIsValid] = useState('')
   const [cardNumber, setCrdNumber] = useState('')
   const [dateIsValid, setDateIsValid] = useState('')
   const [securityCodeIsValid, setSecurityCodeIsValid] = useState('')

   const date = dateCard.value.split('/')
   const finishShopingHandker = (e) => {
      e.preventDefault()
      if (
         name.value.trim().length === 0 &&
         VISA_CARD_CODE.test(numberCard.value) &&
         Number(inputYear) > Number(date[1]) &&
         Number(inputMonth) > Number(date[0]) &&
         securityCode.value.trim().length === 0
      ) {
         setNameIsValid('Invalid Name')
         setCrdNumber('Invalid Number')
         setDateIsValid('Invalid Date')
         setSecurityCodeIsValid('Invalid Security Code')
      } else {
         dispatch(productActions.clearBasket())
         navigate('/')
      }
   }
   return (
      <>
         <Header />
         <Wrapper>
            <div className="card">
               <div className="back-card">
                  <div className="card__front card__part">
                     <div className="flex_img">
                        <img
                           src="https://img.icons8.com/fluency/55/000000/sim-card-chip.png"
                           alt=""
                        />
                        <RiVisaFill fontSize={'45px'} />
                     </div>
                     <div className="flex_img">
                        <MdNfc fontSize={'px'} fontStyle={'black'} />
                        <p className="card_numer">{numberCard.value}</p>
                     </div>
                     <div className="card__space-75">
                        <TitleItem className="card__label">
                           Card holder
                        </TitleItem>
                        <TitleItem className="card__info">
                           {name.value}
                        </TitleItem>
                     </div>
                     <div className="card__space-25">
                        <TitleItem className="card__label">Expires</TitleItem>
                        <TitleItem className="card__info">
                           {dateCard.value}
                        </TitleItem>
                     </div>
                  </div>
               </div>
            </div>
            <CreditCardForm>
               <FlexDiv>
                  <ValidFlex>
                     <p>Name</p>
                     <h6>{nameIsValid}</h6>
                  </ValidFlex>
                  <input
                     value={name.value}
                     onChange={name.handleChange}
                     placeholder="Name..."
                     type="text"
                     maxLength="10"
                     minLength="3"
                  />
               </FlexDiv>
               <FlexDiv>
                  <ValidFlex>
                     <p>Card Number</p>
                     <h6>{cardNumber}</h6>
                  </ValidFlex>
                  <input
                     maxLength="16"
                     placeholder="XXXX XXXX XXXX XXXX"
                     type="text"
                     value={numberCard.value}
                     onChange={numberCard.handleChange}
                  />
               </FlexDiv>
               <SecretCodeFlex>
                  <FlexDiv>
                     <ValidFlex>
                        <p>Expiration (mm/yy)</p>
                        <h6>{dateIsValid}</h6>
                     </ValidFlex>
                     <input
                        value={dateCard.value}
                        onChange={dateCard.handleChange}
                        placeholder="XX/XX"
                        type="text"
                        maxLength={'7'}
                     />
                  </FlexDiv>
                  <FlexDiv>
                     <ValidFlex>
                        <p>Security Code</p>
                        <h6>{securityCodeIsValid}</h6>
                     </ValidFlex>
                     <input
                        value={securityCode.value}
                        onChange={securityCode.handleChange}
                        type="number"
                        maxLength={'3'}
                        placeholder="XXX"
                     />
                  </FlexDiv>
               </SecretCodeFlex>
               <FlexDiv>
                  <button type="submit" onClick={finishShopingHandker}>
                     PAY
                  </button>
               </FlexDiv>
            </CreditCardForm>
         </Wrapper>
      </>
   )
}
const ValidFlex = styled.div`
   display: flex;
   align-items: center;
   justify-content: start;
   p {
      margin-right: 10px;
   }
   h6 {
      color: red;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   }
`
export default NewCredit
const Wrapper = styled.div`
   width: 950px;
   height: 450px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 50px;
   position: fixed;
   border-radius: 5px;
   top: 20%;
   left: 15%;
   transform: translate(-50% -50%);
   z-index: 2;
   .title {
      margin-bottom: 30px;
      color: #162969;
   }
   .card {
      width: 320px;
      height: 190px;
      -webkit-perspective: 600px;
      -moz-perspective: 600px;
      perspective: 600px;
   }
   .flex_img {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   .back-card {
      width: 100%;
      height: 100%;
      background: #85c562;
      border-radius: 8px;
   }
   .card__part {
      top: 0;
      position: absolute;
      z-index: 1000;
      left: 0;
      display: inline-block;
      width: 320px;
      height: 190px;
      background: url(${wave});
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 8px;
   }

   .card__front {
      padding: 18px;
   }

   .card__logo {
      height: 16px;
   }

   .card__front-logo {
      position: absolute;
      top: 18px;
      right: 18px;
   }
   .card__square {
      border-radius: 5px;
      height: 30px;
   }

   .card_numer {
      display: block;
      width: 100%;
      word-spacing: 4px;
      font-size: 20px;
      letter-spacing: 2px;
      color: #fff;
      text-align: center;
      margin-bottom: 20px;
      margin-top: 20px;
   }

   .card__space-75 {
      width: 75%;
      float: left;
   }

   .card__space-25 {
      width: 25%;
      float: left;
   }

   .card__label {
      font-size: 10px;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.8);
      letter-spacing: 1px;
   }

   .card__info {
      margin-bottom: 0;
      margin-top: 5px;
      font-size: 16px;
      font-family: 'Rubik', sans-serif;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      color: #fff;
      letter-spacing: 1px;
      text-transform: uppercase;
   }
`
const CreditCardForm = styled.form`
   width: 350px;
`
const FlexDiv = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 15px;
   position: relative;
   z-index: 999;
   button {
      margin-top: 5px;
      padding: 15px 0;
      background: #0099ff;
      border: none;
      border-radius: 4px;
      color: #dcdcdc;
      font-family: 'Mulish';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      cursor: pointer;
      &:hover {
         color: #fff;
         opacity: 0.9;
      }
   }
   p {
      display: flex;
      text-align: start;
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 120%;
      letter-spacing: 0.02em;
      color: black;
      margin-top: 5px;
   }
   input {
      height: 35px;
      margin-top: 3px;
      padding: 15px;
      font-size: 16px;
      width: 100%;
      border-radius: 3px;
      border: 1px solid #dcdcdc;
      outline: none;
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #555555;
      resize: none;
   }
   input[type='number']::-webkit-outer-spin-button,
   input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }
`
const SecretCodeFlex = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: 1fr;
   grid-column-gap: 15px;
`
