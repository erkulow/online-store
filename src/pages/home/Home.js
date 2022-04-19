import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
//Import Store
import { getAsyncProducts } from '../../store/productSlice'
//import IMG
import Logo from '../../assets/img/Logo.png'
//Import Components
import { Header } from '../../components/header/Header'
import { SearchBar } from '../../components/Layout/SearchBar'
import { NavigateLink } from '../../components/Layout/NavigateLink'
import { BanerImg1, BanerImg2 } from '../../components/UI/Baner'
import { Footer } from '../../components/footer/Footer'
import { ScrollTop } from '../../components/Layout/ScrollTop'
//Import Layout Components
import { StockBlock } from './Layout/StockBlock'
import { Trending } from '../../components/Layout/Trending'
import { Advertising } from './Layout/Advertising'
import { OurProduct } from './Layout/OurProduct'
// --------------------------------------------------
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
			<ScrollTop />
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
