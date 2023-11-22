import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Aos from "aos"
import 'aos/dist/aos.css'

const Navbar = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    const { user, UserLogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        UserLogOut()
            .then(result => console.log(result))
            .catch(error => console.log(error));
    }

    const navLinks = <>

        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/membership'>Membership</NavLink></li>
        <li><NavLink to='/promo'>Coupon</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>

    </>
    return (
        <div id="navs" data-aos="fade-down" className="mt-1 mb-10">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown dropdown-right">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost hidden lg:flex text-2xl font-bold normal-case text-[#090B42]">EduEvents</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="flex flex-col lg:flex-row lg:gap-2 ">
                                <div className="flex flex-col lg:flex-row lg:gap-1 items-center justify-center">
                                    {user.photoURL ? (<label tabIndex={0} className="btn  btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </label>) : ''}
                                    <p>{user.displayName ? user.displayName : ''}</p>
                                </div>
                                <button onClick={handleLogOut} className="btn lg:text-xl text-[#ffffff] bg-[#090B42]">Log Out</button>
                            </div>
                        </>
                            :
                            <Link to='/login' className="btn lg:text-xl text-[#ffffff] bg-[#090B42]">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;