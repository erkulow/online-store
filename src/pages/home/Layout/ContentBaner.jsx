import React from 'react'
import styled from 'styled-components'
import BanerImg from '../../../assets/img/BanerImg.png'
import { Container } from '../../../components/UI/Container'
import Title from '../../../components/UI/Title'

export const ContentBaner = () => {
	return (
		<Container display={'flex'}>
			<CollectionsBlock>
				<ul>
					<li>All</li>
					<li>New Arrivals</li>
					<li>Hot Sale</li>
					<li>Men's Clothing</li>
					<li>Women's Clothing</li>
					<li>Electronic</li>
					<li>Jewelery</li>
					<li>Sofa</li>
					<li>Mirrors</li>
					<li>Stools</li>
				</ul>
			</CollectionsBlock>
			<WrapperBaner>
				<InfoBlock>
					<span>TOP COLLECTIONS 2022</span>
					<Title>
						We Serve Your <br /> Dream Furniture
					</Title>
					<br />
					<span>Get 50% off all products</span>
					<br />
					<br />
					<button>BUY NOW</button>
				</InfoBlock>
				<div>
					<img src={BanerImg} alt='' />
				</div>
			</WrapperBaner>
		</Container>
	)
}
const CollectionsBlock = styled.div`
	ul {
		display: flex;
		flex-direction: column;
		cursor: pointer;

		li {
			padding: 15px 0 0 15px;
			list-style: none;
			height: 45px;
			width: 250px;
			background: #f7f8fa;
			font-family: 'Rubik';
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 17px;
			color: #555555;
			border-bottom: 1px solid silver;
			opacity: 0.8;
			&:hover {
				opacity: 1.5;
			}
		}
	}
`
const WrapperBaner = styled.div`
	width: 935px;
	height: 450px;
	margin: 10px 0 0 10px;
	background: #f1faff;
	display: flex;
	justify-content: space-around;
	align-items: center;
	img {
		width: 374px;
		height: 374px;
	}
`
const InfoBlock = styled.div`
	span {
		font-family: 'Rubik';
		font-style: normal;
		font-weight: 400;
		font-size: 22px;
		line-height: 26px;
		letter-spacing: 0.05em;
		color: #7ac751;
	}
	button {
		background: #7ac751;
		border: none;
		padding: 5px 15px;
		border-radius: 4px;
		color: white;
		font-family: 'Rubik';
		font-style: normal;
		&:hover {
			opacity: 0.9;
		}
	}
`
