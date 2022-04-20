import React from 'react'
import styled from 'styled-components'
import { NOVIGATIONS_LINKS } from '../../utils/constants/routes'
import { NavLink } from 'react-router-dom'
export const NavigateLink = ({ allcollections, logoImgAdvertising }) => {
   function renderFooterLinks() {
      const linkList = NOVIGATIONS_LINKS.map(({ label, path }) => (
         <StyledNavLink key={path} to={path}>
            {label}
         </StyledNavLink>
      ))

      return <Nav style={{ listStyle: 'none' }}>{linkList}</Nav>
   }
   return (
      <BackgroundNav>
         <NavLinkBlock>
            {logoImgAdvertising}
            {allcollections}
            {renderFooterLinks()}
         </NavLinkBlock>
      </BackgroundNav>
   )
}
const BackgroundNav = styled.div`
   width: 100%;
   height: 70px;
   background: #f7f8fa;
   margin-top: 50px;
   display: flex;
   align-items: center;
`
const NavLinkBlock = styled.div`
   width: 1200px;
   margin: 0 auto;
   display: flex;
   justify-content: start;
   align-items: center;
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
   margin: 0;
   align-items: center;
`
