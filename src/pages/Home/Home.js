import React, { useEffect, useRef, useState } from 'react';
import slider1 from "../../assets/images/banner/h1-slider-bg.jpg";
import slider2 from "../../assets/images/banner/h1-slider-bg-02.jpg";
import SliderBG from "../../assets/images/banner/h1-slider-bg-01.png"
import leftImage from "../../assets/images/H2-img-1.jpg"
import rightImage from "../../assets/images/H2-img-2.jpg"
import rightSide from "../../assets/images/H2-png-3.png"
import wayTobuy1 from "../../assets/images/H2-img-7.jpg"
import wayTobuy2 from "../../assets/images/H2-img-8.jpg"
import wayTobuy3 from "../../assets/images/H2-img-9.jpg"
import TestimonalImage from "../../assets/images/images.jpg"
import SliderComponents from "../../components/SliderComponents/SliderComponents"
import ImageComponent from '../../components/ImageComponents/ImageComponents';

import Slider from 'react-slick';


function HomeScreen() {
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
    const sliderData = [
        { title: 'Slide 1', image: 'slide1.jpg' },
        { title: 'Slide 2', image: 'slide2.jpg' },
        { title: 'Slide 3', image: 'slide3.jpg' },
        { title: 'Slide 4', image: 'slide4.jpg' }
    ];



    const  settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className="">
            <div className="row" style={{ margin: 0 }}>
                <div className="col-md-12 " style={{ overflowX: 'auto', padding: 0 }}>
                    <SliderComponents banners={slider} />
                </div>

            </div>
            <div className='custom-container'>
                <div className='m-5' style={{ backgroundColor: '#86a393', borderRadius: 5 }}>
                    <div className="row p-5" style={{ margin: 0 }}>
                        <div className="col-md-3 text-center " style={{ overflowX: 'auto', padding: '25px', margin: '0 auto' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'lightblue', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
                                    <i className="fa fa-box" style={{ fontSize: '30px', color: 'white' }} />
                                </div>
                                <h4 className="text-white">Home Delivery Available</h4>
                                <p className="text-white">We ship to every state in the US</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center " style={{ overflowX: 'auto', padding: '25px', margin: '0 auto' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'lightblue', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
                                    <i class="fa fa-user-secret" aria-hidden="true"></i>
                                </div>
                                <h4 className="text-white">Trusted and Quality Service</h4>
                                <p className="text-white">Operating for 40 years</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center " style={{ overflowX: 'auto', padding: '25px', margin: '0 auto' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'lightblue', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
                                    <i class="fa fa-user-secret" aria-hidden="true"></i>
                                </div>
                                <h4 className="text-white">Exclusive Meat Cuts</h4>
                                <p className="text-white">Get access to our most exclusive cuts and rare finds</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center " style={{ overflowX: 'auto', padding: '25px', margin: '0 auto' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'lightblue', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
                                    <i class="fa fa-user-secret" aria-hidden="true"></i>
                                </div>
                                <h4 className="text-white">Loyalty Rewards Program</h4>
                                <p className="text-white">Automatically reorder any product any time</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" style={{ marginTop: 30 }}>
                    <div className='row'>
                        <div className="col-md-8 offset-md-2 text-center">
                            <h6>THE BEST ONLINE BUTCHER DELIVERING</h6>
                            <h2>QUALITY MEAT</h2>
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
                <div className='m-5'>
                    <div className='row'>
                        <div className='col-md-6 text-center'>
                            <ImageComponent src={leftImage} alt="Product Image" width={true} classAtribute="" />
                        </div>
                        <div className='col-md-6 text-center'>
                            {/* <ImageComponent src={rightImage} alt="Product Image" width={true} classAtribute="" />
                            <img
                        src={rightSide}
                        alt='Right Image'
                        className='img-fluid'
                        style={{ marginLeft: '15px', position:'absolute'}}
                    /> */}
                            <img
                                src={rightImage}
                                alt='Product Image'
                                className='img-fluid'
                                style={{ position: 'relative' }} // Ensure parent div is relative for absolute positioning
                            />
                            <div style={{ position: 'absolute', left: '55%', top: '25%' }}>
                                <img
                                    src={rightSide}
                                    alt='Right Image'
                                    className='img-fluid'

                                />
                                <h1 className='text-white'>GRILL</h1>
                                <p style={{ color: '#c8593b' }}><span className='text-white'>DAILY</span> 7.00 AM <span className='text-white'>TO</span> 11.00 AM</p>
                                <div className="brown_button mt-3" onClick={''}>
                                    Shop Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='row'>
                        <div className="col-md-8 offset-md-2 text-center">
                            <h6>HOW IT WORKS</h6>
                            <h2>WAYS TO BUY</h2>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        {banners.map((image, index) => (
                            <div key={index} className='col-md-3 text-center'>
                                <img src={image?.src} alt={image?.alt} className='img-fluid rounded-circle' style={{ width: '200px', height: '200px' }} />
                                <h3 className='mt-5'>{image?.label}</h3>
                                <p>{image?.content}</p>
                                <div className="brown_button mt-3" onClick={''}>
                                    {image?.button_label}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='row mt-5'>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {sliderData.map((item, index) => (
                                    <div key={index}>
                                        <h3>{item.title}</h3>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>


                </div>
            </div>


        </div >

    );
}

export default HomeScreen;
