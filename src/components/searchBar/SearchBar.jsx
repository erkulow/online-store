import React from 'react'
import styled from 'styled-components'
import LogoImg from '../../assets/Logo.png'
import { GrShop } from 'react-icons/gr'
import { AiOutlineBell } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'

const index = () => {
	return (
		<SearchBlock>
			<Logo>
				<img src={LogoImg} alt='' />
			</Logo>
			<Search>
				<input type='text' />
				<button>
					<AiOutlineSearch color='white' />
				</button>
			</Search>
			<Icons>
				<GrShop fontSize='30px' />
				<AiOutlineBell fontSize='30px' />
				<AiOutlineUser fontSize='30px' />
			</Icons>
		</SearchBlock>
	)
}
const SearchBlock = styled.div`
	width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 21px;
`
const Logo = styled.div``
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
	}
`
const Icons = styled.div``
export default index
