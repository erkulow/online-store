import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Header } from '../../components/header/Header'
import { NavLink } from '../../components/Layout/NavLink'
import { SearchBar } from '../../components/Layout/SearchBar'
import { AiOutlineAlignRight } from 'react-icons/ai'
import { ContentBaner } from '../home/Layout/ContentBaner'
import { StockBlock } from '../home/Layout/StockBlock'
import { Trending } from '../home/Layout/Trending'
import { Advertising } from '../home/Layout/Advertising'
import { OurProduct } from '../home/Layout/OurProduct'
import { Footer } from '../../components/footer/Footer'
import { BanerImg1 } from '../home/Layout/Baner'
import { useDispatch } from 'react-redux'
import { getData } from '../../store/productSlice'

const Blog = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getData())
	}, [])
	const allcollections = (
		<AllCollectionBlock>
			<AiOutlineAlignRight color='white' fontSize='20px' />
			<p>ALL COLLECTIONS</p>
		</AllCollectionBlock>
	)
	return (
		<>
			<Header />
			<SearchBar />
			<NavLink allcollections={allcollections} />
			<ContentBaner />
			<StockBlock />
			<Trending />
			<Advertising />
			<OurProduct />
			<BanerImg1 />
			<Footer />
		</>
	)
}
const AllCollectionBlock = styled.div`
	width: 250px;
	height: 70px;
	background: #7ac751;
	display: flex;
	justify-content: center;
	align-items: center;
	p {
		font-family: 'Rubik';
		font-style: normal;
		font-weight: 400;
		font-size: 17px;
		line-height: 17px;
		color: #fff;
		margin: 0;
		padding-left: 5px;
	}
`
export default Blog
