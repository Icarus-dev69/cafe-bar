import React from 'react';
import './style.css'

const Slider = ({children,sliderName}) => {
    console.log(sliderName)
    const scrollLeft = () => {
        // alert('hello')
        // console.log(sliderName)
        let slider = document.querySelector(`.${sliderName}`)
        slider.scrollLeft -= 300
    }

    const scrollRight = () => {
        // alert('hello')
        let slider = document.querySelector(`.${sliderName}`)
        slider.scrollLeft += 300
    }
  return <div className='slider-wrapper'>
                <div className={`slider ${sliderName}`}>
                    <div className='slider-inner'>
                        {children}
                    </div>
                </div>
                <div className='arrows'>
                    <i className="far fa-caret-square-left" onClick={()=>{scrollLeft()}}></i>
                    <i className="far fa-caret-square-right" onClick={()=>{scrollRight()}}></i>

                </div>
                {/* <div className='progress-bar'> 
                    <div className='prog-bar-inner'></div>
                </div> */}
                
            </div>;
};

export default Slider;
