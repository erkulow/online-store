import React from 'react'
import styled from 'styled-components'
import { Header } from '../../components/header/Header'
import { NavigateLink } from '../../components/Layout/NavigateLink'
import { SearchBar } from '../../components/Layout/SearchBar'
import { AiOutlineAlignRight } from 'react-icons/ai'
import { ContentBaner } from '../home/Layout/ContentBaner'
import { StockBlock } from '../home/Layout/StockBlock'
import { Trending } from '../home/Layout/Trending'
import { Advertising } from '../home/Layout/Advertising'
import { Footer } from '../../components/footer/Footer'
import { BanerImg1 } from '../../components/UI/Baner'
import { Products } from './Layout/Products'
import { Pagination } from '../../components/UI/Pagination'
import { useDispatch } from 'react-redux'
import { getAsyncProducts } from '../../store/productSlice'
import { useSearchParams } from 'react-router-dom'

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
