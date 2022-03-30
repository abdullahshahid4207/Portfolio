import React from 'react'
import CarouselNav from '../components/CarouselNav';
import Navbar from '../components/Navbar';
import Portfolio from './Portfolio';

const Home = () => {
    return (
        <>
            <div>
                <Navbar href1='#portfolio' />
            </div>
            <div>
                <CarouselNav />
            </div>
            <div id='portfolio'>
                <Portfolio />
            </div>
        </>
    )
}

export default Home;