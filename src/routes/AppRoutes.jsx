import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoadingSpiner } from '../components/UI/LoadingSpiner'
import Blog from '../pages/blog/Blog'
import { ROUTES } from '../utils/constants/routes'

const Home = React.lazy(() => import('../pages/home/Home'))
const NotFoundPage = React.lazy(() =>
	import('../pages/notFoundPage/NotFoundPage'),
)
const About = React.lazy(() => import('../pages/about/About'))
const Busket = React.lazy(() => import('../pages/basket/Busket'))

export const AppRoutes = () => {
	return (
		<Suspense fallback={<LoadingSpiner />}>
			<Routes>
				<Route path={ROUTES.HOME.path} element={<Home />} />
				<Route path={ROUTES.SHOP.path} element={<Busket />} />
				<Route path={ROUTES.ABOUT.path} element={<About />} />
				<Route path={ROUTES.BLOG.path} element={<Blog />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</Suspense>
	)
}
