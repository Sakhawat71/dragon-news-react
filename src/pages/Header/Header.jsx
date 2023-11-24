import moment from "moment/moment";
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <figure>
                <img src={logo} alt="" />
            </figure>
            <p className="text-lg text-dark1">Journalism Without Fear or Favour</p>

            <p className="text-xl font-medium text-dark1">
                {moment().format('dddd, ')}
                <span className="text-dark3">
                    {moment().format('MMMM D YYYY')}
                </span>
            </p>
        </div>
    );
};

export default Header;