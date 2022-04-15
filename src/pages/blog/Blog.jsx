import React from 'react'
import styled from 'styled-components'
import { Header } from '../../components/header/Header'
import { NavLink } from '../../components/Layout/NavLink'
import { SearchBar } from '../../components/searchBar/SearchBar'
import { TitleItem } from '../../components/UI/TitleItem'
const Blog = () => {
	return (
		<>
			<Header />
			<SearchBar />
			<NavLink />
			<WrapperBlog>
				<TitleItem>Basket</TitleItem>
			</WrapperBlog>
		</>
	)
}
const WrapperBlog = styled.div``
export default Blog
