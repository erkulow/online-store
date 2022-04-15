import React from 'react'
import styled from 'styled-components'
import LogoImg from '../../assets/Logo.png'
import { FaOpencart } from 'react-icons/fa'
import { AiOutlineBell } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'

export const SearchBar = () => {
	return (
		<StyledSearchBlock>
			<Logo>
				<img src={LogoImg} alt='' />
			</Logo>
			<Search>
				<input type='text' />
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
		display: flex;
		align-items: center;
		justify-content: center;
	}
`
const Icons = styled.div`
	display: flex;
	justify-content: space-around;
`
