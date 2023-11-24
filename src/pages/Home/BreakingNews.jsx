import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="bg-[#F3F3F3] mt-6 mb-4 py-2 flex items-center">

            <button className="bg-[#D72050] ml-2 px-4 py-2 text-[#FFFFFF]">
                Latest
            </button>
            <Marquee>
                <h1 >Hello</h1>
            </Marquee>
        </div>
    );
};

export default BreakingNews;