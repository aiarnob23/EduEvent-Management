import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Membership = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <div className="bg-[#142a4f]">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

                <div data-aos="fade-down" className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-slate-300 uppercase rounded-full bg-teal-accent-400">
                            Our Membership Offers
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-400 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">  Empower</span>
                        </span>{' '}
                        Your Event Journey with Membership Benefits
                    </h2>
                    <p className="text-base text-gray-300 md:text-lg">
                        Welcome to our exclusive educational event management community! With your membership card, you gain access to various discount opportunities.
                    </p>
                </div>

                <div data-aos="flip-left" className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
                    <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded-lg  shadow-sm sm:items-center hover:shadow">
                        <div className="text-center">
                            <div className="text-lg font-semibold">Newbie Membership</div>
                            <div className="flex items-center justify-center mt-2">
                                <div className="mr-1 text-5xl font-bold">Free</div>
                                <div className="flex items-center justify-center mt-2">
                                    <div className="text-gray-700">/mo</div>
                                </div>
                            </div>
                            <div className="mt-2 space-y-3">
                                <div className="text-gray-700">Special Gift</div>
                                <div className="text-gray-700">Authentic Plans</div>
                                <div className="text-gray-700">Limited resources</div>
                            </div>
                        </div>
                        <div>
                            <button
                                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                            >
                                Start for free
                            </button>
                            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                                Upgrade to access premium features
                            </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-[#d9f2ea] border rounded-lg shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
                        <div className="text-center">
                            <div className="text-lg font-semibold">Premium Membership</div>
                            <div className="flex items-center justify-center mt-2">
                                <div className="mr-1 text-5xl font-bold">$38</div>
                                <div className="text-gray-700">/ yr</div>
                            </div>
                            <div className="mt-2 space-y-3">
                                <div className="text-gray-700">Unlimited plans access</div>
                                <div className="text-gray-700">Customized Lighting</div>
                                <div className="text-gray-700">Exclusive equipments</div>
                            </div>
                        </div>
                        <div>
                            <button
                                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                            >
                                Be premium
                            </button>
                            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                                Elevate your event management
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-8 bg-[rgb(248,249,232)] transition-shadow duration-300 rounded-lg border  shadow-sm sm:items-center hover:shadow">
                        <div className="text-center">
                            <div className="text-lg font-semibold">Enterprise Membership</div>
                            <div className="flex items-center justify-center mt-2">
                                <div className="mr-1 text-5xl font-bold">$78</div>
                                <div className="text-gray-700">/ yr</div>
                            </div>
                            <div className="mt-2 space-y-3">
                                <div className="text-gray-700">Customized event solutions</div>
                                <div className="text-gray-700">Priority support</div>
                                <div className="text-gray-700">Touch with Decorators</div>
                            </div>
                        </div>
                        <div>
                            <a
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                            >
                                Join Enterprise
                            </a>
                            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                                Know the brilliant agency
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;