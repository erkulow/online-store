import React from 'react'
import styled from 'styled-components'
import { Cards } from '../../../components/cards/Cards'
import { Title } from '../../../components/UI/Title'

export const Trending = () => {
	return (
		<Wrapper>
			<Title>TRENDING</Title>
			<WrapperCards>
				<Cards />
			</WrapperCards>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 100px;
`
const WrapperCards = styled.div`
	padding-top: 50px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 30px;
	grid-row-gap: 30px;
	margin: 0 auto;
	margin-bottom: 100px;
`
