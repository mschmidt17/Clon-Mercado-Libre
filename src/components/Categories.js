import React, { useState } from 'react';
import {useSelector} from "react-redux";
import "./CSS/categories.css";


function Categories() {
    const [slide, setSlide] = useState("start")
    const listCategories = useSelector((state) => state.categories)


    return (
        <div className='container-categories'>
            <div className='category-top'>
                <h2 className="category-title">Categorías populares </h2>
                <div className='botones'>
                    <button onClick={() => setSlide('start')} className={`category-btn ${slide === 'start' ? "active" : ""}`}></button>
                    <button onClick={() => setSlide('middle')} className={`category-btn ${slide === 'middle' ? "active" : ""}`}></button>
                    <button onClick={() => setSlide('end')} className={`category-btn ${slide === 'end' ? "active" : ""}`}></button>
                </div>
            </div>

            <div className={`categories ${slide}`}>
                {listCategories?.map(category => {
                return (
                    <div key={category.id} className="category-card">
                        {category.icon}
                        <p className='category-name'>{category.name}</p>
                        
                    </div>
                )
                })}
            </div>
        
        
        </div>
    );
}

export default Categories;