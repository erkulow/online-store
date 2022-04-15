import React, { useEffect } from 'react'
import { Header } from '../../components/header/Header'
import { SearchBar } from '../../components/searchBar/SearchBar'
import { NavLink } from '../../components/Layout/NavLink'
import { StockBlock } from './Layout/StockBlock'
import { Carousel } from './Layout/Carousel'
import { Trending } from './Layout/Trending'
import { Advertising } from './Layout/Advertising'
import { Footer } from '../../components/footer/Footer'
import { AllCollections } from './Layout/AllCollections'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/dataSlice'
import OurProduct from './Layout/OurProduct'
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

	return (
		<>
			<Header />
			<SearchBar />
			<NavLink />
			<AllCollections />
			<StockBlock />
			<Carousel />
			<Trending />
			<Advertising />
			<OurProduct />
			<Carousel />
			<Footer />
		</>
	)
}
export default Home
