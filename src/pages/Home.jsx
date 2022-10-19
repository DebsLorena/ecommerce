import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories.jsx'
import Products from '../components/Products'
import Neswletter from '../components/Neswletter'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar/>
            <Slider />
            <Categories />
            <Products />
            <Neswletter />
            <Footer />
        </div>
    )
}

export default Home