import React from 'react'
import styled from 'styled-components'
import Header from '../../components/header/Header'
import SearchBar from '../../components/searchBar/SearchBar'
import Baner from '../../assets/Baner.png'
import NavLink from './Layout/NavLink'
import StockBlock from './Layout/StockBlock'
import { CarouselImg } from './Layout/Carousel'
import Trending from './Layout/Trending'
import Advertising from './Layout/Advertising'

const Home = () => {
	return (
		<>
			<Header />
			<SearchBar />
			<NavLink />
			<Container>
				<CollectionsBlock>
					<ul>
						<li>All</li>
						<li>New Arrivals</li>
						<li>Hot Sale</li>
						<li>Furniture</li>
						<li>Amrature</li>
						<li>Tabble</li>
						<li>Chair</li>
						<li>Sofa</li>
						<li>Mirrors</li>
						<li>Stools</li>
					</ul>
				</CollectionsBlock>
				<Wrapperimg>
					<img src={Baner} alt='' />
				</Wrapperimg>
			</Container>
			<StockBlock />
			<CarouselImg />
			<Trending />
			<Advertising />
		</>
	)
}
const Container = styled.div`
	width: 1200px;
	margin: 0 auto;
	display: flex;
`
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
		}
	}
`
const Wrapperimg = styled.div`
	width: fit-content;
	height: fit-content;
	img {
		width: 940px;
		margin: 10px 0 0 10px;
	}
`
export default Home
