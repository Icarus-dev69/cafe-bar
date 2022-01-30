import React from 'react';
import './style.css'

{/* <div className='contact-details-blob'>
        <svg width="305" height="406" viewBox="0 0 316 417" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M226.352 62.6508C212.541 35.4912 187.951 13.8961 156.376 4.74994C95.8429 -12.7838 32.5576 22.0739 15.0239 82.6066C4.50014 118.938 12.8498 156.262 34.2966 184.089C53.7071 210.067 51.4677 226.071 33.07 240.255C19.3521 250.485 8.73598 265.109 3.60797 282.813C-8.89474 325.976 15.9611 371.103 59.1251 383.606C83.4314 390.646 108.36 385.841 127.735 372.59C150.484 357.327 165.277 356.875 193.364 383.107C206.632 396.141 223.232 406.165 242.349 411.703C303.914 429.536 368.278 394.084 386.11 332.519C399.867 285.025 381.912 235.864 344.721 207.687C319.269 187.187 318.647 174.695 327.126 163.472C331.131 158.538 334.235 152.738 336.114 146.25C343.636 120.283 328.683 93.1348 302.716 85.6133C290.233 81.9975 277.477 83.5754 266.76 89.074C253.843 95.6432 241.725 92.6389 226.352 62.6508Z" fill="#876445"/>
        </svg>

        </div>
        <div className='contact-details'>
            <div className='contact-detail'>
                <i class="fas fa-envelope"></i>
                <p>yourname@gmail.com</p>
            </div>
            <div className='contact-detail'>
                <i class="fas fa-phone"></i>
                <p>090-1234567</p>
            </div>
            <div className='contact-detail'>
                <i class="fas fa-map-marked-alt"></i>
                <p>Street Number, City, State</p>
            </div>
        </div> */}

const BookingContact = () => {
  return <section className='book-contact-sec' id='booking'>
  
      <form action='' className='booking-form'>
        <p className='tag'>Book A Table</p>
        <div className='input-container'>
          <input type="text" id='full-name' name="full-name" placeholder=' '></input>
          <label htmlFor='full-name'>Full Name</label>
        </div>
        <div className='input-container'>
          <input type="email" id='email' name="email" placeholder=' '></input>
          <label htmlFor='email'>Email</label>
        </div>
        <label htmlFor="time" className='time-label'>Time:</label>
        <input type="datetime-local" id="time" name="time"></input>
        <button className='cta-1'>Book A Table</button>
      </form>

      <form action='' className='contact-form' id='contact'>
        <p className='tag'>Contact Us</p>
        <div className='first-last-name-container'>
          <div className='input-container'>
            <input type="text" id='first-name' name="first-name" placeholder=' '></input>
            <label htmlFor='first-name'>First Name</label>
          </div>
          <div className='input-container'>
            <input type="text" id='last-name' name="last-name" placeholder=' '></input>
            <label htmlFor='last-name'>Last Name</label>
          </div>
        </div>

        <div className='input-container'>
          <input type="email" id='email' name="email" placeholder=' '></input>
          <label htmlFor='email'>Email</label>
        </div>

          <label for="message" className='message-label'>Message:</label>
          <textarea id="message" name="message" rows="5" cols="60">
        
          </textarea>
          <button className='cta-1 contact-btn'>Send</button>
        <div className='contact-details'>
            <div className='contact-detail'>
                <i class="fas fa-envelope"></i>
                <p>yourname@gmail.com</p>
            </div>
            <div className='contact-detail'>
                <i class="fas fa-phone"></i>
                <p>090-1234567</p>
            </div>
            <div className='contact-detail'>
                <i class="fas fa-map-marked-alt"></i>
                <p>Street Number, City, State</p>
            </div>
        </div>
      </form>

      
  </section>;
};

export default BookingContact;
