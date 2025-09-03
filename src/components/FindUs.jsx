import { Link } from "react-router";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter,FaInstagramSquare  } from "react-icons/fa"; 

const FindUs = () => {
  return (
    <div className="mt-3">
        <h2 className="text-xl font-medium mb-4">Find Us On</h2>
      <Link className="flex justify-start items-center gap-3  border py-3 rounded-xl">
        <CiFacebook className="ml-4"/>
        Facebook
      </Link>
      <Link className="flex justify-start items-center gap-3  border py-3 rounded-xl">
        <FaTwitter  className="ml-4"/>  
        Twitter
      </Link>
      <Link className="flex justify-start items-center gap-3  border py-3 rounded-xl">
        <FaInstagramSquare  className="ml-4"/>  
        Instagram
      </Link>
    </div>
  );
};

export default FindUs;
