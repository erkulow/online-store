import React, { useEffect } from 'react'
import styled from 'styled-components'
//import IMG
import Logo from '../../assets/img/Logo.png'
import card1 from '../../assets/img/card1.png'
//Import Components
import { ListItem } from '../../components/UI/ListItem'
import { CreditModal } from '../../components/UI/CreditModal'
import { Text } from '../../components/UI/Text'
import { TitleItem } from '../../components/UI/TitleItem'
import { Header } from '../../components/header/Header'
import { NavigateLink } from '../../components/Layout/NavigateLink'
import { SearchBar } from '../../components/Layout/SearchBar'
import { Footer } from '../../components/footer/Footer'
import { StockBlock } from '../home/Layout/StockBlock'
import { Advertising } from '../home/Layout/Advertising'
//Import Layout Components
import { ScrollTop } from '../../components/Layout/ScrollTop'
//Import Custom Hook
import { useToggle } from '../../hooks/useToggle'
//Import Icons
import { GiShoppingCart } from 'react-icons/gi'
import { AiOutlineDelete } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { FaOpencart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { productActions } from '../../store/productSlice'

const Busket = () => {
	const dispatch = useDispatch()
	const { basket } = useSelector((state) => state.product)
	const [showModal, toggleShowModal] = useToggle(false)
	// const [basketShow, setBasketShow] = useToggle(false)
	const logoImgAdvertising = (
		<img style={{ width: '250px' }} src={Logo} alt='' />
	)
	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('basket'))
		dispatch(productActions.getItemLocalStorage(saved))
		console.log(saved)
	}, [])
	console.log(basket)

	return (
		<>
			<Header />
			<ScrollTop />
			<SearchBar />
			<NavigateLink logoImgAdvertising={logoImgAdvertising} />
			{basket.map((productInCart) => (
				<WrapperDesk key={productInCart.id}>
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
								<img src={productInCart.image} alt='' />
								<div>
									<ListItem>{productInCart.title}</ListItem>
									<Text>{productInCart.categorie}</Text>
								</div>
							</AboutFood>
							<WrapperCounter>
								<p>$ {productInCart.price}</p>
								<AmountProductsDiv>x2</AmountProductsDiv>
								<TiDeleteOutline
									cursor='pointer'
									fontSize='35px'
								/>
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
							<TitleItem> $ {productInCart.price}</TitleItem>
							<ButtonCheckout onClick={toggleShowModal}>
								Checkout Order <FaOpencart fontSize='20px' />
							</ButtonCheckout>
							{showModal ? <CreditModal /> : ''}
						</WrapperTotal>
					</DeskFooter>
				</WrapperDesk>
			))}
			<StockBlock />
			<Advertising />
			<Footer />
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
		width: 80px;
		height: 80px;
		margin: 8px;
	}
`
const AmountProductsDiv = styled.div`
	border: 1px solid #555555;
	border-radius: 4px;
	padding: 5px;
	margin-right: 5px;
	font-family: 'Rubik', sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 120%;
	letter-spacing: 0.005em;
	color: #555555;
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
	padding: 5px;
`
const WrapperTotal = styled.div`
	display: flex;
	align-items: center;
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
const ButtonCheckout = styled.button`
	display: flex;
	width: 130px;
	justify-content: center;
	align-items: center;
	padding: 8px 3px;
	margin-left: 10px;
	border-radius: 4px;
	border: none;
	background: #7ac751;
	font-family: 'Rubik', sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 120%;
	letter-spacing: 0.005em;
	color: #fff;
	cursor: pointer;
	&:hover {
		opacity: 0.9;
	}
`

export default Busket
