import React from 'react'
import styled from 'styled-components'
export const ExpectationPage = () => {
   return (
      <WrapperProgress>
         <progress max="100" value="25">
            Загружено на <span id="value">25</span>%
         </progress>
      </WrapperProgress>
   )
}
const WrapperProgress = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`
