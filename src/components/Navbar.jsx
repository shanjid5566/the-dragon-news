import { Link } from "react-router";
import userImg from "../assets/user.png"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center ">
      <div></div>
      <ul className="space-x-3 text-lg ml-30">
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Career</Link>
      </ul>
      <div className="flex justify-center items-center gap-2">
        <div>
            <img src={userImg} alt="" />
        </div>
        <button className="btn bg-gray-700 text-white px-10 py-3.5">
            <Link>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
