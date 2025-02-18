import React, { useEffect } from 'react';
import axios from "axios";
import CommentDisplay from './CommentDisplay'; 
import Footer from './Footer'; 

function BottomHome() { 

  useEffect(() => {
    const getData = () => {
      // Fire-and-forget request to log visitor data
      axios.post("/serversavevisitor", {})
        .then((response) => {
          console.log('Visitor logged successfully:', response.data.myMessage);
        })
        .catch((error) => {
          console.error('Error logging visit:', error.response?.data?.myMessage || error.message);
        });
    };
  
    getData(); // Call the function
  }, []);

  return (
    <div className='bottomHomeArea'>
      <div className='infoHeaderArea'>
        <h1>WHY LATVIA?</h1>
      </div>

      <div className='infoAreas'>
        <div className='infoSheets'>
          <span className='infoSVG'><img src='/svg_eu.svg' alt='Euro currency icon'/></span>
          <span className='infoTitle'>Developed Country</span>
          <span className='infoText'>Latvia, a member of the European Union and NATO since 2004, 
            is also part of the Schengen and Eurozone areas.
          </span>
        </div>
        <div className='infoSheets'>
          <span className='infoSVG'><img src='/svg_travel.svg' alt='Travel icon'/></span>
          <span className='infoTitle'>Schengen</span>
          <span className='infoText'>With residence card from Latvia, you can freely travel to all EU member states, 
            as well as Norway, Switzerland, and Iceland.
          </span>
        </div>
        <div className='infoSheets'>
          <span className='infoSVG'><img src='/svg_university.svg' alt='Education icon'/></span>
          <span className='infoTitle'>High-Quality Education</span>
          <span className='infoText'>Latvia provides quality education. Your children can attend public schools free of charge, 
            and Latvian diplomas are recognized in Europe.
          </span>
        </div>
      </div>

      <div className='infoAreas'>
        <div className='infoSheets'>
          <span className='infoSVG'><img src='/svg_children.svg' alt='Children icon'/></span>
          <span className='infoTitle'>Your Children</span>
          <span className='infoText'>Second citizenship from Latvia
            will be one of the greatest investments you can make for your kids.
          </span>
        </div>
        <div className='infoSheets'>
          <span className='infoSVG'><img src='/svg_safety.svg' alt='Safe country icon'/></span>
          <span className='infoTitle'>Safe Country</span>
          <span className='infoText'>Latvia is one of the safest countries in Europe and the world. Your 
            children can walk to and from school on their own.
          </span>
        </div>
        <div className='infoSheets'>
          <span className='infoSVG'><img src='/svg_nature.svg' alt='Nature icon'/></span>
          <span className='infoTitle'>Natural Beauty</span>
          <span className='infoText'>Latvia is covered with forests, lakes, rivers, and beaches, 
            preserving its natural beauty without compromise.
          </span>
        </div>
      </div>

      <div className='infoAreas'>
        <div className='infoSheets'>
          <span className='infoSVG'><img src='/svg_euro.svg' alt='Euro icon'/></span>
          <span className='infoTitle'>European Market</span>
          <span className='infoText'>A secure gateway, Latvia opens doors to all EU countries for your investment. 
            By establishing a company here, you can trade freely with EU member states.
          </span>
        </div>
        <div className='infoSheets'>
          <span className='infoSVG'><img src='/svg_health.svg' alt='Health icon'/></span>
          <span className='infoTitle'>Quality of Life</span>
          <span className='infoText'>Latvia has a high quality of life, with parks everywhere. 
            There is little traffic, clean air, and people are tolerant and respectful of each other.
          </span>
        </div>
        <div className='infoSheets'>
          <span className='infoSVG'><img src='/svg_tree3.svg' alt='Nature icon'/></span>
          <span className='infoTitle'>Healthy Living</span>
          <span className='infoText'>In Latvia, you can enjoy a healthy life with your family. 
            There are absolutely no stray dogs and no diseases like rabies or hydatid cyst.
          </span>
        </div>
      </div> 

      <div className='countryInfoArea'>
        <div className='countryInfoChild1'>
          <div className='countryInfoChild1c'><span className='countryInfoChild1cTitle'>Country Profile</span></div>
          <div className='countryInfoChild1c'><span className='countryInfoChild1a'>Capital: </span> 
            <span className='countryInfoChild1b'></span>Riga</div>
          <div className='countryInfoChild1c'><span className='countryInfoChild1a'>Population: </span> 
            <span className='countryInfoChild1b'></span>1,871,882</div>
          <div className='countryInfoChild1c'><span className='countryInfoChild1a'>Official Language: </span> 
            <span className='countryInfoChild1b'></span>Latvian</div>
          <div className='countryInfoChild1c'><span className='countryInfoChild1a'>Spoken Languages: </span> 
            <span className='countryInfoChild1b'></span>Latvian, Russian</div>
          <div className='countryInfoChild1c'><span className='countryInfoChild1a'>GDP: </span> 
            <span className='countryInfoChild1b'></span>$46 billion</div>
          <div className='countryInfoChild1c'><span className='countryInfoChild1a'>Annual Per Capita Income: </span> 
            <span className='countryInfoChild1b'></span>$25,000</div>
          <div className='countryInfoChild1c'><span className='countryInfoChild1a'>Currency: </span> 
            <span className='countryInfoChild1b'></span>Euro</div>
          <div className='countryInfoChild1c'>
            <span className='countryInfoChild1a'>Largest Cities: </span> 
            <span className='countryInfoChild1b'> <br/> Riga (605,273) <br/> 
            Daugavpils (77,799) <br/> Liepaja (66,680)</span>
          </div>
        </div>
        <div className='countryInfoChild2'>
          <img 
            src='/photo_old_town.jpg' 
            alt='Old Town of Riga with a view of the Daugava River and a few new buildings on the other side of the river'
          />
        </div>
      </div>
      <div> <br/><br/><br/><br/> </div>
      <div> <CommentDisplay /></div>
      <div> <br/><br/><br/><br/> </div>
      <div className='footerArea'> <Footer /> </div>
    </div>
  )
}

export default BottomHome;
