import Header from "../Header/Header";
import Navbar from "../../pages/Navbar/Navbar";
import LeftNav from "../Shared/LeftNav/LeftNav";
import RightNav from "../Shared/RightNav/RightNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center">

                <div> <LeftNav></LeftNav> </div>

                <div className="lg:col-span-2  border-2">
                    <p className="text-3xl">news comming soonn</p>
                </div>

                <div> <RightNav></RightNav> </div>

            </div>
        </div>
        
    );
};

export default Home;