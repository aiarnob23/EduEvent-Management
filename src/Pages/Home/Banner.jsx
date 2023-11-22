import banner from '../../assets/Banner.jpg'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='mt-20  lg:mt-14'>
            <div className="hero h-[500px] md:h-[800px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 data-aos="flip-up" className="mb-8 text-[#e3f5fb] text-4xl md:text-5xl leading-relaxed font-semibold">Experience the Difference: <br/><span className='text-[#ffffff] font-extrabold md:text-7xl'>Let Us Manage Your Event</span></h1>
                        <button className="btn md:text-2xl text-[#ffffff] bg-[#090B42]">Hire Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;