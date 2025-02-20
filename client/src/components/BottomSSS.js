import React, {useState} from 'react';
import "../styles/bottomSSS.css";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

function BottomSSS() {

    const [isVisible21, setIsVisible21] = useState(false);
    const [isVisible22, setIsVisible22] = useState(false);
    const [isVisible23, setIsVisible23] = useState(false);
    const [isVisible24, setIsVisible24] = useState(false);
    const [isVisible25, setIsVisible25] = useState(false);
    const [isVisible26, setIsVisible26] = useState(false);
    const [isVisible27, setIsVisible27] = useState(false);
    const [isVisible28, setIsVisible28] = useState(false);
    const [isVisible29, setIsVisible29] = useState(false);
    const [isVisible30, setIsVisible30] = useState(false);
    const [isVisible31, setIsVisible31] = useState(false);
  
    const toggleAnswer = (num) => {
      if(num === 21) {
        setIsVisible21(!isVisible21);
      } else if (num === 22) {
        setIsVisible22(!isVisible22);
      } else if (num === 23) {
        setIsVisible23(!isVisible23);
      } else if (num === 24) {
        setIsVisible24(!isVisible24);
      } else if (num === 25) {
        setIsVisible25(!isVisible25);
      } else if (num === 26) {
        setIsVisible26(!isVisible26);
      } else if (num === 27) {
        setIsVisible27(!isVisible27);
      } else if (num === 28) {
        setIsVisible28(!isVisible28);
      } else if (num === 29) {
        setIsVisible29(!isVisible29);
      } else if (num === 30) {
        setIsVisible30(!isVisible30);
      } else if (num === 31) {
        setIsVisible31(!isVisible31);
      }
    }

  return (
    <div>

      {/* Helmet for SEO */}
      <Helmet>
        <title>FREQUENTLY ASKED QUESTIONS | Latvia Residence</title>
        <meta
          name="description"
          content="Find answers to the most frequently asked questions about residency, citizenship, and investment in Latvia here. How to obtain residency, set up a company, invest, and get citizenship."
        />
        <meta
          name="keywords"
          content="Latvia, residence permit, citizenship, investment, frequently asked questions"
        />
      </Helmet>
      
      <div className='questionsArea'>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(21)}>
            <div>What is the difference between temporary and permanent residence?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible21 ? 
            <div className='questionAtbildi'>
              Once your residency-by-investment application is approved, you will be issued 
              temporary residence permits for the first five years. These permits can 
              sometimes be granted for one year at a time or for longer. At the end of 
              the fifth year, if your investment is still maintained as it was, you can 
              then apply for permanent residence. To be eligible for permanent residence,
               you must have spent at least 4 years in Latvia with temporary residence. 
               Otherwise, you would receive another temporary residence permit.
            </div>
          : <></> }
        </div>

        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(22)}>
            <div>Can I obtain Latvian citizenship?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible22 ? 
          <div className='questionAtbildi'>
            To apply for citizenship, you must first hold temporary residence for 5 years, 
            and then obtain permanent residence at the end of the fifth year. In your 10th 
            year in Latvia, you can apply for citizenship. You also need to have knowledge 
            of Latvian history, language, and general culture.
          </div>
          : <></> }
        </div>

        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(23)}>
            <div>Can I convert my temporary residence permit into a permanent residence permit after 5 years?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible23 ? 
          <div className='questionAtbildi'>
            Yes, if you have A2-level Latvian language skills and have spent 4 out 
            of those 5 years in Latvia under your residence permit, you can obtain permanent 
            residence. Otherwise, you will simply renew your temporary residence permit.
          </div>
          : <></> }
        </div>

        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(24)}>
            <div>Is it mandatory to get permanent residence and live in Latvia?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible24 ? 
          <div className='questionAtbildi'>
            It is not mandatory. If you do not meet the conditions for permanent residence, 
            you can simply apply again for a temporary residence permit. To do this, you must 
            have maintained your investment in its original form. After five years, there is 
            an application fee of 5,000 Euros for another temporary residence card. You must 
            submit your application before your current residence card expires or within 40 
            days after it expires. If you miss this window, you would have to reapply from 
            the beginning and pay all fees again. As long as you maintain your investment, 
            you can always obtain a temporary residence card. Temporary residence cards 
            do not require knowledge of Latvian or continuous residence in Latvia.
          </div>
          : <></> }
        </div>

        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(25)}>
            <div>If my residence card application is denied or if I withdraw my 
              application, is my consulting fee refunded?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible25 ? 
          <div className='questionAtbildi'>
            If your residence card application is denied or you withdraw it, half of the fee 
            you paid to our company will be refunded within 30 days. In the event your visa 
            application is denied, two-thirds of the consulting fee is refunded.
          </div>
          : <></> }
        </div>

        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(26)}>
            <div>Can I work in another EU country with my temporary residence permit?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible26 ? 
          <div className='questionAtbildi'>
            No. If you want to work in another EU country under a long-term residence permit, 
            you must meet additional requirements set by that country. These requirements 
            vary from one EU country to another.
          </div>
          : <></> }
        </div>

        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(27)}>
            <div>Can all nationalities apply for the residency-by-investment program?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible27 ? 
          <div className='questionAtbildi'>
            All foreign nationals can apply. There are no restrictions.
          </div>
          : <></> }
        </div>

        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(28)}>
            <div>If I meet the requirements for citizenship, can I hold dual citizenship?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible28 ? 
          <div className='questionAtbildi'>
            Citizens of NATO and EU countries can have dual citizenship. 
          </div>
          : <></> }
        </div>

        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(29)}>
            <div>Do you provide assistance with visas?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible29 ? 
          <div className='questionAtbildi'>
            Yes, we help with filling out the application form, preparing the documents, and making the appointment.
          </div>
          : <></> }
        </div>
        
        <div className='questionCards'>
          <div className='questionJautajums' onClick={ () => toggleAnswer(30)}>
            <div>Can I sell my investment immediately after receiving the temporary residence card?</div>
            <div><img src='/svg_plus.svg' className='plusSign' alt='plus icon'/></div>
          </div>
          {isVisible30 ? 
          <div className='questionAtbildi'>
            If you sell your investment after obtaining the residence card, your residence permit will be canceled.
          </div>
          : <></> }
        </div>   
      
      </div>
      <div> <br/><br/><br/><br/><br/><br/><br/> </div>
      <div className='footerArea'> <Footer /> </div>
    </div>
  )
}

export default BottomSSS;
