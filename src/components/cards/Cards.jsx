import React from 'react'
import styled from 'styled-components'
import TitleItem from '../UI/TitleItem'
import card1 from '../../assets/card1.png'

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
		url: card1,
		price: '$180',
	},
	{
		id: 3,
		title: 'Minimal LCD chair',
		url: card1,
		price: '$180',
	},
	{
		id: 4,
		title: 'Minimal LCD chair',
		url: card1,
		price: '$180',
	},
	{
		id: 5,
		title: 'Minimal LCD chair',
		url: card1,
		price: '$180',
	},
	{
		id: 6,
		title: 'Minimal LCD chair',
		url: card1,
		price: '$180',
	},
	{
		id: 6,
		title: 'Minimal LCD chair',
		url: card1,
		price: '$180',
	},
	{
		id: 6,
		title: 'Minimal LCD chair',
		url: card1,
		price: '$180',
	},
]

const Cards = () => {
	return (
		<>
			{data.map((el) => (
				<Wrapper key={el.id}>
					<img src={el.url} alt='' />
					<WrapperInfo>
						<TitleItem>{el.title}</TitleItem>
						<div>
							<h6>{el.price}</h6>
							<button>Add</button>
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
	img {
		width: 260px;
		height: 280px;
	}

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
		width: 65px;
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
export default Cards
