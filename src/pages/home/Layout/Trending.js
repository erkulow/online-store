import React from 'react'
import styled from 'styled-components'
import card1 from '../../../assets/img/card1.png'
import card2 from '../../../assets/img/card2.png'
import card3 from '../../../assets/img/card3.png'
import card4 from '../../../assets/img/card4.png'
import { Title } from '../../../components/UI/Title'
import { TitleItem } from '../../../components/UI/TitleItem'
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
export const Trending = () => {
	return (
		<Wrapper>
			<Title>TRENDING</Title>
			<WrapperCards>
				{data.map((product) => (
					<WrapperCard key={product.id}>
						<CoverImg>
							<img src={product.url} alt='' />
						</CoverImg>
						<WrapperInfo>
							<TitleItem>{product.title}</TitleItem>
							<div>
								<h6>{product.price}</h6>
								<button>
									<MdAddShoppingCart
										color='white'
										fontSize='25px'
									/>
								</button>
							</div>
						</WrapperInfo>
					</WrapperCard>
				))}
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
const WrapperCard = styled.div`
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
