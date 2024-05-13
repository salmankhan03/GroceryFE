
import React, { useState } from 'react';
import Banner from '../../components/Banner';
import aboutBanner from "../../assets/images/banner/shopBanner.jpg"


const Faq = () => {
    const faqData = [
        {
            id: 1,
            question: 'How do I know if CPN products are safe? How are natural health products regulated in Canada?',
            answer: 'All natural health products sold in Canada are subject to the Natural Health Products Regulations which came into effect in January 2004. The regulations provide Canadians with access to safe, effective, high quality natural health product which are approved by Health Canada. To be legally sold in Canada, all-natural health products must have a product license, and the Canadian sites that manufacture, package, label and import these products must also have site licenses.To get product and site licenses, specific labelling and packaging requirements must be met, good manufacturing practices must be followed, and proper safety and efficacy evidence must be provided. CPN products are approved by Health Canada. Find out more about the Natural Health Products Regulations.'
        },
        {
            id: 2,
            question: 'What is Health Canada?',
            answer: 'Health Canada is the Federal department of Canada that is responsible for helping Canadians maintaining and improving their health. In relation to natural health products, Health Canada is the regulatory body in assessing and issuing approvals for all health natural health product which can be legally sold in Canada.'
        },
        {
            id: 3,
            question: 'What are Good Manufacturing Practices (GMP)?',
            answer: 'GMP are Global standards of practices for any manufacturing facility to ensure that all natural health products are consistently manufactured and controlled to meet the quality standards appropriate to the natural health products’ intended use.'
        },
        {
            id: 4,
            question: 'What is the FDA?',
            answer: 'The US Food and Drugs Administration is a Federal department in United States, in charge of protecting the public health. In relation to natural health products, FDA is responsible in ensuring the safety, efficacy, and security of all natural products meets the FDA quality standards.'
        },
        {
            id: 5,
            question: 'Should I let my doctor know that I will be using any supplements?',
            answer: 'It is recommended that you should let your health care practitioners know you are taking supplements or ask for their advice before taking it.'
        },
        {
            id: 6,
            question: 'Should I be taking my supplements on a full or empty stomach?',
            answer: 'Please refer to the Recommended Dose section on each product’s label for direction of use.'
        },
        {
            id: 7,
            question: 'When will I start to feel the benefits of this dietary supplement?',
            answer: 'As each product’s beneficial effects differ, please refer to the Duration of Use section on each product’s label for more information.'
        },
        {
            id: 8,
            question: 'How should I store CPN’s Products?',
            answer: 'All CPN products are best kept in cool dry areas, between 20-25°C, away from direct sunlight.'
        },
        {
            id: 9,
            question: 'If I am vegetarian or vegan, can I take CPN products?',
            answer: 'Depending on which CPN product you want to purchase, please consult the ingredient list as there may be traces of animal by-product.'
        },
        {
            id: 10,
            question: 'Can I take more than the recommended dosage of certain supplement?',
            answer: 'We would not recommend on taking more than the recommended dose printed on each product label. Please read and follow the directions on the label to ensure you are taking the correct amount of a natural health product.'
        },
        {
            id: 11,
            question: 'Can I take your supplement after the expiration date has passed?',
            answer: 'Our products follow strict procedures according to Health Canada regulations to assure product integrity, purity and accuracy of contents up to its expiration date. CPN cannot guarantee potency and quality after the expiration date has passed.'
        },
        {
            id: 12,
            question: 'Are there other avenues we can purchase CPN products?',
            answer: 'Currently we only offer online web order.'
        }
        // Add more FAQ items as needed
    ];

    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        if (expandedId === id) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
        }
    };
    return (
        <div className="">
            <div className="row" style={{ margin: 0 }}>
                <div className="col-md-12" style={{ overflowX: 'auto', padding: 0 }}>
                    <Banner images={aboutBanner} content={"FAQ"} />
                </div>
            </div>
            <div className='custom-container'>
                <div className='mt-3'>
                    <div className='row'>
                        <div className='text-center mt-2'>
                            <h3 className='titles titleColor'>READ OUR</h3>
                        </div>
                        <div className='text-center mt-3'>
                            <h5 className='titleColor tab-title'>FREQUENTLY ASKED QUESTIONS</h5>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className="container">
                            <div className="faq-list mb-5">
                                {faqData.map((item) => (
                                    <div key={item?.id}>
                                        <div className="faq-item ">
                                            <div className="faq-question  mt-3" onClick={() => toggleExpand(item.id)}>
                                                <div className='tab-title font-weight-bold'>{item.question}</div>
                                                <span className={`faq-icon`}>
                                                    <i className={expandedId === item.id ? 'fas fa-minus faq-icon-color' : 'fas fa-plus faq-icon-color'} ></i>
                                                </span>
                                            </div>
                                            {expandedId === item.id && (
                                                <div className="faq-answer pt-4 pb-2">
                                                    <p className='tab-title font-weight-normal'>{item.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                        <hr></hr>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Faq