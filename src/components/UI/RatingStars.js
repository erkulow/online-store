import React from 'react'
import styled from 'styled-components'
import { AiFillStar } from 'react-icons/ai'
export const RatingStars = ({ rating }) => {
	const rate = [1, 2, 3, 4, 5]

	return (
		<WrapperStars>
			{rate.map((rate) => (
				<AiFillStar key={Math.random()} color='grey' values={rate} />
			))}
		</WrapperStars>
	)
}
const WrapperStars = styled.div`
	display: flex;
`
