import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h1 className="text-xl font-medium">All Category</h1>
            {
                categories.map(category => <NavLink
                    to={`/category/${category.id}`}
                    className="block p-2 bg-slate-500 mb-1"
                    key={category.id}
                >
                    {category.name}
                </NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;