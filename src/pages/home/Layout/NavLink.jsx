import React from 'react'
import styled from 'styled-components'
import { AiOutlineAlignRight } from 'react-icons/ai'

const NavLink = () => {
	return (
		<BackgroundNav>
			<NavLinkBlock>
				<AllCollectionBlock>
					<AiOutlineAlignRight color='white' fontSize='20px' />
					<p>ALL COLLECTIONS</p>
				</AllCollectionBlock>
				<ul>
					<li>HOME</li>
					<li>SHOP</li>
					<li>BLOG</li>
					<li>ABOUT</li>
					<li>CONTACT US</li>
				</ul>
			</NavLinkBlock>
		</BackgroundNav>
	)
}
const BackgroundNav = styled.div`
	width: 100%;
	height: 60px;
	background: #f7f8fa;
	margin-top: 50px;
`
const NavLinkBlock = styled.div`
	width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: start;
	align-items: center;
	ul {
		display: flex;
		margin: 0;
		cursor: pointer;
		li {
			list-style: none;
			padding-left: 75px;
			font-family: 'Rubik';
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 17px;
			color: #555555;
		}
	}
`
const AllCollectionBlock = styled.div`
	width: 250px;
	height: 60px;
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
export default NavLink
