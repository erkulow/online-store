import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineBell } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSelector } from 'react-redux'

export const SearchBar = () => {
	const { products } = useSelector((state) => state.product)
	const [filteredProducts, setFilteredProducts] = useState(products)
	const filteredHandler = (event) => {
		let filter = products.filter((product) =>
			product.title.includes(event.target.value),
		)
		setFilteredProducts(filter)
		console.log(filteredProducts)
	}
	return (
		<StyledSearchBlock>
			<Logo>
				<p>FK</p>
			</Logo>
			<Search>
				<input onChange={filteredHandler} type='text' />
				<button>
					<AiOutlineSearch fontSize='30px' color='white' />
				</button>
			</Search>
			<Icons>
				<AiOutlineBell fontSize='30px' />
				<AiOutlineUser fontSize='30px' />
			</Icons>
		</StyledSearchBlock>
	)
}
const StyledSearchBlock = styled.div`
	width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 21px;
	margin-top: 55px;
`
const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 3px dotted #7ac751;
	border-radius: 50%;
	padding: 15px;
	background: #f7f8fa;
	p {
		color: #85b839;
		font-family: 'Mulish', sans-serif;
		font-style: normal;
		font-weight: 700;
		font-size: 36px;
		line-height: 45px;
		margin: 0 auto;
	}
`
const Search = styled.div`
	width: 500px;
	height: 45px;
	border: 2px solid #7ac751;
	border-radius: 8px;
	display: flex;
	justify-content: space-between;
	padding: 0;
	input {
		width: 450px;
		outline: none;
		border: none;
		border-radius: 8px;
		padding: 0 10px;
		font-size: 18px;
	}
	button {
		width: 50px;
		background: #7ac751;
		border-radius: 0px 2px 2px 0px;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`
const Icons = styled.div`
	display: flex;
	justify-content: space-around;
`
