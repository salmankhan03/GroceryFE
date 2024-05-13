// AboutUsPage.js
import React from 'react';
import Banner from '../../components/Banner';
import aboutBanner from "../../assets/images/banner/shopBanner.jpg"
import ImageComponent from '../../components/ImageComponents/ImageComponents';
import aboutUs from "../../assets/images/about-3-1.jpg"

import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>HELLO</div>;

const Contact = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    }
    return (
        <div className="">
            <div className="row" style={{ margin: 0 }}>
                <div className="col-md-12" style={{ overflowX: 'auto', padding: 0 }}>
                    <Banner images={aboutBanner} content={"CONTACT US"} />
                </div>

            </div>
            <div className='container mt-5'>
                <div className="row mt-3 mb-5">
                    <div className='col-md-6 d-flex align-items-stretch'>
                        <div className="image-container">
                            <ImageComponent src={aboutUs} alt={"products Image"} />
                        </div>
                    </div>
                    <div className='col-md-6 d-flex align-items-stretch'>
                        <div className='mt-3'>
                            <div style={{ height: '100%' }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "" }}
                                    defaultCenter={defaultProps.center}
                                    defaultZoom={defaultProps.zoom}
                                    style={{ height: '100%', width: '100%' }}
                                >
                                    <AnyReactComponent
                                        lat={59.955413}
                                        lng={30.337844}
                                        text="My Marker"
                                    />
                                </GoogleMapReact>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Contact;
