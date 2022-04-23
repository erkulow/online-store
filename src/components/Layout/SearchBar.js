/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { AiOutlineUser } from 'react-icons/ai'

export const SearchBar = () => {
   return (
      <StyledSearchBlock>
         <Logo>
            <p>FK</p>
         </Logo>
         <Icons>
            <AiOutlineUser fontSize="30px" />
         </Icons>
      </StyledSearchBlock>
   )
}
const StyledSearchBlock = styled.div`
   width: 1200px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 21px;
   margin-top: 55px;
`
const Logo = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   border: 3px dotted #7ac751;
   border-radius: 50%;
   padding: 15px;
   background: #f7f8fa;
   p {
      color: #85b839;
      font-family: 'Mulish', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 45px;
      margin: 0 auto;
   }
`

const Icons = styled.div`
   display: flex;
   justify-content: space-around;
`
