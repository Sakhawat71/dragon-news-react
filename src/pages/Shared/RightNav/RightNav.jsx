import { Link } from "react-router-dom";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import qZ1 from "../../../assets/qZone1.png";
import qZ2 from "../../../assets/qZone2.png";
import qZ3 from "../../../assets/qZone3.png";


const RightNav = () => {
    return (
        <div className="px-3 border">

            <div className="mb-5 flex justify-center flex-col space-y-2">
                <h4 className="font-bold text-xl">Login With</h4>

                <button className="btn btn-outline flex items-center gap-1"> <BsGoogle></BsGoogle> Login With Google</button>

                <button className="btn btn-outline flex items-center gap-1"> <BsGithub></BsGithub> Login With Github</button>

            </div>

            <div className="pl-2 mb-5">
                <h4 className="text-xl font-semibold mb-2">Find Us On</h4>

                <Link className="flex items-center gap-3 py-3 text-xl border rounded-t-lg pl-4 border-dark4">
                    <FaFacebookF></FaFacebookF>
                    Facebook
                </Link>

                <Link className="flex items-center gap-3 py-3 border-x text-xl pl-4 border-dark4">
                    <FaTwitter ></FaTwitter>
                    Twitter
                </Link>

                <Link className="flex items-center gap-3 py-3 text-xl border rounded-b-lg pl-4 border-dark4">
                    <FaInstagram ></FaInstagram>
                    Instagram
                </Link>

            </div>

            <div className="bg-[#F3F3F3] py-4 px-2 rounded-lg">
                <h3 className="text-dark2 font-semibold text-xl">Q-Zone</h3>
                <figure>
                    <img src={qZ1} alt="" />
                    <img src={qZ2} alt="" />
                    <img src={qZ3} alt="" />
                </figure>
            </div>
            
        </div>
    );
};

export default RightNav;