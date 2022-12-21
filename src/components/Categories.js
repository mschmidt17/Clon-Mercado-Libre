import React, { useState } from 'react';
import {useSelector } from "react-redux";
import "./CSS/categories.css";
import {RiCarLine} from "react-icons/ri";


function Categories() {
    const [slide, setSlide] = useState("start")
    const listCategories = useSelector((state) => state.categories)

  return (
    <div className='container-categories'>
        <div className='category-top'>
            <h2 className="category-title">Categorías populares </h2>
            <div className='botones'>
                <button onClick={() => setSlide('start')}>1</button>
                <button onClick={() => setSlide('middle')}>2</button>
                <button onClick={() => setSlide('end')}>3</button>
            </div>
        </div>

        <div className={`categories ${slide}`}>
            {listCategories?.map(category => {
            return (
                <div key={category.id} className="category-card">
                    <RiCarLine className='icon-example'/>
                    <p className='category-name'>{category.name}</p>
                </div>
            )
            })}
        </div>
    
       
    </div>
  );
}

export default Categories;