import React, { useEffect } from 'react'
import Logo from '../../assets/img/Logo.png'
import { Header } from '../../components/header/Header'
import { SearchBar } from '../../components/Layout/SearchBar'
import { NavigateLink } from '../../components/Layout/NavigateLink'
import { StockBlock } from './Layout/StockBlock'
import { BanerImg1, BanerImg2 } from '../../components/UI/Baner'
import { Trending } from './Layout/Trending'
import { Advertising } from './Layout/Advertising'
import { Footer } from '../../components/footer/Footer'
import { useDispatch } from 'react-redux'
import { getAsyncProducts } from '../../store/productSlice'
import { OurProduct } from './Layout/OurProduct'
const Home = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAsyncProducts())
	}, [])
	const logoImgAdvertising = (
		<img style={{ width: '250px' }} src={Logo} alt='' />
	)
	return (
		<>
			<Header />
			<SearchBar />
			<NavigateLink logoImgAdvertising={logoImgAdvertising} />
			<Trending />
			<StockBlock />
			<BanerImg1 />
			<Advertising />
			<OurProduct />
			<BanerImg2 />
			<Footer />
		</>
	)
}
export default Home
