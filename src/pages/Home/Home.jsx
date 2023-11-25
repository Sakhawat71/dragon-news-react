import Header from "../Header/Header";
import Navbar from "../../pages/Navbar/Navbar";
import LeftNav from "../Shared/LeftNav/LeftNav";
import RightNav from "../Shared/RightNav/RightNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";


const Home = () => {

    const allNews = useLoaderData()
    // console.log(\)

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center mb-10">

                <div> <LeftNav></LeftNav> </div>

                <div className="lg:col-span-2  border-2">
                    <h4 className="font-semibold text-xl text-dark2 mb-10">Dragon News Home</h4>
                    {
                        allNews?.map(news => <NewsCard 
                            key={news._id}
                            news={news}
                        ></NewsCard>)
                    }

                </div>

                <div> <RightNav></RightNav> </div>

            </div>
        </div>

    );
};

export default Home;