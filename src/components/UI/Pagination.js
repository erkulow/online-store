/* eslint-disable no-unused-vars */
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

export const Pagination = ({
   productsPerPage,
   totalProducts,
   onPageChange,
}) => {
   const [searchParams, setSearchParams] = useSearchParams()
   const pageNumber = searchParams.get('page')
   const pageNumbers = []
   for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i)
   }
   const clickHandler = (e) => {}
   return (
      <Container>
         {pageNumbers.map((numberPage) => (
            <PageItem
               onClick={(e) => {
                  onPageChange(numberPage)
               }}
               key={numberPage}
               isActive={Number(numberPage) === Number(pageNumber)}
            >
               {numberPage}
            </PageItem>
         ))}
      </Container>
   )
}
const Container = styled.div`
   display: flex;
   justify-content: space-around;
   width: 250px;
   margin: 0 auto;
   margin-top: 75px;
`
const PageItem = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 50%;
   border: 2px solid #7ac751;
   background: ${(props) => (props.isActive ? '#7ac751' : '#f7f8fa')};
   color: white;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 auto;
   margin-top: 15px;
   margin-left: 5px;
   &:hover {
      background: #ece6e8;
   }
   font-family: 'Rubik';
   font-style: normal;
   font-weight: 400;
   font-size: 17px;
   line-height: 17px;
   color: black;
   margin: 0;
`
