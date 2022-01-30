import React from 'react'
import heroImage from '../../../Imgs/Hero-image1.png'
import './style.css'
const Hero = () => {
    return (
            <section className='hero'>
                <div className='hero-grid-container'>
                    <div className='hero-text-container'>
                        <h1 className='hero-header'>Good Food and Drink Choice is a Lifestyle</h1>
                        <h3 className='hero-subheader'>Choose tasty and healthy food and drinks in one place and have a great time having them</h3>
                        <a href="/#booking" className='cta-1 main-btn'>Book a table</a>
                    </div>
                    <div className='hero-image-container'>
                        <img src={heroImage} alt='heroimage'></img>
                        <svg width="0" height="0">
                            <defs>
                                <clipPath id="clip" clipPathUnits="objectBoundingBox">
                                    <path d="M0.536506 0.832952C0.585389 0.885174 0.654941 0.917808 0.732116 0.917808C0.880064 0.917808 1 0.797872 1 0.649924C1 0.561125 0.956794 0.482418 0.890258 0.433677C0.829521 0.387777 0.824118 0.350227 0.856339 0.306226C0.88059 0.274199 0.894977 0.23429 0.894977 0.19102C0.894977 0.0855225 0.809455 0 0.703957 0C0.64455 0 0.591477 0.0271193 0.556442 0.0696532C0.515114 0.118928 0.482053 0.12961 0.401586 0.0888042C0.363154 0.0680789 0.319176 0.0563166 0.272451 0.0563166C0.12198 0.0563166 0 0.178297 0 0.328767C0 0.444848 0.072596 0.543974 0.174864 0.58322C0.245646 0.612823 0.255206 0.640583 0.243419 0.671428C0.237611 0.68517 0.234399 0.700277 0.234399 0.716134C0.234399 0.7796 0.285849 0.83105 0.349315 0.83105C0.379825 0.83105 0.407557 0.819161 0.428133 0.799762C0.452969 0.776512 0.482254 0.775372 0.536506 0.832952Z" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                </div>
                

            </section>
    )
}

export default Hero
