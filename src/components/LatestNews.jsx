import Marquee from "react-fast-marquee";
import { Link } from "react-router";
const LatestNews = () => {
    return (
        <div className="flex flex-row bg-gray-300 p-4 gap-2">
            <p className="bg-[#D72050] px-6 py-2 text-white text-xl font-medium">Latest</p>
            <Marquee pauseOnHover={true} speed={75} className="space-x-10 text-lg font-semibold">
                <Link>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, iste?</Link>
                <Link>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, iste?</Link>
                <Link>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, iste?</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;