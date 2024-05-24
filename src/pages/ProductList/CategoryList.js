import React from 'react';
import Slider from 'react-slick';
import './index.css';

const CategorySlider = ({ categories, onSelectCategory, selectedCategory }) => {
    const slidesToShow = Math.min(categories.length, 6);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: slidesToShow,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: Math.min(categories.length, 2),
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {categories.map((category) => (
                <div key={category.id} className="category-item" onClick={() => onSelectCategory(category.id, category.name)}>
                    <div className={`category-content ${selectedCategory === category.id ? 'selected' : ''}`}>
                        <div className="category-name">{category.name}</div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default CategorySlider;
