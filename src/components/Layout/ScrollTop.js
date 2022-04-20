import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import upArrow from '../../assets/img/upArrow.png'
export const ScrollTop = () => {
   const scrollBtn = document.getElementById('scrollBtn')
   window.addEventListener('scroll', () => {
      if (
         document.body.scrollTop > 800 ||
         document.documentElement.scrollTop > 800
      ) {
         scrollBtn.style.display = 'block'
      } else if (document.body.scrollTop === 0) {
         scrollBtn.style.display = 'none'
      }
   })
   const topHandler = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }
   return ReactDOM.createPortal(
      <Scroll id="scrollBtn" onClick={topHandler}>
         <img src={upArrow} alt="" />
      </Scroll>,
      document.getElementById('scrollBtn')
   )
}
const Scroll = styled.div`
   position: fixed;
   right: 50px;
   bottom: 40px;
   z-index: 100;
   width: 50px;
   height: 50px;
   cursor: pointer;
   border-radius: 50%;
   img {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
   }
   -webkit-animation-name: slideInUp;
   animation-name: slideInUp;
   -webkit-animation-duration: 1s;
   animation-duration: 1s;
   -webkit-animation-fill-mode: both;
   animation-fill-mode: both;
   @-webkit-keyframes slideInUp {
      0% {
         -webkit-transform: translateY(100%);
         transform: translateY(100%);
         visibility: visible;
      }
      100% {
         -webkit-transform: translateY(0);
         transform: translateY(0);
      }
   }
   @keyframes slideInUp {
      0% {
         -webkit-transform: translateY(100%);
         transform: translateY(100%);
         visibility: visible;
      }
      100% {
         -webkit-transform: translateY(0);
         transform: translateY(0);
      }
   }
`
