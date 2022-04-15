import React, { useEffect } from 'react'
import img1 from '../../../assets/cor/img1.jpg'
import img2 from '../../../assets/cor/img2.jpg'
import img3 from '../../../assets/cor/img3.jpg'
import img4 from '../../../assets/cor/img4.jpg'
import styled from 'styled-components'

export const Carousel = () => {
	return (
		<>
			<SlideShowContainer>
				<SlideFade>
					<img src={img1} alt='' />
					<SlideText>Text</SlideText>
				</SlideFade>
				{/* <SlideFade>
					<img src={img2} alt='' />
					<SlideText>Text</SlideText>
				</SlideFade>
				<SlideFade>
					<img src={img3} alt='' />
					<SlideText>Text</SlideText>
				</SlideFade>
				<SlideFade>
					<img src={img4} alt='' />
					<SlideText>Text</SlideText>
				</SlideFade> */}
			</SlideShowContainer>
			<br />
			<WrapperCurrentSlide>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</WrapperCurrentSlide>
		</>
	)
}
const SlideShowContainer = styled.div`
	width: 1200px;
	height: auto;
	margin: 0 auto;
	margin-top: 100px;
`
const SlideFade = styled.div`
	img {
		width: 1200px;
	}
`
const SlideText = styled.div`
	/* position: absolute; */
	top: 0;
`
const WrapperCurrentSlide = styled.div`
	/* span {
		cursor: pointer;
		height: 13px;
		width: 13px;
		margin: 0 2px;
		background: #bbb;
		border-radius: 50%;
		display: inline-block;
		transition: background-color 0.6s ease;
		.active,
		&:hover {
			background-color: #717171;
		}
		.fade {
			-webkit-animation-name: fade;
			-webkit-animation-duration: 1.5s;
			animation-name: fade;
			animation-duration: 1.5s;
		}
		@keyframes fade {
			from {
				opacity: 4;
			}
			to {
				opacity: 1;
			}
		}
		@keyframes fade {
			from {
				opacity: 4;
			}
			to {
				opacity: 1;
			}
		}
	} */
`
