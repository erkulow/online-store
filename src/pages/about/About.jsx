import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/img/Logo.png'
import { ListItem } from '../../components/UI/ListItem'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { Text } from '../../components/UI/Text'
import { SearchBar } from '../../components/Layout/SearchBar'
import { NavigateLink } from '../../components/Layout/NavigateLink'
const DataAboutWeb = [
   { id: 1, title: 'URL', text: 'http://localhost:3000/about' },
   { id: 2, title: 'Commercial', text: 'yes' },
   { id: 3, title: 'Languages', text: 'English, Russian,' },
   { id: 4, title: 'Programming language', text: 'Java Script' },
   { id: 5, title: 'Server location', text: 'Bishkek' },
   { id: 6, title: 'Author', text: 'erkulov' },
]
const About = () => {
   const logoImgAdvertising = (
      <img style={{ width: '250px' }} src={Logo} alt="" />
   )
   return (
      <>
         <Header />
         <SearchBar />
         <NavigateLink logoImgAdvertising={logoImgAdvertising} />
         <Wrapper>
            <br />
            <WrapperTexts>
               <ListItem>About</ListItem>
               <Text>
                  FurniKing — глобальная виртуальная торговая площадка,
                  предоставляющая возможность покупать товары производителей из
                  КНР, а также России, Европы, Турции и других стран. Товары на
                  площадке продаются в розницу и мелким оптом (в отличие от
                  оптовой Alibaba). Платформа не работает в КНР — там её
                  заменяет Taobao. FurniKing в настоящее время доступен на
                  русском, английском, испанском, нидерландском, французском,
                  итальянском, польском, арабском и португальском языках
                  (информация о товарах автоматически переводится на разные
                  языки). Клиенты вне границ стран для этих языков автоматически
                  обслуживаются на английской версии сайта. Сайт занимает 32-е
                  место в списке самых посещаемых веб-ресурсов в мире, по версии
                  Alexa[2].
               </Text>
               <br />
               <ListItem>History</ListItem>
               <Text>
                  FurniKing - started in 2010 as a platform for selling Chinese
                  goods to other countries. [3] . At first, this site worked in
                  the field of B2B for buying and selling. Since then, the
                  portal has expanded into B2C , C2C , cloud computing and
                  payment services . Initially, FurniKing specialized in selling
                  goods only from Chinese sellers. Since November 2018, Turkish
                  brands from the Trendyol platform, which was acquired by
                  Alibaba [4] , have appeared in the FurniKing assortment .
                  FurniKing is engaged in localization and business development
                  outside of China. In 2019, the company opened its largest
                  store in one of the shopping centers in Barcelona [5] .
               </Text>
               <br />
               <ListItem>Owners and management </ListItem>
               <Text>
                  The platform is owned by Alibaba Group , which also owns such
                  popular Chinese resources as Alibaba.com , Taobao.com and
                  others. Since September 2019, FurniKing in Russia has been a
                  joint venture between Russian shareholders and Alibaba Group,
                  which is being developed by Alibaba Group, VK , Megafon and
                  the Russian Direct Investment Fund . In Russia, the company is
                  led by two CEOs - Dmitry Sergeev (member of the board of
                  directors of VK) and Liu Wei from Alibaba Group [6] . In
                  August 2021, the telecom operator Megafon (company) , 100%
                  owned by Alisher Usmanov's USM structures , sold its 24.3%
                  stake in the FurniKing Russia joint venture to USM
                  International as a result of the exercise of options on this
                  transaction, the amount of which was not disclosed, by the
                  company USM Investment [7] . In 2020, the number of Russian
                  sellers increased by 7 times, and the sale of bulky goods grew
                  up to 350% in certain categories [ source not specified 247
                  days ]
               </Text>
               <br />
               <ListItem>FurniKing in the Russian Federation </ListItem>
               <Text>
                  In January 2017, FurniKing was the most popular online store
                  in Russia , with an audience of 22.194 million [8] . In
                  November 2019, the number of unique FurniKing users in Russia
                  reached 24.9 million people per month, which is 30% more than
                  in 2018 [9] ; at the end of 2020, the monthly audience of
                  active users reached 29.1 million people [10] . In Russia,
                  FurniKing presents goods from abroad, as well as goods from
                  Russian and international brands ( Samsung , Xiaomi , VIVO ,
                  Bosch ), which open their stores and deliver from a Russian
                  warehouse. Sales of local (Russian) sellers FurniKing Russia
                  in 2019 accounted for 15% of the company's total turnover in
                  Russia (in total, more than 10 thousand sellers are registered
                  on Russion [11] - half of which are representatives of small
                  and medium-sized businesses [12]). Over the year, the number
                  of Russian sellers on the platform increased by 7 times and by
                  October 2020 amounted to 22 thousand, the range of their goods
                  on the platform reached 3.5 million items; sales of local
                  sellers already account for about 20% of the total turnover
                  [13] . Russia is the largest market for FurniKing in the world
                  [14] . The marketplace says it gives regional shoppers a
                  choice, and lowering the duty-free threshold could bring
                  customers back to clothing markets [15] . FurniKing Russia
                  stands for the development of small and medium-sized
                  businesses in the regions and works in the same way that
                  interaction with business in China is developing [16] . At the
                  same time, FurniKing, along with other foreign online stores,
                  is a serious competitor for Russian sites that sell the same
                  or similar goods at high costs and margins. Until recently, in
                  addition, foreign sites did not pay Russian taxes and duties ,
                  which gave them an even greater commercial advantage over
                  domestic players [17] . Compared to domestic players,
                  FurniKing is far behind in terms of delivery, but there is
                  already a solution for this - opening domestic Russian
                  infrastructure for some goods with delivery from 1-2 days [18]
                  . Long delivery is due to the fact that orders arrive first at
                  the Russian Post distribution center , then they are sorted
                  and cleared through customs, and then sent for delivery.
                  FurniKing aims to arrange the processing and delivery of
                  orders from abroad to major cities in 10 days. For purchases
                  on Tmall , local delivery is available, like most other
                  companies, with average delivery times of 1-2 days. For
                  several years, FurniKing delivery times have almost halved
                  [15]and since the end of 2019, the average delivery time for
                  goods from China has halved to 15 days; goods from the Russian
                  Federation are delivered on average in 4.5 days. Since 2015,
                  the service has limited the ability to purchase goods for
                  users residing in the territory of the Republic of Crimea [19]
                  . "FurniKing Russia" from June 1 began exporting goods from
                  Russian sellers to European countries, in particular Spain,
                  France, Italy. The first category of products available for
                  purchase by overseas customers were children's products and
                  toys from several brands, such as Maskbro wooden toys, Bossa
                  Nova children's clothing and Lucky Child.
               </Text>
            </WrapperTexts>
            <CardInfo>
               <LogoTitle>
                  <ListItem>FurniKing</ListItem>
               </LogoTitle>
               <br />
               <img src={Logo} alt="" />
               {DataAboutWeb.map((el) => (
                  <ColumnText key={el.id}>
                     <ListItem>
                        <b>{el.title}</b>
                     </ListItem>
                     <ListItem>{el.text}</ListItem>
                  </ColumnText>
               ))}
            </CardInfo>
         </Wrapper>
         <Footer />
      </>
   )
}
const Wrapper = styled.div`
   width: 1200px;
   margin: 0 auto;
   margin-top: 50px;
   margin-bottom: 100px;
   display: flex;
`
const CardInfo = styled.div`
   padding: 5px 10px;
   img {
      width: 250px;
   }
`
const LogoTitle = styled.div`
   background: silver;
   width: 100%;
   text-align: center;
   padding: 3px 5px;
`
const ColumnText = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 15px 0 15px 0;
`
const WrapperTexts = styled.div`
   display: flex;
   flex-direction: column;
`
export default About
