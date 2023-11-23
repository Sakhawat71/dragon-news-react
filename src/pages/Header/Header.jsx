import moment from "moment/moment";

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <h1 className="font-oldEng text-6xl text-dark2 mb-3">The Dragon News</h1>
            <p className="text-lg text-dark1">Journalism Without Fear or Favour</p>

            <p className="text-xl font-medium text-dark1">
                <span
                    className="text-dark3">
                    {moment().format('dddd')}
                </span> {moment().format('MMMM D YYYY')}
            </p>
        </div>
    );
};

export default Header;