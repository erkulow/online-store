import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { productActions } from '../../store/productSlice'

export const Backdrop = (props) => {
	const dispatch = useDispatch()
	return (
		<Back
			onClick={() => dispatch(productActions.hideModal())}
			zIndex={props.zIndex}
		/>
	)
}

const Back = styled.div`
	position: fixed;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	background: rgba(0, 0, 0, 0.8);
	z-index: ${(props) => props.zIndex || '50'};
`
