import React from 'react'
import styled from 'styled-components'
import { Header } from '../../components/header/Header'
import { NavLink } from '../../components/Layout/NavLink'
import { SearchBar } from '../../components/searchBar/SearchBar'
import { GiShoppingCart } from 'react-icons/gi'
import { TitleItem } from '../../components/UI/TitleItem'
import { AiOutlineDelete } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { ListItem } from '../../components/UI/ListItem'
import { Text } from '../../components/UI/Text'

import card1 from '../../assets/card1.png'

const Busket = () => {
	return (
		<>
			<Header />
			<SearchBar />
			<NavLink />
			<WrapperDesk>
				<DeskHeader>
					<FlexDiv>
						<TitleItem>Basket</TitleItem>
						<GiShoppingCart fontSize='30' color='#5c5252' />
					</FlexDiv>
					<FlexDiv className='deleteBtn'>
						<TitleItem>Delete everything</TitleItem>
						<AiOutlineDelete fontSize='30' color='#5c5252' />
					</FlexDiv>
				</DeskHeader>
				<Main>
					<OrderCard>
						<AboutFood>
							<img src={card1} alt='' />
							<div>
								<ListItem>Bars</ListItem>
								<Text>adasdasda</Text>
							</div>
						</AboutFood>
						<WrapperCounter>
							<p>840c</p>
							<TiDeleteOutline cursor='pointer' fontSize='35px' />
						</WrapperCounter>
					</OrderCard>
					<OrderCard>
						<AboutFood>
							<img src={card1} alt='' />
							<div>
								<ListItem>Bars</ListItem>
								<Text>adasdasda</Text>
							</div>
						</AboutFood>
						<WrapperCounter>
							<p>840c</p>
							<TiDeleteOutline cursor='pointer' fontSize='35px' />
						</WrapperCounter>
					</OrderCard>
					<OrderCard>
						<AboutFood>
							<img src={card1} alt='' />
							<div>
								<ListItem>Bars</ListItem>
								<Text>adasdasda</Text>
							</div>
						</AboutFood>
						<WrapperCounter>
							<p>840c</p>
							<TiDeleteOutline cursor='pointer' fontSize='35px' />
						</WrapperCounter>
					</OrderCard>
				</Main>
				<DeskFooter>
					<WrapperPromo>
						<WrapperInput>
							<input type='text' />
							<IoIosArrowDroprightCircle
								fontSize='30px'
								color='grey'
							/>
						</WrapperInput>
						<ListItem>Promo-Code</ListItem>
					</WrapperPromo>
					<WrapperTotal>
						<TitleItem>Total:</TitleItem>
						<TitleItem>1500</TitleItem>
					</WrapperTotal>
				</DeskFooter>
			</WrapperDesk>
		</>
	)
}
const WrapperDesk = styled.div`
	width: 1100px;
	padding: 5px 10px;
	margin: 0 auto;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	background: #f7f8fa;
	border-radius: 8px;
	.deleteBtn {
		cursor: pointer;
	}
`
const FlexDiv = styled.div`
	display: flex;
	align-items: center;
`
const DeskHeader = styled.div`
	height: 50px;
	border-bottom: 3px solid #7ac751;
	padding: 0 15px;
	display: flex;
	justify-content: space-between;
`
// Main
const Main = styled.div``
const OrderCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid silver;
`
const AboutFood = styled.div`
	display: flex;
	align-items: center;
	img {
		margin-right: 25px;
		width: 90px;
		height: 90px;
	}
`
const WrapperCounter = styled.div`
	display: flex;
	align-items: center;
	p {
		font-family: 'Rubik';
		font-style: normal;
		font-weight: 400;
		font-size: 17px;
		line-height: 17px;
		margin-right: 20px;
		color: #7ac751;
	}
`

// Footer
const DeskFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
`
const WrapperTotal = styled.div`
	display: flex;
`
const WrapperPromo = styled.div`
	margin-left: 5px;
`
const WrapperInput = styled.div`
	display: flex;
	padding: 2px 2px 2px 5px;
	border-radius: 22px;
	border: 2px solid grey;
	input {
		width: 150px;
		height: 30px;
		background: none;
		outline: none;
		border: none;
		font-family: 'Rubik', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 120%;
		letter-spacing: 0.005em;
		color: #555555;
	}
`

export default Busket
