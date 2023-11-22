import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const location = useLocation();
    const [logInError, setLogInError] = useState('');
    const navigate = useNavigate();
    const { userLogin, createUserWithGoogle } = useContext(AuthContext);

    const notifySuccess = () => toast.success('Successfully Logged in.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const notifyFailure = () => toast.error('Having a problem to log in ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const handleLoginWithGoogle = () => {
        setLogInError(' ');

        createUserWithGoogle()
            .then(() => {
                navigate(location?.state ? location.state : '/');
                notifySuccess();
            })
            .catch(error => {
                setLogInError(error.message);
                notifyFailure();
            });
    }

    const handleLogin = e => {
        e.preventDefault();
        setLogInError(' ');
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        userLogin(email, password)
            .then(() => {
                notifySuccess();
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                setLogInError(error.message);
                notifyFailure();
            });
    }

    return (
        <div className="bg-gradient-to-b to-[#878dde]  from-[rgba(157,157,173,0.69)]">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold my-5 ">Login Please!</h1>
                    </div>
                    <div className="card flex-shrink-0 min-w-[400px] shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    name="email"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    name="password"
                                    required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-2xl text-[#491d53] font-bold bg-[#ddace8] ">Login</button>
                            </div>
                        </form>
                        {
                            logInError && (<p className="text-red-400 mx-1 text-bold text-xl text-center">{logInError}</p>)
                        }
                        <div className="flex justify-center text-xl mb-2">
                            <h5 className="text-2xl">or</h5>
                        </div>
                        <div className="flex justify-center mb-4">
                            <button onClick={handleLoginWithGoogle} className="py-3 btn bg-[#1F4172] text-white px-4 text-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                                    <path
                                        d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z"
                                    />
                                </svg>
                                Continue with Google
                            </button>
                        </div>
                        <hr />
                        <p className="text-center mt-3 mb-6 text-xl font-semibold">Do not have an accout? <Link className="font-bold text-2xl text-blue-700" to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;