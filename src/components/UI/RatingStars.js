import React from 'react'
import styled from 'styled-components'
import { AiFillStar } from 'react-icons/ai'
export const RatingStars = () => {
   const rate = [1, 2, 3, 4, 5]
   return (
      <WrapperStars>
         {rate.map((rate) => (
            <AiFillStar key={rate} color="gold" />
         ))}
      </WrapperStars>
   )
}
const WrapperStars = styled.div`
   display: flex;
`
