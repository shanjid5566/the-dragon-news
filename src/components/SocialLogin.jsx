import { Link } from "react-router";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="flex flex-col mt-5 gap-1.5 mb-8">
      <Link className="flex justify-center items-center gap-3 text-blue-500 border py-3 rounded-xl">
        <FaGoogle />
        Login with Google
      </Link>
      <Link className="flex justify-center items-center gap-3  border py-3 rounded-xl">
        <FaGithub />
        Login with Google
      </Link>
    </div>
  );
};

export default SocialLogin;
