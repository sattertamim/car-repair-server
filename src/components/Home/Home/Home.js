import React from 'react';
import Aboutus from '../Aboutus/Aboutus';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Headermain from '../Headermain/Headermain';
import Packages from '../Packages/Packages';
import Service from '../Services/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Headermain></Headermain>
            <Aboutus></Aboutus>
            <Service></Service>
            <Packages></Packages>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;