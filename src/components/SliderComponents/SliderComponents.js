import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImageComponent from '../ImageComponents/ImageComponents';

const SliderComponents = ({ banners }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
            {banners.map((banner, index) => (
                <Carousel.Item key={index} interval={1500}>
                    <ImageComponent src={banner.src} alt={`Slide ${index + 1}`} classAtribute="slider-image d-block w-100"  style={{}}/>
                    <Carousel.Caption className='custom-caption'>
                        <p className='text-white'>{banner?.content}</p>
                        <h1 style={{ color: '#c8593b' }}>{banner?.label}</h1>
                        <ImageComponent src={banner.bgImages} alt={`Slide ${index + 1}`} classAtribute="" />
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
export default SliderComponents;
