import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartBar, faCopy, faMarker, faUserGear, faCoins } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Services() {

    // Icons
    const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />;
    const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />;
    const faCopyIcon = <FontAwesomeIcon icon={faCopy} />;
    const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />;
    const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />;
    const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />;

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,           // Slide transition duration (1 second)
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,   // Time between slides (5 seconds)
        cssEase: 'ease-in-out', // Smoother easing function
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div id="services">
            <div className="container">
                <div className="title_headling">
                    <h3>Our Services</h3>
                    <p>Discover the range of services we offer to help you achieve your goals and drive success.</p>
                </div>
                <Slider {...settings} className="service_wrapper">
                    <div className="service_box">
                        <div className="service_icon blue_icon">{faLaptopCodeIcon}</div>
                        <h4 className="number">01</h4>
                        <div className="service_content">
                            <h5>Cloud Computing</h5>
                            <p>We provide scalable and reliable cloud computing solutions to enhance your business operations.</p>
                            <a href="/" className="read">Read more</a>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="service_icon">{faChartBarIcon}</div>
                        <h4 className="number">02</h4>
                        <div className="service_content">
                            <h5>Business Strategy</h5>
                            <p>Our expert consultants will help you craft a strategic plan to drive growth and achieve your business goals.</p>
                            <a href="/" className="read">Read more</a>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="service_icon green_icon">{faCopyIcon}</div>
                        <h4 className="number">03</h4>
                        <div className="service_content">
                            <h5>Reports Analysis</h5>
                            <p>Analyze your business data with our comprehensive reports to make informed decisions and optimize performance.</p>
                            <a href="/" className="read">Read more</a>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="service_icon">{faMarkerIcon}</div>
                        <h4 className="number">04</h4>
                        <div className="service_content">
                            <h5>Decision Making</h5>
                            <p>We offer tools and insights to help you make well-informed decisions that drive your business forward.</p>
                            <a href="/" className="read">Read more</a>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="service_icon green_icon">{faUserGearIcon}</div>
                        <h4 className="number">05</h4>
                        <div className="service_content">
                            <h5>Customer Service</h5>
                            <p>Our customer support team is dedicated to providing exceptional service and ensuring your satisfaction.</p>
                            <a href="/" className="read">Read more</a>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="service_icon blue_icon">{faCoinsIcon}</div>
                        <h4 className="number">06</h4>
                        <div className="service_content">
                            <h5>Solution Focused</h5>
                            <p>We provide targeted solutions to address your specific needs and help you overcome challenges effectively.</p>
                            <a href="/" className="read">Read more</a>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
