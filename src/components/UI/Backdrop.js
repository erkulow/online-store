import React from 'react'
import styled from 'styled-components'

export const Backdrop = (props) => {
   return <Back onClick={props.toggleHideModal} zIndex={props.zIndex} />
}

const Back = styled.div`
   position: fixed;
   top: 0px;
   right: 0px;
   bottom: 0px;
   left: 0px;
   background: rgba(0, 0, 0, 0.8);
   z-index: ${(props) => props.zIndex || '100'};
`
