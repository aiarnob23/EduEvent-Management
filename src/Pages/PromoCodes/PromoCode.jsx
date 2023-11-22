import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const PromoCode = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="mx-2 md:mx-6 lg:mx-auto">

            <section data-aos="fade-left" className="bg-[#FF6195] rounded-lg dark:text-gray-100 my-4">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                        Unlock <span className="text-[#000]">SPECIAL SAVINGS</span> now
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg text-gray-300">
                        Are you planning a memorable event? Look no further! We have exclusive offers to make your event extraordinary without breaking the bank.
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-[#fff] dark:text-gray-900 hover:text-3xl">
                            Get Coupon
                        </button>
                        <button className="px-8 py-3 m-2 text-lg border rounded bg-[#fff] dark:border-gray-700 text-black  ">
                            <span className="text-3xl font-bold">5%</span> DISCOUNT
                        </button>
                    </div>
                </div>
            </section>
            <section data-aos="fade-right" className="bg-[#0a1447] rounded-lg dark:text-gray-100 my-4">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                        Limited Time <span className="dark:text-violet-400">DISCOUNT</span>
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">
                        Do not miss out on our limited-time event management discounts. Whether it is a corporate gathering, wedding, or any special occasion, you can save big on our expert services.
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-white  dark:text-gray-900 hover:text-3xl">
                            Get Coupon
                        </button>
                        <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-300  ">
                            <span className="text-3xl font-bold">10%</span> DISCOUNT
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PromoCode;
