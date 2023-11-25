import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import RightNav from "../Shared/RightNav/RightNav";

const News = () => {

    const { id } = useParams();


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="md:grid grid-cols-4">

                <div className="col-span-3">
                    <p>{id}</p>
                </div>

                <div><RightNav></RightNav></div>
            </div>
        </div>
    );
};

export default News;