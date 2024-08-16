import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast} from '@fortawesome/free-solid-svg-icons';


export default function About() {
  
    const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    
  return (
    <>
    <section id="about">
    <div className="container">
        <div className="title_headling">
            <h3>We Deliver Innovative and Impactful Solutions!</h3>
            <p>Empowering your business with creative and customized strategies, tailored to drive success and growth.</p>
        </div>
        <div className="about_box_wrapper">
            <div className="about_box">
                <div className="about_icon">
                    {faBusinessIcon}
                </div>
                <div className="about_content">
                    <h5>Development</h5>
                    <p>Our expert team brings your ideas to life with innovative development solutions, ensuring seamless execution from concept to completion.</p>
                </div>
            </div>
            <div className="about_box">
                <div className="about_icon green_icon">
                    {faChartPieIcon}
                </div>
                <div className="about_content">
                    <h5>Integration</h5>
                    <p>We specialize in integrating advanced technologies into your business processes, enhancing efficiency and driving productivity.</p>
                </div>
            </div>
            <div className="about_box">
                <div className="about_icon blue_icon">
                    {faTruckFastIcon}
                </div>
                <div className="about_content">
                    <h5>Branding</h5>
                    <p>Build a strong and memorable brand identity that resonates with your target audience and sets you apart from the competition.</p>
                </div>
            </div>
        </div>

           
       
    </div>
</section>

    </>
  )
}
