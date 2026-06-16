import { use } from "react";
import { NavLink } from "react-router";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoriesPromise);

  return (
    <div className="">
      <h2 className="font-bold">All Categories ({categories.length})</h2>
      <div className="grid gird-cols-1 mt-5 gap-y-3">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={({ isActive }) =>
              `btn border-0 font-semibold ${
                isActive ? "bg-gray-300" : "bg-base-100 hover:bg-gray-300"
              }`
            }
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
