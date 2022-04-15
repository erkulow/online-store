import React from 'react'
import styled from 'styled-components'
import { TitleItem } from '../UI/TitleItem'
import card1 from '../../assets/img/card1.png'
import card2 from '../../assets/img/card2.png'
import card3 from '../../assets/img/card3.png'
import card4 from '../../assets/img/card4.png'

import { MdAddShoppingCart } from 'react-icons/md'

const data = [
	{
		id: 1,
		title: 'Minimal LCD chair',
		url: card1,
		price: '$180',
	},
	{
		id: 2,
		title: 'Minimal LCD chair',
		url: card2,
		price: '$180',
	},
	{
		id: 3,
		title: 'Minimal LCD chair',
		url: card3,
		price: '$180',
	},
	{
		id: 4,
		title: 'Minimal LCD chair',
		url: card4,
		price: '$180',
	},
	{
		id: 5,
		title: 'Minimal LCD chair',
		url: card4,
		price: '$180',
	},
	{
		id: 6,
		title: 'Minimal LCD chair',
		url: card3,
		price: '$180',
	},
	{
		id: 7,
		title: 'Minimal LCD chair',
		url: card2,
		price: '$180',
	},
	{
		id: 8,
		title: 'Minimal LCD chair',
		url: card1,
		price: '$180',
	},
]

export const Cards = () => {
	return (
		<>
			{data.map((el) => (
				<Wrapper key={el.id}>
					<CoverImg>
						<img src={el.url} alt='' />
					</CoverImg>
					<WrapperInfo>
						<TitleItem>{el.title}</TitleItem>
						<div>
							<h6>{el.price}</h6>
							<button>
								<MdAddShoppingCart
									color='white'
									fontSize='25px'
								/>
							</button>
						</div>
					</WrapperInfo>
				</Wrapper>
			))}
		</>
	)
}
const Wrapper = styled.div`
	width: 260px;
	height: 380px;
	h6 {
		font-family: 'Mulish';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 120%;
		letter-spacing: 0.005em;
		color: #7ac751;
	}
`
const CoverImg = styled.div`
	position: relative;
	overflow: hidden;
	width: 260px;
	height: 280px;
	outline-offset: -8px;
	img {
		width: 260px;
		height: 280px;
		position: absolute;
		inset: 0;
		object-fit: cover;
		transition: transform 1.75s;
	}
	&:hover img {
		transform: scale(1.15);
	}
`
const WrapperInfo = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	padding: 5px 2px 0 2px;
	div {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	button {
		width: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px 8px;
		border: none;
		border-radius: 4px;
		background: #7ac751;
		color: white;
		font-family: 'Mulish';
		font-style: normal;
		font-weight: 700;
		cursor: pointer;
		&:hover {
			opacity: 0.9;
		}
	}
`
