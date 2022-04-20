import React from 'react'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { NavigateLink } from '../../components/Layout/NavigateLink'
import { SearchBar } from '../../components/Layout/SearchBar'
const Contact = () => {
   return (
      <>
         <Header />
         <SearchBar />
         <NavigateLink />
         <Footer />
      </>
   )
}
export default Contact
