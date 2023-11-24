import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className="border">

            <div className="space-y-3">

                <p className="text-xl font-semibold text-center">All Caterogy</p>

                {
                    categories.map(category => <NavLink
                        key={category.id}
                        to={`/category/${category.id}`}
                        className="flex  flex-col font-semibold text-xl text-dark3 pl-10 py-2 justify-center"
                    >{category.name}</NavLink>)
                }
            </div>

        </div>
    );
};

export default LeftNav;