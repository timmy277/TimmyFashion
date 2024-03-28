import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ListItem from "../../components/ListItem/ListItem";
import TopRatedProducts from "../../components/TopRatedProducts/TopRatedProducts";
import Banner from "../../components/Banner/Banner";
import Subscribe from "../../components/Subscribe/Subscribe";
import Testimonials from "../../components/Testimonials/Testimonials";
import Popup from "../../components/Popup/Popup";
import Items from "../../components/Item/Item";
const Home = (handleOrderPopup) => {
    return (
    <div>
        <Hero handleOrderPopup={handleOrderPopup} />
        <ListItem />
        <TopRatedProducts handleOrderPopup={handleOrderPopup} />
        <Banner />
        <Subscribe />
        <ListItem />
        <Testimonials />
        <Popup />
    </div>
    )
}

export default Home
