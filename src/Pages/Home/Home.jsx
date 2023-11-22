import { useEffect, useState } from 'react';
import ServicesCards from './ServicesCards';
import Footer from '../Footer/Footer';
import Aos from "aos"
import 'aos/dist/aos.css'
import Carousel from './Carousel';
import Banner from './Banner';
import SpecialPackage from './SpecialPackage';


const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const [services, serServices] = useState([]);
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => serServices(data));

    }, [])
    return (
        <div className='mx-2 md:mx-4 lg:mx-auto'>

            <header data-aos="fade-right" >
                <Banner></Banner>
            </header>

            <main className='mt-32 '>
                {/* Our services */}
                <div>
                    <h2 data-aos="fade-left" className='text-4xl font-bold text-[#090B42] text-center mb-10'>Our Services:</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-3  gap-4'>
                        {
                            services.map(card => <ServicesCards
                                key={card.id}
                                card={card}
                            ></ServicesCards>)
                        }
                    </div>
                </div>

                {/* why choose us */}
                <div className='mt-28 mb-32'>
                    <h2 data-aos="fade-right" className='text-center text-4xl mb-10 font-bold'>Why choose us</h2>
                    <Carousel></Carousel>
                </div>

                {/* special package section */}
                <div>
                    <SpecialPackage></SpecialPackage>
                </div>
            </main>

            <footer className='mt-36'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;