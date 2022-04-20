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
   width: 250px;
   margin: 0 auto;
   margin-top: 75px;
`
const PageItem = styled.div`
   width: 30px;
   height: 20px;
   background: silver;
   color: white;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 10px;
   margin: 0 auto;
   margin-top: 15px;
   &:hover {
      background: gray;
   }
`
