import React from 'react';
import "../styles/bottomCompany.css";
import Footer from "./Footer.js";

function BottomCompany() {
  return (
    <div className='bottomCompanyMainArea'>
        <div className='bottomCompanyHeader'>
          <h1>COMPANY FORMATION</h1>
        </div>
        <div>

          <h3>Company Types</h3>
          <div>
            <p>The main types of companies in Latvia are presented below in a comparative manner.</p>
            <table className='companyTypesTable'>
              <tr>
                <th></th>
                <th>Limited Liability Company (Standard Capital)</th>
                <th>Limited Liability Company (Small Capital)</th>
                <th>Joint Stock Company</th>
                <th>Sole Proprietorship</th>
              </tr>
              <tr>
                <td><strong>Name in Latvian</strong></td>
                <td>Sabiedrība ar ierobežotu atbildību SIA</td>
                <td>Mazkapitāla SIA</td>
                <td>Akciju sabiedrība AS</td>
                <td>Individuālais komersants IK</td>
              </tr>
              <tr>
                <td><strong>Minimum Capital Amount</strong></td>
                <td>2800 Euro</td>
                <td>1-2799 Euro</td>
                <td>25000</td>
                <td>-</td>
              </tr>
              <tr>
                <td><strong>Residency Right</strong></td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <td><strong>Number of Founders</strong></td>
                <td>Multiple</td>
                <td>1-5</td>
                <td>Multiple</td>
                <td>1</td>
              </tr>
              <tr>
                <td><strong>Type of Founder(s)</strong></td>
                <td>Individual and/or Legal Entity</td>
                <td>Only Individuals</td>
                <td>Individual and/or Legal Entity</td>
                <td>Only Individuals</td>
              </tr>
              <tr>
                <td><strong>Board of Directors (BD) Members</strong></td>
                <td>Founders appoint at least one BD member.</td>
                <td>All founders are also BD members.</td>
                <td>Founders and BD members may differ.</td>
                <td>There is no board of directors.</td>
              </tr>
              <tr>
                <td><strong>Corporate Tax (20%-25% of annual profit)</strong></td>
                <td>Pays</td>
                <td>Pays</td>
                <td>Pays</td>
                <td>Does not pay</td>
              </tr>
              <tr>
                <td><strong>VAT</strong></td>
                <td>Pays</td>
                <td>Pays</td>
                <td>Pays</td>
                <td>Pays</td>
              </tr>
            </table>
          </div>

          <div className='bottomCompanyText'>
          <h3>Limited Liability Company (Sabiedrība ar ierobežotu atbildību SIA)</h3>
            <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  A Limited Liability Company is popular 
              in Latvia and easy to establish.
              Limited Liability Companies are divided into two categories: Standard capital (minimum 2800 Euro) and 
              small capital (between 1 and 2799 Euro).
            </p>
            <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Standard-capital Limited companies 
              can be established by one or more individuals or legal entities.
              Small-capital Limited companies can be established by a maximum of 5 individuals who do not hold shares 
              in another small-capital Limited company. For those wishing to obtain a residence permit in the future, 
              a standard-capital Limited company must be established.
            </p>
            <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Once the Limited Company is established, 
              the founders become shareholders. There is no requirement to be a Latvian citizen or resident to be a 
              founder/shareholder. The chosen name for the Limited Company must not be identical to any other existing 
              company name or trademark in Latvia. The founders appoint at least one member to the company's board of directors. 
              It is not required to be a Latvian citizen or resident to serve as a board member.
            </p>
            <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  As soon as the Limited Company is 
              registered in the Commercial Register, it also becomes a taxpayer. A VAT number for the Limited Company 
              can be obtained upon the request of our client.
            </p>
            <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  You may visit Latvia to oversee the 
              company formation process and to obtain your electronic signature (which will be very useful later) and to 
              convert the company's temporary bank account into a permanent one.
            </p>
            <p><img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  Once the company formation is complete, 
              we present the stamps to our client. If desired, we also help in finding reliable accountants and staff. 
              Additionally, for clients who do not have a clear plan for operations or investment, we can assist with 
              business planning, ideas, and licensing.
            </p>
            
            <div className='processTable'>
              <div className='processTableRows'>
                <span className='processTableBox'>We obtain the client’s information and documents.</span>
                <img src='/svg_arrow3.svg' className='processTableArrows' alt='arrow icon'/>
                <span className='processTableBox'>Company documents are prepared and signed by the client.</span>
                <img src='/svg_arrow3.svg' className='processTableArrows' alt='arrow icon'/>
                <span className='processTableBox'>Company address is determined, and the application file is prepared.
                </span>
              </div>
              <div className='processTableRows processTableRowMiddle'>
                <span className='processTableBox'>A temporary bank account is opened. The company capital is transferred by our client.</span>
                <img src='/svg_arrow3.svg' className='processTableArrows' alt='arrow icon'/>
                <span className='processTableBox'>The application is submitted to the State Enterprise Register (3 days).</span>
                <img src='/svg_arrow3.svg' className='processTableArrows' alt='arrow icon'/>
                <span className='processTableBox'>We deliver the stamps and company documents to our client.</span>
              </div>
              <div className='processTableRows'>
                <span className='processTableBox'>Optional: Client may visit Latvia to apply for an e-signature.</span>
                <img src='/svg_arrow3.svg' className='processTableArrows' alt='arrow icon'/>
                <span className='processTableBox'>Optional: Client may visit Latvia to convert the temporary account to a 
                  regular one.</span>
                <img src='/svg_arrow3.svg' className='processTableArrows' alt='arrow icon'/>
                <span className='processTableBox'>Optional: Application for company VAT number. An additional fee applies.
                </span>
              </div>
            </div>
            <br/>
            <ol>
              <strong>Required Documents and Information:</strong>
              <li>Valid passport details of the founders (a scanned copy of the main passport page)</li>
              <li>Founders' residency address information (e-government residency certificate)</li>
              <li>Information about the founders' representatives 
                (we submit our personal details to the Company Register as your representatives)</li>
              <li>Valid passport and residency address information of the board members</li>
              <li>The company’s articles of association (prepared by us)</li>
              <li>Bank document confirming deposit of the company's share capital (prepared by us)</li>
              <li>Company address details (provided by us)</li>
              <li>Although not mandatory, criminal record certificate with apostille and translation into Latvian.</li>
              <li>If one of the founders is a legal entity (e.g., a company registered in another country),
                <br/> - Company establishment document (Trade Registry Gazette)
                <br/> - Company address information (Trade Registry Record)
                <br/> - Certificate of good standing (Trade Registry Offices)
                <br/> - Company establishment contract
                <br/> - Signature circular
                <br/> - Certificate of activity
              </li>
            </ol>
            <div className='bottomCompanyLinks'>
              <br/>
              <ul>
              For more detailed information:
                <li>
                  <a href='https://www.ur.gov.lv/en/register/company-or-merchant/limited-liability-company-sia/founding/registration-with-the-enterprise-register/'>
                    Enterprise Register (Latvijas Republikas Uzņēmumu reģistrs)
                  </a>
                </li>

                <li>
                  <a href='https://www.vid.gov.lv/en'>
                    State Revenue Service (Valsts ieņēmumu dienests VID)
                  </a>
                </li>
                <li>
                  <a href='https://www.liaa.gov.lv/en/invest-latvia'>
                    Investment and Development Agency of Latvia (Latvijas Investīciju un attīstības aģentūra LIAA)
                  </a>
                </li>
                <li>
                  <a href='https://www.njordlaw.com/lv'>
                    Njord Latvia Corporate Services Company
                  </a>
                </li>
                <li>
                  <a href='https://www.minioffice.lv/en/company-formation-latvia/how-to-open-company-latvia/'>
                    Minioffice Corporate Services Company
                  </a>
                </li>
                <li>
                  <a href='https://gramatvedis24.lv/en/company-registration-in-latvia/'>
                    Grāmatvedis24 Corporate Services Company
                  </a>
                </li>
              </ul>
            </div>
          </div> 
          <div> <br/><br/><br/><br/><br/><br/><br/> </div>
          <div className='footerArea'> <Footer /> </div>
        </div>
    </div>
  )
}

export default BottomCompany;
