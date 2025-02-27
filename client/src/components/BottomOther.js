import React from 'react';
import {useNavigate} from "react-router-dom";
import Footer from './Footer'; 
import "../styles/bottomOther.css"
import { Helmet } from "react-helmet";

function BottomOther() {
  
  const navigate = useNavigate();

  return (
    <div className='bottomOtherArea'>

      <Helmet>
        {/* Basic SEO Tags */}
        <title>OTHER SERVICES | Latvia Residence</title>
        <meta
          name="description"
          content="We offer a wide range of professional services in Latvia, including translation, guiding, company formation, car rental, accounting, and tax operations. Our experienced team is at your service to meet your business, travel, and accommodation needs throughout the Baltic countries."
        />

        {/* Expanded keywords */}
        <meta
          name="keywords"
          content="Latvia, translation, guiding, company formation, car rental, accounting, tax, customs, hotel reservation, transfer services, Baltic countries, professional consulting"
        />
        <meta name="robots" content="index, follow" />

        {/* Canonical Link (tweak URL to your actual page) */}
        <link rel="canonical" href="https://www.latviaresidency.org/other-services" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="OTHER SERVICES | Latvia Residence" />
        <meta
          property="og:description"
          content="Detailed information about our services in Latvia, including translation, guiding, company formation, car rental, and more."
        />
        {/* This image should represent your page’s content or brand */}
        <meta property="og:url" content="https://www.latviaresidency.org/other-services" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OTHER SERVICES | Latvia Residence" />
        <meta
          name="twitter:description"
          content="Detailed information about our services in Latvia, including translation, guiding, company formation, car rental, and more."
        />
      </Helmet>

      <div className='infoHeaderArea2'>
        <h1>OTHER SERVICES</h1>
      </div>

      <div className='infoAreas2'>
        <div className='infoSheets2' id='companyBox'>
          <span className='infoSVG2'><img src='/svg_translation.svg' alt='Translation icon'/></span>
          <span className='infoTitle2'>Translation</span>
          <span className='infoText2'>
            Our experienced translators, based in Latvia, provide both written and oral translation services in Latvian-Russian-Turkish-English. 
            They also work as sworn translators at consulates and notary offices in Latvia.
          </span>
        </div>
        <div className='infoSheets2' id='companyBox2'>
          <span className='infoSVG2'><img src='/svg_tourist.svg' alt='Tourist icon'/></span>
          <span className='infoTitle2'>Group Guiding</span>
          <span className='infoText2'>
            Our experienced, multilingual guides assist businessmen and official delegations, as well as tourist groups and individuals traveling to Latvia. 
            Our guides can serve in Latvia, Estonia, Lithuania, and the Baltic and Scandinavian countries.
          </span>
        </div>
        <div className='infoSheets2' id='companyBox3' onClick={ () => navigate("/company-set-up")}>
          <span className='infoSVG2'><img src='/svg_company.svg' alt='Company icon'/></span>
          <span className='infoTitle2'>Company Formation</span>
          <span className='infoText2'>
            Our highly experienced staff provides services for citizens who wish to establish a company in Latvia. 
            Click for detailed information.
          </span>
        </div>
      </div>

      <div className='infoAreas2'>
        <div className='infoSheets2' id='companyBox2'>
          <span className='infoSVG2'><img src='/svg_accounting.svg' alt='Accounting icon'/></span>
          <span className='infoTitle2'>Corporate Services</span>
          <span className='infoText2'>
            We offer services in opening bank accounts, accounting, human resources, participation in tenders, 
            commercial space rentals, advertising, market research, and other technical matters your company may need.
          </span>
        </div>
        <div className='infoSheets2' id='companyBox'>
          <span className='infoSVG2'><img src='/svg_certification.svg' alt='Certification icon'/></span>
          <span className='infoTitle2'>Task Follow-up & Document Approvals</span>
          <span className='infoText2'>
            Our bilingual staff assists with consular and notary document approvals, apostille processes, appointment 
            bookings, and communication with foreign institutions, which may be required by our companies and citizens in Latvia.
          </span>
        </div>
        <div className='infoSheets2' id='companyBox2'>
          <span className='infoSVG2'><img src='/svg_customs1.svg' alt='Customs, tax, accounting icon'/></span>
          <span className='infoTitle2'>Customs, Tax</span>
          <span className='infoText2'>
            We provide corporate services for customs clearance and tax matters in Latvian customs with our team of experts.
          </span>
        </div>
      </div>

      <div className='infoAreas2'>
        <div className='infoSheets2' id='companyBox2'>
          <span className='infoSVG2'><img src='/svg_car.svg' alt='Car icon'/></span>
          <span className='infoTitle2'>Car Rental</span>
          <span className='infoText2'>
            We offer car rental services with or without a driver, including luxury sedan, standard sedan, SUV, minibus, and bus classes. 
            Our car rental service covers the entire Baltic region.
          </span>
        </div>
        <div className='infoSheets2' id='companyBox'>
          <span className='infoSVG2'><img src='/svg_hotel.svg' alt='Hotel icon'/></span>
          <span className='infoTitle2'>Hotel Reservation</span>
          <span className='infoText2'>
            We provide hotel reservation services for large or small groups, tailored to your needs. 
            We offer different options for tourism, historical tours, natural beauty trips, business meetings, and official visits.
          </span>
        </div>
        <div className='infoSheets2' id='companyBox2'>
          <span className='infoSVG2'><img src='/svg_transfer.svg' alt='Airport transfer icon'/></span>
          <span className='infoTitle2'>Transfer Services</span>
          <span className='infoText2'>
            We offer transfer services between airports, seaports, train stations, and your accommodation. 
            We also provide airport pick-up services. Our transfer service covers Lithuania, Latvia, and Estonia.
          </span>
        </div>
      </div>
      <div> <br/><br/><br/><br/><br/></div>
      <div className='footerArea'> <Footer /> </div>
      
    </div>
  )
}

export default BottomOther;
