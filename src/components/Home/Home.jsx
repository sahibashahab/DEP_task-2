import React, { useState } from 'react';
import './Home.css';
import BannerImage from '../../assets/banner/banner-img.jpg';

export default function Home() {
    const [noteVisible, setNoteVisible] = useState(false);

    const handleButtonClick = (event) => {
        event.preventDefault(); // Prevent default link behavior
        setNoteVisible(true); // Show the note when the button is clicked
        setTimeout(() => setNoteVisible(false), 3000); // Hide the note after 3 seconds
    };

    return (
        <>
            <section id="home">
                <div className="banner_image"></div>
                <div className="container">
                    <div className="banner_outer">
                        <div className="col">
                            <h3 className="title">
                                WE PROMOTE YOUR <span>BUSINESS</span>
                            </h3>
                            
                            <div className="btn_wrapper">
                                <a className="btn" href="/" onClick={handleButtonClick}>Get Started</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="sub_banner_image">
                                <img src={BannerImage} alt="Banner_image" />
                            </div>
                        </div>
                    </div>
                </div>
                {noteVisible && (
                    <div className="note">
                        <p>Hi, i am sahiba. you need any qurey about the business feel free to contact with me 
                            sahibaawan123@gmail.com </p>
                    </div>
                )}
            </section>
        </>
    )
}
