import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoadingSpiner } from '../components/UI/LoadingSpiner'
import { ROUTES } from '../utils/constants/routes'
const Home = React.lazy(() => import('../pages/home/Home'))
const Basket = React.lazy(() => import('../pages/basket/Basket'))
const AllCollections = React.lazy(() =>
   import('../pages/allCollections/AllCollections')
)
const About = React.lazy(() => import('../pages/about/About'))
const Contact = React.lazy(() => import('../pages/contacts/Contact'))
const NotFoundPage = React.lazy(() =>
   import('../pages/notFoundPage/NotFoundPage')
)
const NewCredit = React.lazy(() => import('../pages/creditCardPage/NewCredit'))

export const AppRoutes = () => {
   return (
      <Suspense fallback={<LoadingSpiner />}>
         <Routes>
            <Route path={ROUTES.HOME.path} element={<Home />} />
            <Route
               path={ROUTES.AllCOLLECTIONS.path}
               element={<AllCollections />}
            />
            <Route path={ROUTES.BASKET.path} element={<Basket />} />
            <Route path={ROUTES.ABOUT.path} element={<About />} />
            <Route path={ROUTES.CONTACT_US.path} element={<Contact />} />
            <Route path={ROUTES.CREDIT_CARD.path} element={<NewCredit />} />
            <Route
               path={ROUTES.NOT_FOUND_PAGE.path}
               element={<NotFoundPage />}
            />
         </Routes>
      </Suspense>
   )
}
