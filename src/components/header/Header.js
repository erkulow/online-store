import React from 'react'
import styled from 'styled-components'

export const Header = (props) => {
	return (
		<WrapperForHeader props={props}>
			<Container>
				<p>Welcome to our online shop</p>
				<p>English (USD) | Login or Sign up</p>
			</Container>
		</WrapperForHeader>
	)
}
const WrapperForHeader = styled.div`
	width: 100%;
	background: ${(props) => props.backColor || '#7ac751'};
	height: auto;
	position: fixed;
	z-index: 999;
	top: 0;
`
const Container = styled.header`
	width: 1200px;
	height: 50px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	p {
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
		color: #ffffff;
		margin: 0;
	}
`
