import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {

    const {loginWithEmailPass} = useContext(AuthContext);

    const handelLogin = e => {
        e.preventDefault()

        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        loginWithEmailPass(email,password)
            .then(result =>{
                const user = result.user;
                console.log(user)
            })
            .catch(error =>{
                console.error(error);
            })
    };



    return (

        <div>
            <Navbar></Navbar>

            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col ">

                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handelLogin} className="card-body w-96">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                    required />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                    required />

                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <p>Dont’t Have An Account ? <Link className="text-[#F75B5F]"
                                to="/register"
                            >Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;