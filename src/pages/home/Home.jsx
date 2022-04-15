import React, { useEffect } from 'react'
import Logo from '../../assets/img/Logo.png'
import { Header } from '../../components/header/Header'
import { SearchBar } from '../../components/Layout/SearchBar'
import { NavLink } from '../../components/Layout/NavLink'
import { StockBlock } from './Layout/StockBlock'
import { BanerImg1, BanerImg2 } from './Layout/Baner'
import { Trending } from './Layout/Trending'
import { Advertising } from './Layout/Advertising'
import { Footer } from '../../components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/productSlice'
import { OurProduct } from './Layout/OurProduct'
const Home = () => {
	const dispatch = useDispatch()
	const { products } = useSelector((state) => state.product)

	const convertToCategories = new Set(
		products.map((product) => product.category),
	)
	const categories = [...convertToCategories]
	console.log('====================================')
	console.log(categories)
	console.log('====================================')

	useEffect(() => {
		dispatch(getData())
	}, [])
	const logoImgAdvertising = (
		<img style={{ width: '250px' }} src={Logo} alt='' />
	)
	return (
		<>
			<Header />
			<SearchBar />
			<NavLink logoImgAdvertising={logoImgAdvertising} />
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
