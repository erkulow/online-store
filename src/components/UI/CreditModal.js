/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom'
import wave from '../../assets/svg/wave.svg'
import { Text } from '../../components/UI/Text'
import { TitleItem } from '../../components/UI/TitleItem'
import { Backdrop } from './Backdrop'
import { useInput } from '../../hooks/useInput'
import { useToggle } from '../../hooks/useToggle'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export const CreditModal = () => {
   const [hideModal, toggleHideModal] = useToggle(false)
   const navigate = useNavigate()
   const name = useInput('')
   const numberCard = useInput('')
   const dateCard = useInput('')
   const securityCode = useInput('')
   const finishShopingHandker = () => {
      navigate('/')
   }
   return ReactDOM.createPortal(
      <React.Fragment key={Math.random()}>
         {hideModal ? (
            ''
         ) : (
            <React.Fragment>
               <Wrapper>
                  <Flex>
                     <H1>Payment Information</H1>{' '}
                     <AiOutlineCloseCircle
                        fontSize={'30px'}
                        color="white"
                        cursor="pointer"
                        onClick={toggleHideModal}
                     />
                  </Flex>

                  <Container>
                     <Card>
                        <HeaderCard>
                           <TitleItem>RSK BANK</TitleItem>
                           <img
                              src="https://img.icons8.com/cute-clipart/55/000000/scale-tool.png"
                              alt=""
                           />
                        </HeaderCard>
                        <CardNumber>
                           <div className="WrapperCheep">
                              <img
                                 src="https://img.icons8.com/cotton/34/000000/wifi--v1.png"
                                 alt=""
                              />
                              <img
                                 src="https://img.icons8.com/fluency/55/000000/sim-card-chip.png"
                                 alt=""
                              />
                           </div>
                           <Text style={{ color: 'black' }}>
                              <b>card number</b>
                           </Text>
                           <TitleItem>{numberCard.value}</TitleItem>
                        </CardNumber>
                        <FooterCard>
                           <div>
                              <Text style={{ color: 'black' }}>
                                 <b>cardholder name</b>
                              </Text>
                              <TitleItem>{name.value}</TitleItem>
                           </div>
                           <div>
                              <Text style={{ color: 'black' }}>
                                 <b>expiration</b>
                              </Text>
                              <TitleItem>{dateCard.value}</TitleItem>
                           </div>
                        </FooterCard>
                     </Card>
                     <CreditCardForm>
                        <FlexDiv>
                           <label>Name</label>
                           <input
                              placeholder="Name..."
                              value={name.value}
                              onChange={name.onChange}
                              {...name}
                              type="text"
                           />
                        </FlexDiv>
                        <FlexDiv>
                           <label >Card Number</label>
                           <input
                              placeholder="XXXX XXXX XXXX XXXX"
                              value={numberCard.value}
                              onChange={numberCard.onChange}
                              type="number"
                              {...numberCard}
                           />
                        </FlexDiv>
                        <SecretCodeFlex>
                           <FlexDiv>
                              <label >Expiration (mm/yy)</label>
                              <input
                                 value={dateCard.value}
                                 onChange={dateCard.onChange}
                                 type="number"
                                 {...dateCard}
                              />
                           </FlexDiv>
                           <FlexDiv>
                              <label >Security Code</label>
                              <input
                                 value={securityCode.value}
                                 onChange={securityCode.onChange}
                                 type="number"
                                 {...securityCode}
                              />
                           </FlexDiv>
                        </SecretCodeFlex>
                        <FlexDiv>
                           <button onClick={finishShopingHandker}>PAY</button>
                        </FlexDiv>
                     </CreditCardForm>
                  </Container>
               </Wrapper>
               <Backdrop toggleHideModal={toggleHideModal} />
            </React.Fragment>
         )}
      </React.Fragment>,
      document.getElementById('credit-modal')
   )
}
const Flex = styled.div`
   margin: 0 auto;
   width: 90%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const H1 = styled.h1`
   text-align: center;
   font-family: 'Mulish';
   font-style: normal;
   font-weight: 700;
   font-size: 36px;
   line-height: 45px;
   color: #fff;
   position: relative;
   z-index: 200;
`
const Wrapper = styled.div`
   margin: 0 auto;
   width: 1100px;
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 980;
`
const Container = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   margin-top: 50px;
`
const Card = styled.div`
   width: 400px;
   height: 250px;
   background: url(${wave});
   background-size: cover;
   background-repeat: no-repeat;
   box-shadow: 1px 5px 6px 0px black;
   border-radius: 22px;
   background-color: #fef5e1;
   float: right;
   padding: 5px 25px;
   align-items: center;
`
const CreditCardForm = styled.form``
const FlexDiv = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 5px;
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
   label {
      font-family: 'Rubik';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
      letter-spacing: 0.005em;
      color: #555555;
      margin-top: 5px;
   }
   input {
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
const HeaderCard = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const FooterCard = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 10px;
`
const CardNumber = styled.div`
   img {
      margin-top: 15px;
   }
   .WrapperCheep {
      display: flex;
      align-items: center;
   }
`
