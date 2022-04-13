import React from 'react'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import img1 from '../../../assets/cor/img1.jpg'
import img2 from '../../../assets/cor/img2.jpg'
import img3 from '../../../assets/cor/img3.jpg'
import img4 from '../../../assets/cor/img4.jpg'

import styled from 'styled-components'

export const StyledCarousel = styled(Carousel)`
	margin: 0 auto;
	width: 1200px;
	margin-top: 50px;
`
const contentStyle = {
	height: '700px',
	width: '1200px',
}
export const CarouselImg = () => {
	return (
		<StyledCarousel autoplay>
			<div>
				<img src={img1} style={contentStyle} alt='' />
			</div>
			<div>
				<img src={img2} style={contentStyle} alt='' />
			</div>
			<div>
				<img src={img3} style={contentStyle} alt='' />
			</div>
			<div>
				<img src={img4} style={contentStyle} alt='' />
			</div>
		</StyledCarousel>
	)
}
