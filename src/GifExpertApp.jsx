import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);


    const onAddCategory = (newValue) => {
        if (categories.includes(newValue)) return;
        setCategories([...categories, newValue]);

    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />


            {categories.map(category =>
                <GifGrid category = {category} key={category} />

            )}

        </>
    );
}