import React from 'react'
import styled from 'styled-components'

export const Pagination = ({ onPageChange }) => {
	const pages = [1, 2, 3, 4]

	const pageChangeHandler = (page) => {
		onPageChange(page)
	}

	return (
		<Container>
			{pages.map((page) => (
				<PageItem
					key={Math.random()}
					onClick={() => pageChangeHandler(page)}
				>
					{page}
				</PageItem>
			))}
		</Container>
	)
}
const Container = styled.div`
	display: flex;
`
const PageItem = styled.div`
	width: 30px;
	height: 20px;
	background: silver;
	color: white;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 10px;
`
