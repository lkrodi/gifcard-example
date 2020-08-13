import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid  } from "./components/GifGrid";

export const GiftExpertApp = () => {
    const [ categories, setCategories ] = useState(['Naruto']);

    return (
        <>
            <AddCategory setCategories={ setCategories }/>
            <h2>GiftExpertApp</h2>
            <hr />
            <ol>
                {
                    categories.map((category, index) => (
                        <GiftGrid category={ category } key={ index }/> 
                    ))
                }
            </ol>
        </>
    );
}
