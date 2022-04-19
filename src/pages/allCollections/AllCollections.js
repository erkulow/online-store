import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
//Import Store
import { getAsyncProducts } from '../../store/productSlice'
//Import Components
import { Header } from '../../components/header/Header'
import { NavigateLink } from '../../components/Layout/NavigateLink'
import { SearchBar } from '../../components/Layout/SearchBar'
import { Footer } from '../../components/footer/Footer'
import { BanerImg1 } from '../../components/UI/Baner'
import { Pagination } from '../../components/UI/Pagination'
//Import Layout Components
import { Products } from './Layout/Products'
import { ScrollTop } from '../../components/Layout/ScrollTop'
import { ContentBaner } from '../home/Layout/ContentBaner'
import { StockBlock } from '../home/Layout/StockBlock'
import { Trending } from '../../components/Layout/Trending'
import { Advertising } from '../home/Layout/Advertising'
//Import Icons
import { AiOutlineAlignRight } from 'react-icons/ai'

const Blog = () => {
	const dispatch = useDispatch()
	const [searchParams, setSearchParams] = useSearchParams()
	const allcollections = (
		<AllCollectionBlock>
			<AiOutlineAlignRight color='white' fontSize='20px' />
			<p>ALL COLLECTIONS</p>
		</AllCollectionBlock>
	)
	const pageChangeHandler = (selectedPage) => {
		setSearchParams({ page: selectedPage })
		dispatch(getAsyncProducts(selectedPage))
	}

	return (
		<>
			<Header />
			<ScrollTop />
			<SearchBar />
			<NavigateLink allcollections={allcollections} />
			<ContentBaner />
			<StockBlock />
			<Trending />
			<Advertising />
			<BanerImg1 />
			<Products />
			<PaginationContainer>
				<Pagination onPageChange={pageChangeHandler} />
			</PaginationContainer>
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
const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
`
export default Blog
