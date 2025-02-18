import React from 'react';
import "../styles/bottomContact.css"
import Footer from './Footer'; 
import BottomContactForm from './BottomContactForm';

function BottomContact() {
  return (
    <div>
      <div className='bottomContact'>
        <div>
          <div className='contactTitleArea'>
            <span className='bottomContactSVG'> <img src='/svg_book.svg' alt='About Icon'/></span>
            <span className='titleSpan2'>ABOUT US</span>
          </div>
          <div className='bottomAboutText'>
            <p>Riga Consulting is a consulting firm operating in Latvia, specializing in obtaining residence permits through investment and offering corporate services.</p>
            <p>Our company was established in 2008 by our team of experienced professionals, interpreters, coordinators, and accountants.</p>
            <p>Our goal is to provide our clients with the highest level of service, ensuring their investments maintain their value while also offering the opportunity to obtain a Latvian residence card.</p>
            <p>In this regard, we strive to accommodate our clients in the best way possible, provide comprehensive information, and remain fully transparent in every aspect—especially our pricing.</p>
            <p>In our work, we place special emphasis on protecting our clients’ privacy, safeguarding both their personal information and investment details to the highest degree.</p>
          </div>
        </div>
       
        <div>
          <div className='contactTitleArea'>
            <span className='bottomContactSVG2'> <img src='/svg_whatsapp.svg' alt='Whatsapp Icon'/></span>
            <span className='titleSpan4'>Whatsapp: </span>
            <span className='titleSpan3'>+371 20669310</span>
          </div>
        </div>

        <div>
          <div className='contactTitleArea'>
            <span className='bottomContactSVG2'> <img src='/svg_mail.svg' alt='Email Icon'/></span>
            <span className='titleSpan4'>E-mail: </span>
            <span className='titleSpan3'>letonyaoturum@gmail.com</span>
          </div>
        </div>

        <div>
          <div className='contactTitleArea'>
            <span className='bottomContactSVG2'> <img src='/svg_form.svg' alt='Form Icon'/></span>
            <span className='titleSpan4'>Contact Form</span>
          </div>
        </div>
        <div> <BottomContactForm /> </div>
        <div> <br/><br/><br/><br/> </div>
      </div>
      <div className='footerArea'> <Footer /> </div>
    </div>
  )
}

export default BottomContact;
