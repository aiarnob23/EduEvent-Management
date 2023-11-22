
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

const Register = () => {
    const { createUser, createUserWithGoogle } = useContext(AuthContext);
    const [regError, setRegError] = useState('');

    const notifySuccess = () => toast.success('Registration is Successful.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const notifyFailure = () => toast.error('Registration is failed.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const handleRegisterWithGoogle = () => {
        setRegError(' ');
        createUserWithGoogle()
            .then(() => {
                notifySuccess();
            })
            .catch(error => {
                setRegError(error.message);
                notifyFailure();
            })
    }

    const handleRegister = e => {
        e.preventDefault();
        setRegError(' ');
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        if (password.length < 6) {
            setRegError('Password should be at least 6 characters');
            return;
        }
        else if (!(/[A-Z]/.test(password))) {
            setRegError('Password should have at least one upper case character');
            return;
        }
        else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            setRegError('Password should contain at least one special character');
            return;
        }

        createUser(email, password)
            .then(() => {
                notifySuccess();
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    window.location.reload();
                }).catch(() => {
                });
            })
            .catch(error => {
                setRegError(error.message);
                notifyFailure();
            })
    }

    return (
        <div className="bg-gradient-to-b from-[#9cdcd9]  to-[rgba(4,5,94,0.69)]">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold my-5 ">Register Here!</h1>
                    </div>
                    <div className="card flex-shrink-0 min-w-[400px] shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="input input-bordered"
                                    name="name"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                    name="photo"
                                    required />
                            </div>
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
                                <button className="btn text-2xl text-[#491d53] font-bold bg-[#bd98cd] ">Register</button>
                            </div>
                        </form>
                        {
                            regError && (<p className="text-red-400 mx-1 text-bold text-xl text-center">{regError}</p>)
                        }
                        <div className="flex justify-center text-xl mb-2">
                            <h5 className="text-2xl">or</h5>
                        </div>

                        <div className="flex justify-center mb-4">
                            <button onClick={handleRegisterWithGoogle} className="py-3 btn bg-[#1F4172] text-white px-4 text-[20px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                                    <path
                                        d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z"
                                    />
                                </svg>
                                Continue with Google
                            </button>
                        </div>

                        <hr />
                        <p className="text-center mt-3 mb-6 text-xl font-semibold">Already have an accout? <Link className="font-bold text-2xl text-blue-700" to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;