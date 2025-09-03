import { FaStar, FaRegStar, FaEye, FaShareAlt } from "react-icons/fa";
import { useLoaderData } from "react-router";

const CategoryNews = () => {
  const { data: news } = useLoaderData();

  return (
    <div>
      <h2 className="text-xl font-medium">Dragon News Home</h2>
      <div className="my-4">
        {news.map((singleNews) => (
          <div className="bg-white rounded-xl shadow p-4 max-w-lg mx-auto flex flex-col t mb-5">
            {/* Author Section */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <img
                  src={singleNews.author.img}
                  alt={singleNews.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{singleNews.author.name}</p>
                  <p className="text-xs text-gray-500">
                    {singleNews.author.published_date}
                  </p>
                </div>
              </div>
              <FaShareAlt className="text-gray-500 cursor-pointer" />
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold mb-2">{singleNews.title}</h2>

            {/* Thumbnail */}
            <img
              src={singleNews.thumbnail_url}
              alt="news"
              className="w-full h-52 object-cover rounded-lg mb-3"
            />

            {/* Details */}
            <p className="text-gray-600 text-sm mb-2">
              {singleNews.details.length > 200
                ? singleNews.details.slice(0, 200) + "..."
                : singleNews.details}
            </p>
            <button className="text-red-500 text-sm font-medium hover:underline text-start">
              Read More
            </button>

            {/* Footer */}
            <div className="flex items-center justify-between mt-3">
              {/* Rating */}
              <div className="flex items-center gap-1">
                <FaStar className="text-orange-400" />
                <FaStar className="text-orange-400" />
                <FaStar className="text-orange-400" />
                <FaStar className="text-orange-400" />
                <FaRegStar className="text-orange-400" />
                <span className="ml-1 text-gray-700 font-medium">
                  {singleNews.rating.number}
                </span>
              </div>

              {/* Views */}
              <div className="flex items-center justify-center text-gray-600 gap-1 text-left">
                <FaEye />
                <span>{singleNews.total_view}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
