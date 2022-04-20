import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
   margin: 0 auto;
   width: 1200px;
   display: ${(props) => props.display || 'block'};
`
export const Container = (props) => {
   return <StyledContainer {...props} />
}
