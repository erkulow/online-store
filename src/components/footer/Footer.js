/* eslint-disable import/no-duplicates */
import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/img/Logo.png'
import { Text } from '../UI/Text'
import { FaFacebookF } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa'
import { NOVIGATIONS_LINKS } from '../../utils/constants/routes'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
   function renderFooterLinks() {
      const linkList = NOVIGATIONS_LINKS.map(({ label, path }) => (
         <StyledNavLink key={path} to={path}>
            {label}
         </StyledNavLink>
      ))
      return <Nav style={{ listStyle: 'none' }}>{linkList}</Nav>
   }
   return (
      <WrapperFooter>
         <Wrapperinfo>
            <img src={Logo} alt="" />
            <br />
            <br />
            <Text>
               Funking is the a popular Ecommerce site. <br /> Lorem ipsum dolor
               sit amet, consectetur <br /> adipiscing elit, sed do eiusmod
               tempor
               <br />
            </Text>
            <br />
            <hr />
            <Text>erkulov26@gmail.com</Text>
         </Wrapperinfo>

         {renderFooterLinks()}
         <WrapperAppIcons>
            <FaFacebookF color="#555555" fontSize="25px" cursor="pointer" />
            <br />
            <FiTwitter color="#555555" fontSize="25px" cursor="pointer" />
            <br />
            <AiOutlineInstagram
               color="#555555"
               fontSize="25px"
               cursor="pointer"
            />
            <br />
            <FaPinterestP color="#555555" fontSize="25px" cursor="pointer" />
            <br />
         </WrapperAppIcons>
      </WrapperFooter>
   )
}
const WrapperFooter = styled.footer`
   width: 1200px;
   margin: 0 auto;
   display: flex;
   justify-content: space-around;
   align-items: center;
   margin-top: 50px;
   margin-bottom: 20px;
`
const Wrapperinfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
`
const WrapperAppIcons = styled.div`
   display: flex;
   flex-direction: column;
`

const StyledNavLink = styled(NavLink)`
   list-style: none;
   margin-left: 75px;
   font-family: 'Rubik';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #555555;
   text-decoration: none;
   cursor: pointer;
   margin-bottom: 15px;
   transition: 0.3s;
   position: relative;
   &:hover {
      color: #7ac751;
   }
   &::after {
      content: '';
      width: 0;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -1px;
      height: 2px;
      background-color: #7ac751;
      transition: width 0.4s ease-in-out;
   }
   &:hover::after {
      width: 100%;
   }
`
const Nav = styled.ul`
   display: flex;
   flex-direction: column;
`
