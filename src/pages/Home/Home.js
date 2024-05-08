import React, { useEffect, useRef, useState } from 'react';
import slider1 from "../../assets/images/banner/h1-slider-bg.jpg";
import slider2 from "../../assets/images/banner/h1-slider-bg-02.jpg";
import SliderBG from "../../assets/images/banner/h1-slider-bg-01.png"
import leftImage from "../../assets/images/H2-img-1.jpg"
import rightImage from "../../assets/images/H2-img-2.jpg"
import rightSide from "../../assets/images/H2-png-3.png"
import premiumLable from "../../assets/images/premium.png"
import wayTobuy1 from "../../assets/images/H2-img-7.jpg"
import wayTobuy2 from "../../assets/images/H2-img-8.jpg"
import wayTobuy3 from "../../assets/images/H2-img-9.jpg"
import TestimonalImage from "../../assets/images/images.jpg"
import SliderComponents from "../../components/SliderComponents/SliderComponents"
import ImageComponent from '../../components/ImageComponents/ImageComponents';
import secTitle from "../../assets/images/sec-title-s-1.png"
import { ReactComponent as MySVGIcon } from '../../assets/images/svg/clipart.svg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponents from '../../components/FooterComponents/FooterComponents';
import { useNavigate } from 'react-router-dom';


function HomeScreen() {
    const navigate = useNavigate();
    const banners = [
        { id: 1, src: wayTobuy1, alt: 'Banner 1', label: 'You Choose', content: 'Browse our selection, check out online, and pick up on your scheduled date at our store.', button_label: 'Shop Online' },
        { id: 2, src: wayTobuy2, alt: 'Banner 3', label: 'We Deliver', content: 'You order ships for free, frozen for freshness and packed in an eco-friendly box.', button_label: 'See More' },
        { id: 3, src: wayTobuy3, alt: 'Banner 3', label: 'You Enjoy!', content: 'High-quality meat delivered to your door means more time for amazing meals together.', button_label: 'Choose Your Plan' },
        { id: 4, src: wayTobuy1, alt: 'Banner 4', label: 'You Choose', content: 'Browse our selection, check out online, and pick up on your scheduled date at our store.', button_label: 'Shop Online' },
    ];
    const slider = [
        { id: 1, src: slider1, content: "Best ideas for dinner", label: "MEAT MENU", bgImages: SliderBG },
        { id: 2, src: slider2, content: "Get our marinated and ready to cooks meats today.", label: "BBQ READY!", bgImages: SliderBG }
    ]
    const meatItems = [
        { id: 1, name: 'Lamb', images: TestimonalImage },
        { id: 2, name: 'Rabbit', images: TestimonalImage },
        { id: 3, name: 'Specials', images: TestimonalImage },
        { id: 4, name: 'Pork', images: TestimonalImage },
        { id: 5, name: 'Beef', images: TestimonalImage },
        { id: 6, name: 'Chicken', images: TestimonalImage },
    ];

    const productsData = {
        Lamb: [
            { id: 1, name: 'Lamb 1', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 2, name: 'Lamb 2', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 3, name: 'Lamb 3', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 4, name: 'Lamb 4', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 5, name: 'Lamb 5', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 6, name: 'Lamb 6', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 7, name: 'Lamb 7', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 8, name: 'Lamb 8', stock: true, weight: '0.5kg', price: 50.00 },
        ],
        Rabbit: [
            { id: 1, name: 'Rabbit 1', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 2, name: 'Rabbit 2', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 3, name: 'Rabbit 3', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 4, name: 'Rabbit 4', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 5, name: 'Rabbit 5', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 6, name: 'Rabbit 6', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 7, name: 'Rabbit 7', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 8, name: 'Rabbit 8', stock: true, weight: '0.5kg', price: 50.00 },
            // Add more products as needed
        ],
        Specials: [
            { id: 1, name: 'Specials 1', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 2, name: 'Specials 2', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 3, name: 'Specials 3', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 4, name: 'Specials 4', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 5, name: 'Specials 5', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 6, name: 'Specials 6', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 7, name: 'Specials 7', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 8, name: 'Specials 8', stock: true, weight: '0.5kg', price: 50.00 },
            // Add more products as needed
        ],
        Beef: [
            { id: 1, name: 'Beef 1', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 2, name: 'Beef 2', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 3, name: 'Beef 3', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 4, name: 'Beef 4', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 5, name: 'Beef 5', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 6, name: 'Beef 6', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 7, name: 'Beef 7', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 8, name: 'Beef 8', stock: true, weight: '0.5kg', price: 50.00 },
            // Add more products as needed
        ],
        Chicken: [
            { id: 1, name: 'Chicken 1', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 2, name: 'Chicken 2', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 3, name: 'Chicken 3', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 4, name: 'Chicken 4', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 5, name: 'Chicken 5', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 6, name: 'Chicken 6', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 7, name: 'Chicken 7', stock: true, weight: '0.5kg', price: 50.00 },
            { id: 8, name: 'Chicken 8', stock: true, weight: '0.5kg', price: 50.00 },
        ],
        Pork: [

        ],
    };
    const aboutData = [
        {
            "iconClass": "fa fa-box",
            "title": "Home Delivery Available",
            "description": "We ship to every state in the US"
        },
        {
            "iconClass": "fa fa-user-secret",
            "title": "Trusted and Quality Service",
            "description": "Operating for 40 years"
        },
        {
            "iconClass": "fa fa-user-secret",
            "title": "Exclusive Meat Cuts",
            "description": "Get access to our most exclusive cuts and rare finds"
        },
        {
            "iconClass": "fa fa-user-secret",
            "title": "Loyalty Rewards Program",
            "description": "Automatically reorder any product any time"
        }
    ]

    const [selectedCategory, setSelectedCategory] = useState(productsData?.Lamb);

    


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const selectCat = (data) => {
        const selectData = productsData[data?.name];
        setSelectedCategory(selectData)
    }
    const gotoShopScreen = (data) => {
        navigate(`/Shop`, {
            state: {
                categoryId: data?.id
            }
        })
    }

    function Card({ iconClass, title, description }) {
        return (
            <div className="card-custom ">
                <div className="icon-container d-flex align-items-center justify-content-center">
                    <i className={iconClass} style={{ fontSize: 35 }}></i>
                </div>
                <h4 className="card-title">{title}</h4>
                <p className="card-description">{description}</p>
            </div>
        );
    }
    return (
        <div className="">
            <div className="row" style={{ margin: 0 }}>
                <div className="col-md-12" style={{ overflowX: 'auto', padding: 0 }}>
                    <SliderComponents banners={slider} />
                </div>

            </div>
            <div className='container'>
                <div className='mt-5 feature-cards' style={{ backgroundColor: '#86a393', borderRadius: 5 }}>
                    <div className="row p-5">
                        {aboutData?.map((x) => {
                            return (
                                <div className="col-md-6 col-lg-3 col-xs-12 ">
                                    <Card
                                        iconClass={x?.iconClass}
                                        title={x?.title}
                                        description={x?.description}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="" style={{ marginTop: 30 }}>
                    <div className='row'>
                        <div className="col-md-8 offset-md-2 text-center">
                            <h6>THE BEST ONLINE BUTCHER DELIVERING</h6>
                            <h2 className='sub-title-Vast-Shadow' style={{ color: '#c8593b' }}>QUALITY MEAT</h2>
                            <MySVGIcon />
                            <p className="mt-5 text-center">
                                Online Butchers Shop source the finest beef,
                                pork and lamb breeds from the British Isles.
                                Our meat is bred to perfection to yield more
                                marbling and fuller flavour. Our mission as
                                an online butcher is to provide better
                                meat sourced sustainably in the UK.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mt-3'>
                    <div className='row '>
                        <div className='col-md-6 text-center'>
                            <div className="position-relative">
                                <img
                                    src={leftImage}
                                    alt='Product Image'
                                    className='img-fluid'
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                                {/* <ImageComponent  */}
                                <div className="position-absolute top-0 start-0 translate-middle" style={{ zIndex: '1', marginLeft: '50px' }}>
                                    <img
                                        src={premiumLable}
                                        alt='Right Image'
                                        className='img-fluid'
                                        style={{ maxWidth: '50%' }}
                                    />
                                </div>
                            </div>


                        </div>
                        <div className='col-md-6 text-center sm-margin-top'>
                            <div className="position-relative">
                                <img
                                    src={rightImage}
                                    alt='Product Image'
                                    className='img-fluid'
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                />
                                <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: '1', marginLeft: '80px' }}>
                                    <img
                                        src={rightSide}
                                        alt='Right Image'
                                        className='img-fluid'
                                        style={{ maxWidth: '50%' }}
                                    />
                                    <h3 className='text-white sub-title-Vast-Shadow'>GRILL</h3>
                                    <p style={{ color: '#c8593b' }}><span className='text-white'>DAILY</span> 7.00 AM <span className='text-white'>TO</span> 11.00 AM</p>
                                    <div className="brown_button mt-2" >
                                        Shop Now
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mt-5'>
                    <div className='row'>
                        <div className="col-md-12 col-lg-12  text-center">
                            <h6>HOW IT WORKS</h6>
                            <h2 className='sub-title-Vast-Shadow' style={{ color: '#c8593b' }}>WAYS TO BUY</h2>
                            <MySVGIcon />
                        </div>
                    </div>
                    <div className='row mt-5'>
                        {banners.map((image, index) => (
                            <div key={index} className='col-md-6 col-lg-3 text-center md-margin-top mt-md-4">'>
                                <img src={image?.src} alt={image?.alt} className='img-fluid rounded-circle' style={{ width: '200px', height: '200px' }} />
                                <h3 className='mt-5 heading-Vast-Shadow'>{image?.label}</h3>
                                <p>{image?.content}</p>                    
                                <button className={`custom-btn rounded-btn mb-3`} >
                                 {image?.button_label} <span className="ml-2"><i className="fa fa-arrow-right" aria-hidden="true"></i></span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className='p-5 shop-by-cat'>
                    <div className='row'>
                        <div className="col-md-12 col-lg-12  text-center">
                            <h6>FIND THE MEAT YOU WANT</h6>
                            <h2 className='sub-title-Vast-Shadow' style={{ color: '#c8593b' }}>SHOP BY CATEGORY</h2>
                            <MySVGIcon />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Slider {...settings} className="meat-slider">
                            {meatItems.map((item) => (
                                <div key={item.id} className="slider-item text-center p-3" onClick={() => gotoShopScreen(item)} >
                                    <ImageComponent src={item?.images} alt="Product Image" width={true} classAtribute="" />
                                    <h5 className='mt-2'>{item.name}</h5>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-12 col-lg-5 heading-center-align'>
                        <ImageComponent src={secTitle} alt="Title" classAtribute="" />
                        <h5 className='mt-3'>MEAT ASSORTMENT</h5>
                        <h3 className='mt-3'>PRODUCTS PRICE</h3>
                    </div>

                    <div className='col-md-12 col-lg-7 text-center'>
                        {/* Category */}
                        <div className='row'>
                            {meatItems.map((item) => {
                                return (
                                    <div className={`col-4 col-md-2 text-center mb-3 ${selectedCategory === productsData[item.name] ? 'selected-cat-bg' : ''}`} key={item.id} onClick={() => selectCat(item)}>
                                        <div style={{ padding: '5px' }}>
                                            <div className="product-cat-circle">
                                                <i className="fa fa-box" style={{ fontSize: '30px', color: 'white' }} />
                                            </div>
                                            <h5 className='mt-2 text-center'>{item.name}</h5>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
                <div className='mt-5 row'>
                    {selectedCategory?.length > 0 ? (

                        selectedCategory?.map((product) => {
                            return (
                                <div className='col-md-6 col-lg-6' key={product.id} style={{ borderTop: '1px dashed #ccc' }}>
                                    <div className='row mt-5 heading-center-align'>
                                        <div className='col-xs-12 col-md-12 col-lg-3'>
                                            <ImageComponent src={secTitle} alt='Title' classAtribute='' />
                                        </div>
                                        <div className='col-xs-12 col-md-12 col-lg-5 md-margin-top'>
                                            <h3>{product.name}</h3>
                                            <p>{product.stock ? 'In Stock' : 'Out of Stock'}</p>
                                        </div>
                                        <div className='col-6 col-md-6 col-lg-2 text-md-right'>
                                            <p>{product.weight}</p>
                                        </div>
                                        <div className='col-6 col-md-6 col-lg-2 text-md-left'>
                                            <p>${product.price}</p>
                                        </div>
                                    </div>
                                </div>


                            )
                        })) : (
                        <div className='text-center mt-5'>
                            <h3>
                                No products available
                            </h3>
                        </div>
                    )}
                </div>
            </div>
            <div className='mt-3'>
                <FooterComponents />
            </div>


        </div >

    );
}

export default HomeScreen;
