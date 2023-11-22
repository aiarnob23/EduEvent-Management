import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react";
import octo1 from '../../assets/october1.jpg'
import octo2 from '../../assets/october2.jpg'


const SpecialPackage = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <div>
                <h2 data-aos="zoom-out-up" className='text-4xl font-bold text-[#090B42] text-center mb-10'>October Special Package</h2>
            </div>
            <div className="grid  gap-7 ">
                <div className=" overflow-hidden  rounded-lg shadow-lg bg-[#090B42]">
                    <div className="px-4 py-2">
                        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">Event with Technology Support</h1>
                        <p className="mt-1 text-xl text-gray-300 dark:text-gray-400">Turning Visions into Vibrant Events with our Technology Support. Drones, VR are available with event management at a low cost</p>
                    </div>

                    <img className="object-cover w-full mt-2" src={octo1} alt="NIKE AIR" />

                    <div className="flex items-center justify-between px-4 py-2 bg-[#090B42]">
                        <h1 className="text-lg font-bold text-white">$150</h1>
                        <button className="px-2 py-1 text-xl font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">See details</button>
                    </div>
                </div>
                <div className=" overflow-hidden bg-[#090B42] rounded-lg shadow-lg ">
                    <div className="px-4 py-2">
                        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">Event with customized logistics</h1>
                        <p className="mt-1 text-xl text-gray-300 dark:text-gray-400">Creating Memorable Experiences through Expert Event Management with our october package of unlimited logistics support</p>
                    </div>

                    <img className="object-cover w-full mt-2" src={octo2} alt="NIKE AIR" />

                    <div className="flex items-center justify-between px-4 py-2 bg-[#090B42]">
                        <h1 className="text-lg font-bold text-white">$129</h1>
                        <button className="px-2 py-1 text-xl font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">See Details</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SpecialPackage;