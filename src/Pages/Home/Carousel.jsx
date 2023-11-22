import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react";
import drone from '../../assets/drone.jpg'
import best from '../../assets/best-price.jpg'
import expert from '../../assets/expert.jpg'
import innovation from '../../assets/innovation.jpg'
import support from '../../assets/support.jpg'

const Carousel = () => {
    useEffect(() => {
        Aos.init({ duration:2000 })
    }, [])
    return (
        <div className="relative h-full w-full flex gap-4 py-6 overflow-x-auto">
	<div data-aos="fade-down" className="h-48 flex flex-col justify-center bg-[#090B42] text-white items-center gap-5 aspect-video rounded-sm object-cover object-center"  >
      <h4 className="text-3xl font-semibold">24/7 Support</h4>
      <img className="h-[100px] rounded-lg" src={support} alt="" />
    </div>
	<div  data-aos="flip-right" className="h-48 flex flex-col justify-center bg-[#B5D7DC] text-[#090B42] items-center gap-5 aspect-video rounded-sm object-cover object-center"  >
      <h4 className="text-3xl font-semibold">Expert Event Handlers</h4>
      <img className="h-[100px] rounded-lg" src={expert} alt="" />
    </div>
	<div  data-aos="fade-up" className="h-48 flex flex-col justify-center bg-[#090B42] text-white items-center gap-5 aspect-video rounded-sm object-cover object-center"  >
      <h4 className="text-3xl font-semibold">Innovative Skills</h4>
      <img className="h-[100px] rounded-lg" src={innovation} alt="" />
    </div>
	<div  data-aos="flip-left" className="h-48 flex flex-col justify-center bg-[#B5D7DC] text-[#090B42] items-center gap-5 aspect-video rounded-sm object-cover object-center"  >
      <h4 className="text-3xl font-semibold">Digital Equipments</h4>
      <img className="h-[100px] rounded-lg" src={drone} alt="" />
    </div>
	<div data-aos="flip-up" className="h-48 flex flex-col justify-center bg-[#090B42] text-white items-center gap-5 aspect-video rounded-sm object-cover object-center"  >
      <h4 className="text-3xl  font-semibold">Affordable Price</h4>
      <img className="h-[100px] rounded-lg" src={best} alt="" />
    </div>
</div>
    );
};

export default Carousel;