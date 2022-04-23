import React from 'react'
import styled from 'styled-components'

export const Pagination = ({
   productsPerPage,
   totalProducts,
   onPageChange,
}) => {
   const pageNumbers = []
   for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i)
   }
   return (
      <Container>
         {pageNumbers.map((numberPage) => (
            <PageItem
               onClick={() => {
                  onPageChange(numberPage)
               }}
               key={numberPage}
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
   background: #f7f8fa;
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
   color: #7ac751;
   margin: 0;
`
