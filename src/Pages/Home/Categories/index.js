import React from 'react'
import './style.css'

const Categories = () => {
    return (
        <section className='cat-section'>
            
            <p className='tag'>Categories</p>
            <div className='categories-container'>
            <a className='cat' href='/categories#coffee'>
                    <i className="fas fa-mug-hot cat-icon"></i>
                    <p>Coffee</p>
                </a>
                <a className='cat' href='/categories#drinks'>
                    <i className="fas fa-glass-martini-alt cat-icon"></i>
                    <p>Drinks</p>
                </a>
                <a className='cat' href='/categories#cake'>
                    <i className="fas fa-birthday-cake cat-icon"></i>
                    <p>Cake</p>
                </a>
                <a className='cat' href='/categories#pizza'>
                    <i className="fas fa-pizza-slice cat-icon"></i>
                    <p>Pizza</p>
                </a>
                <a className='cat' href='/categories#ice-cream'>
                    <i className="fas fa-ice-cream cat-icon"></i>
                    <p>Ice-cream</p>
                </a>
                <a className='cat' href='/categories#snacks'>
                    <i className="fas fa-cookie-bite cat-icon"></i>
                    <p>Snacks</p>
                </a>
                <a className='cat' href='/categories#burger'>
                    <i className="fas fa-hamburger cat-icon"></i>
                    <p>Burger</p>
                </a>
            </div>
            
        </section>
    )
}

export default Categories
