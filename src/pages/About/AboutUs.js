// AboutUsPage.js
import React from 'react';
import Banner from '../../components/Banner';
import aboutBanner from "../../assets/images/banner/shopBanner.jpg"
import ImageComponent from '../../components/ImageComponents/ImageComponents';
import aboutUs from "../../assets/images/about-3-1.jpg"

const AboutUs = () => {
    return (
        <div className="">
            <div className="row" style={{ margin: 0 }}>
                <div className="col-md-12" style={{ overflowX: 'auto', padding: 0 }}>
                    <Banner images={aboutBanner} content={"ABOUT US"} />
                </div>

            </div>
            <div className='container mt-5'>
                <div className="row mt-3 mb-5">
                    <div className='col-md-6 text-center'>
                        <div className="image-container">
                            <ImageComponent src={aboutUs} alt={"products Image"} />
                        </div>
                    </div>
                    <div className='col-md-6 '>
                        <div className='mt-3'>
                            <h4>About Grocery SHOP</h4>
                            <h2 className='mt-3'>FRESH CUTS BUTCHER SHOP IN CITY</h2>
                            <p className='mt-5'>
                                We are trusted by many clients from all over the country.
                                Cras non dui id ex mattis vehicula. Nullam posuere ligula
                                non libero mollis, non ornare sapien rutrum. Quisque
                                vitae risus venenatis, dignissim felis id
                            </p>
                            <p className='mt-5'>
                                A meat store is a specialized retail establishment that offers
                                a wide range of fresh and high-quality meats, including beef,
                                pork, chicken, lamb, and other varieties. At a meat store,
                                customers can find a variety of cuts and preparations, from
                                steaks and roasts to ground meats and sausages.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default AboutUs;
