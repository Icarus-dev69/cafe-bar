import React from 'react'
import './style.css'
import aboutusImage from '../../../Imgs/about-us-image1.jpg'

const AboutUs = () => {
    return (
        <section className='about-us'>
            <div className='about-us-grid-container'>
                <div className='about-us-img-container'>
                    <img src={aboutusImage} alt="aboutusImage"/>
                    <svg width="0" height="0" >
                        <defs>
                            <clipPath id="about-us-clip" clipPathUnits="objectBoundingBox">
                                <path d="M0.920301 0.371266C0.968822 0.333244 1 0.274114 1 0.207705C1 0.0929925 0.906975 0 0.792222 0C0.719439 0 0.655396 0.0374102 0.618286 0.0940445C0.577692 0.153412 0.52923 0.166318 0.446939 0.112126C0.401028 0.0806304 0.345445 0.0622003 0.285556 0.0622003C0.127848 0.0622003 0 0.190003 0 0.347655C0 0.505308 0.127848 0.63311 0.285556 0.63311C0.300141 0.63311 0.314471 0.632017 0.328468 0.629908C0.417591 0.618408 0.457062 0.649298 0.468669 0.727023C0.48425 0.849457 0.588845 0.944112 0.715556 0.944112C0.853013 0.944112 0.964444 0.83272 0.964444 0.695311C0.964444 0.636255 0.943862 0.582005 0.909477 0.539338C0.853073 0.467674 0.860888 0.418966 0.920301 0.371266Z" fill="#876445"/>
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <div className='about-us-text-container'>
                
                    <p className='tag'>About Us</p>
                    
                    
                    <p className='about-us-text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </p>
                    <div className='read-more'>
                        
                            <p>Read More</p>
                            <i className="fas fa-arrow-right"></i>
                        
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
