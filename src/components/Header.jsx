import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="text-center">
            <div className="w-[470px] h-[60px]">
                <img src={logo} alt="logo" />
            </div>
            <p className="text-gray-400 text-lg font-normal mt-4">Journalism Without Fear or Favour</p>
            <p className="text-xl font-medium mt-2.5">{moment().format("dddd,")}<span className="text-gray-400">{moment().format(" MMMM D, YYYY")}</span></p>
        </div>
    );
};

export default Header;