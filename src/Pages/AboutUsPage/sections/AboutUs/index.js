import React from 'react'
import './style.css'
import aboutusImage from '../../../../Imgs/about-us-image1.jpg'
import Founder from '../../../../Imgs/Founder2.jpg'
const AboutUs = () => {
    return (
        <section className='about-us1'>
            <div className='about-us-grid-container1'>
                <div className='about-us-img-container1'>
                    <img src={aboutusImage} alt="aboutusImage"/>
                    <svg width="0" height="0" >
                        <defs>
                            <clipPath id="about-us-clip1" clipPathUnits="objectBoundingBox">
                                <path d="M0.920301 0.371266C0.968822 0.333244 1 0.274114 1 0.207705C1 0.0929925 0.906975 0 0.792222 0C0.719439 0 0.655396 0.0374102 0.618286 0.0940445C0.577692 0.153412 0.52923 0.166318 0.446939 0.112126C0.401028 0.0806304 0.345445 0.0622003 0.285556 0.0622003C0.127848 0.0622003 0 0.190003 0 0.347655C0 0.505308 0.127848 0.63311 0.285556 0.63311C0.300141 0.63311 0.314471 0.632017 0.328468 0.629908C0.417591 0.618408 0.457062 0.649298 0.468669 0.727023C0.48425 0.849457 0.588845 0.944112 0.715556 0.944112C0.853013 0.944112 0.964444 0.83272 0.964444 0.695311C0.964444 0.636255 0.943862 0.582005 0.909477 0.539338C0.853073 0.467674 0.860888 0.418966 0.920301 0.371266Z" fill="#876445"/>
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <div className='about-us-text-container1'>
                
                    <p className='tag'>About Us</p>
                    
                    
                    <p className='about-us-text1'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    {/* <div className='read-more'>
                        
                            <p>Read More</p>
                            <i className="fas fa-arrow-right"></i>
                        
                        
                    </div> */}
                </div>
            </div>

            <div className='about-founder-container'>
                <div className='about-founder-text-container'>
                    <p className='tag'>About The Founder</p>
                    <p className='about-founder-text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                </div>
                <div className='about-founder-img-container'>
                    <img src={Founder} alt="Founder"></img>
                    <svg width="0" height="0" >
                        <defs>
                            <clipPath id="founder-path" clipPathUnits="objectBoundingBox">
                                    <path d="M0.512827 0.24421C0.506464 0.244492 0.500191 0.245095 0.494023 0.246002C0.425654 0.255 0.392839 0.230238 0.382856 0.161248C0.370651 0.0668095 0.287875 -0.004108 0.191012 0.000185003C0.0888358 0.00471348 0.00967662 0.0912147 0.0142051 0.193391C0.0161818 0.237992 0.0337779 0.278207 0.0614789 0.308991C0.0974954 0.349905 0.095649 0.38084 0.0582114 0.414518C0.0206076 0.447584 -0.00221868 0.496778 0.000170973 0.550696C0.00240901 0.601193 0.0263113 0.645606 0.0625081 0.675362C0.100596 0.707017 0.103103 0.733496 0.0767801 0.76551C0.0548264 0.791916 0.0422542 0.826263 0.0438944 0.863272C0.0473928 0.942204 0.114216 1.00336 0.193148 0.999857C0.266041 0.996626 0.323769 0.939391 0.329422 0.868487C0.334717 0.81557 0.356851 0.800487 0.394385 0.803589C0.399292 0.804097 0.404297 0.804251 0.409373 0.804026C0.465061 0.801558 0.508205 0.754412 0.505736 0.698724C0.505405 0.691243 0.504267 0.683988 0.502411 0.677041C0.494814 0.645001 0.505968 0.621067 0.563244 0.605987C0.647338 0.586162 0.708167 0.50882 0.704201 0.419341C0.699716 0.318133 0.614034 0.239724 0.512827 0.24421Z" fill="white"/>
                            </clipPath>
                        </defs>
                        
                    </svg>

                </div>
            </div>
        </section>
    )
}

export default AboutUs
