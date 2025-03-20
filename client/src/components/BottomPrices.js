import React, {useState} from 'react';
import "../styles/bottomPrices.css";
import Footer from './Footer';
import { Helmet } from "react-helmet";

function BottomPrices() {

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);
  const [isVisible9, setIsVisible9] = useState(false);
  const [isVisible10, setIsVisible10] = useState(false);
  const [isVisible11, setIsVisible11] = useState(false);

  const toggleDetail = (num) => {
    if(num === 1) {
      setIsVisible1(!isVisible1);
    } else if (num === 2) {
      setIsVisible2(!isVisible2);
    } else if (num === 3) {
      setIsVisible3(!isVisible3);
    } else if (num === 4) {
      setIsVisible4(!isVisible4);
    } else if (num === 5) {
      setIsVisible5(!isVisible5);
    } else if (num === 6) {
      setIsVisible6(!isVisible6);
    } else if (num === 7) {
      setIsVisible7(!isVisible7);
    } else if (num === 8) {
      setIsVisible8(!isVisible8);
    } else if (num === 9) {
      setIsVisible9(!isVisible9);
    } else if (num === 10) {
      setIsVisible10(!isVisible10);
    } else if (num === 11) {
      setIsVisible11(!isVisible11);
    }
  }

  return (
    <div>
      <div className='bottomPricesMainArea'>
        <Helmet>
          <title>FREQUENTLY ASKED QUESTIONS | Latvia Residence Price List</title>
          <meta
            name="description"
            content="Here you can find the price list for Latvian investment-based residence applications, translation services, car rental, guide services for groups, and both spoken and written translation."
          />
          <meta
            name="keywords"
            content="Latvia, residence permit, citizenship, investment, real estate investment, bank deposit, zero-interest government bonds, price, fee, consulting fee, oral and written translation, car rental prices, detailed price list, invoice, Latvia real estate investment cost, application fee"
          />
        </Helmet>
        <div className='bottomPricesHeader'>
          <h1>OUR FEES</h1>
        </div>
        <div className='bottomPricesContent1'>
          <p>In line with our principles of transparency and customer satisfaction, our fees for 2025 are listed below.</p>
          <p>Our fees are standard and apply equally to all clients.</p>
          <p>Our fees are charged in a single payment.</p>
          <p>Payments are made to our company’s bank account in Latvia.</p>
          <p>Details of what our fees cover can be found by clicking on the items below.</p>
        </div>
        <div className='bottomPricesContent2'>

          <div className='priceEntry'>
            <div className='bottomPricesListItem' onClick={() => toggleDetail(1)}>
              <span className='spanListTitle'>Residence card application through real estate investment: </span> 
              <span className='spanPrices'> 15000 Euro</span>
            </div>  
          </div> 
          {isVisible1 ? 
            <div className='subDetails'>
              <span>Services included in the price:</span> <br/>
              <ul>
                <li>Document follow-up,</li>
                <li>Translation services,</li>
                <li>Accompanying assistance,</li>
                <li>Consulting,</li>
                <li>Transportation to relevant institutions by car, with on-site accompaniment</li>
                <li>Viewing of up to 5 properties and accompaniment during visits</li>
                <li>Transfer from Riga Airport to a hotel in Riga</li>
                <li>Any fees under 50 Euros paid to relevant institutions and notaries</li>
              </ul>
            </div>
          : <></>}

          <div className='priceEntry'>
            <div className='bottomPricesListItem' onClick={() => toggleDetail(2)}>
              <span className='spanListTitle'>Residence card application through government bonds: </span> 
              <span className='spanPrices'> 15000 Euro</span>
            </div>
          </div>
          {isVisible2 ? 
            <div className='subDetails'>
              <span>Services included in the price:</span> <br/>
              <ul>
                <li>Document follow-up,</li>
                <li>Translation services,</li>
                <li>Accompanying assistance,</li>
                <li>Consulting,</li>
                <li>Transportation to relevant institutions by car, with on-site accompaniment</li>
                <li>Transfer from Riga Airport to a hotel in Riga</li>
                <li>Any fees under 50 Euros paid to relevant institutions and notaries</li>
              </ul>
            </div>
          : <></>}

          <div className='priceEntry'>
            <div className='bottomPricesListItem' onClick={() => toggleDetail(3)}>
              <span className='spanListTitle'>Residence card application through limited company investment: </span> 
              <span className='spanPrices'> 15000 Euro</span>
            </div>
          </div>
          {isVisible3 ? 
            <div className='subDetails'>
              <span>Services included in the price:</span> <br/>
              <ul>
                <li>Document follow-up,</li>
                <li>Translation services,</li>
                <li>Accompanying assistance,</li>
                <li>Consulting,</li>
                <li>Transportation to relevant institutions by car, with on-site accompaniment</li>
                <li>Transfer from Riga Airport to a hotel in Riga</li>
                <li>Any fees under 50 Euros paid to relevant institutions and notaries</li>
              </ul>
            </div>
          : <></>}

          <div className='priceEntry'>
            <div className='bottomPricesListItem' onClick={() => toggleDetail(4)}>
              <span className='spanListTitle'>Residence card application through bank deposit investment </span> 
              <span className='spanPrices'> 15000 Euro</span>
            </div>
          </div>
          {isVisible4 ? 
            <div className='subDetails'>
              <span>Services included in the price:</span> <br/>
              <ul>
                <li>Document follow-up,</li>
                <li>Translation services,</li>
                <li>Accompanying assistance,</li>
                <li>Consulting,</li>
                <li>Transportation to relevant institutions by car, with on-site accompaniment</li>
                <li>Transfer from Riga Airport to a hotel in Riga</li>
                <li>Any fees under 50 Euros paid to relevant institutions and notaries</li>
              </ul>
            </div>
          : <></>}

          <div className='priceEntry'>
            <div className='bottomPricesListItem' onClick={() => toggleDetail(5)}>
              <span className='spanListTitle'>Company formation: </span> 
              <span className='spanPrices'> 1500 Euro</span>
            </div>
          </div>
          {isVisible5 ? 
            <div className='subDetails'>
              <span>Services included in the price:</span> <br/>
              <ul>
                <li>Document follow-up,</li>
                <li>Translation services,</li>
                <li>Accompanying assistance,</li>
                <li>Consulting,</li>
                <li>One-year address for the company</li>
                <li>Issuance of the company’s official stamp/seal</li>
                <li>Any fees under 50 Euros paid to relevant institutions and notaries</li>
                <li>Bank account opening is not included. If you wish to open a bank account, you can request a separate price quote.</li>
              </ul>
            </div>
          : <></>}

          <div className='priceEntry'>
            <div className='bottomPricesListItem' onClick={() => toggleDetail(6)}>
              <span className='spanListTitle'>Task follow-up/Document approvals (hourly): </span> 
              <span className='spanPrices'> 80 Euro</span>
            </div>
          </div>
          {isVisible6 ? 
            <div className='subDetails'>
              <ul>
                <li>You can use this service if you have any issues in Latvia that require follow-up.</li>
                <li>The hourly rate of 80 Euros applies to short-term tasks. For long-term projects requiring continuous follow-up, we can provide a separate price quote.</li>
                <li>This service can also include monitoring the status of your relatives or children.</li>
                <li>You can use this service for relatives who become ill or hospitalized in Latvia.</li>
              </ul>
            </div>
          : <></>}

          <div className='priceEntry'>
            <div className='bottomPricesListItem' onClick={() => toggleDetail(7)}>
              <span className='spanListTitle'>General consulting (hourly): </span> 
              <span className='spanPrices'> 80 Euro</span>
            </div>
          </div>
          {isVisible7 ? 
            <div className='subDetails'>
              <ul>
                <li>You can ask us any questions you have or discuss any topics you wish.</li>
              </ul>
            </div>
          : <></>}

          <div className='priceEntry'>
            <div className='bottomPricesListItem' onClick={() => toggleDetail(8)}>
              <span className='spanListTitle'>Group/Delegation guide service (daily): </span> 
              <span className='spanPrices'> 500 Euro</span>
            </div>
          </div>
          {isVisible8 ? 
            <div className='subDetails'>
              <ul>
                <li>Our guides offer services in Turkish, Latvian, Russian, and English.</li>
                <li>If desired, our guides can also provide services not only in Latvia but in Lithuania, Estonia, Sweden, Norway, Russia, and Belarus.</li>
                <li>For programs longer than one day, accommodation and meals for the guide are provided by the group/delegation.</li>
                <li>Our guides are well-versed in the country’s history, geography, tourist attractions, and shopping centers, and they accompany groups/delegations wherever needed.</li>
              </ul>
            </div>
          : <></>}

          <div className='priceEntry'>
            <div className='bottomPricesListItem' onClick={() => toggleDetail(9)}>
              <span className='spanListTitle'>Turkish-Latvian-Russian-English written translation per page (400 words): </span> 
              <span className='spanPrices'> 70 Euro</span>
            </div>
          </div>
          {isVisible9 ? 
            <div className='subDetails'>
              <ul>
                <li>Translations can be provided on paper or via email, as you prefer.</li>
                <li>The translator’s approval and signature appear on each translation.</li>
                <li>Notary, consular, or apostille approval can be obtained for translations; the fees for these services are paid separately.</li>
                <li>We do not share client information or the subject of the translation with any external parties.</li>
                <li>The price includes taxes, and an invoice is issued in the client’s name.</li>
              </ul>
            </div>
          : <></>}

          <div className='priceEntry'>
            <div className='bottomPricesListItem' onClick={() => toggleDetail(10)}>
              <span className='spanListTitle'>Turkish-Latvian-Russian-English oral translation (hourly): </span> 
              <span className='spanPrices'> 120 Euro</span>
            </div>
          </div>
          {isVisible10 ? 
            <div className='subDetails'>
              <ul>
                <li>The translator’s local travel expenses are included in the price.</li>
                <li>We do not share client information or the subject of the translation with any external parties.</li>
                <li>The price includes taxes, and an invoice is issued in the client’s name.</li>
              </ul>
            </div>
          : <></>}

          <div className='priceEntry'>
            <div className='bottomPricesListItem' onClick={() => toggleDetail(11)}>
              <span className='spanListTitle'>Turkish-Latvian-Russian-English oral translation daily (12 hours with breaks): </span> 
              <span className='spanPrices'> 680 Euro</span>
            </div>
          </div>
          {isVisible11 ? 
            <div className='subDetails'>
              <ul>
                <li>The translator’s local travel expenses are included in the price.</li>
                <li>The translator works in 45-minute interpreting sessions, followed by a 15-minute break.</li>
                <li>We do not share client information or the subject of the translation with any external parties.</li>
                <li>The price includes taxes, and an invoice is issued in the client’s name.</li>
              </ul>
            </div>
          : <></>}
            
        </div>
      </div>
      <div> <br/><br/><br/><br/><br/><br/><br/> </div>
      <div className='footerArea'> <Footer /> </div>
    </div>
  )
}

export default BottomPrices;
