import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-medium">All Caterogy</h2>
      <div className="flex flex-col mt-2 gap-2">
        {categories.map((category) => (
          <NavLink
            key={category.category_id}
            to={`/category/${category.category_id}`}
            className="px-12 py-3 text-center text-gray-400"
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
