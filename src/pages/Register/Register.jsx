import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Register = () => {


    const handelRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo')
        const email = form.get("email");
        const password = form.get('password')
        console.log(name,photo,email,password)
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col ">

                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handelRegister} className="card-body w-96">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URl</span>
                                </label>

                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Photo url"
                                    className="input input-bordered"
                                />

                            </div>
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

                            </div>

                            <label className="cursor-pointer label mt-3">
                                <input type="checkbox" className="checkbox checkbox-info mr-2" />
                                <p>Accept Term & Conditions</p>
                            </label>

                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Register</button>
                            </div>

                            <p>Already Have An Account ? <Link className="text-[#F75B5F]"
                                to="/login"
                            >Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;