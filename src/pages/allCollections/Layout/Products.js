import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getAsyncProducts } from '../../../store/productSlice'
import { LoadingSpiner } from '../../../components/UI/LoadingSpiner'
import { ProductCard } from '../../../components/cards/ProductCard'

export const Products = () => {
   const dispatch = useDispatch()
   const { products, isLoading } = useSelector((state) => state.product)
   useEffect(() => {
      dispatch(getAsyncProducts())
   }, [])
   const renderProducts = () => {
      return products.map((product) => {
         return <ProductCard key={Math.random()} product={product} />
      })
   }
   return (
      <WrapperCards>
         {isLoading ? <LoadingSpiner /> : renderProducts()}
      </WrapperCards>
   )
}
const WrapperCards = styled.div`
   width: 1200px;
   margin: 0 auto;
   padding-top: 50px;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(2, 1fr);
   grid-column-gap: 30px;
   grid-row-gap: 30px;
   margin: 0 auto;
   margin-bottom: 100px;
`
