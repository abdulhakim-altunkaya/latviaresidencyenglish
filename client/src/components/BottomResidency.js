import React from 'react';
import "../styles/bottomResidency.css"
import "../styles/bottomCompany.css";
import "../styles/bottomResList.css";
import Footer from './Footer';
import { Helmet } from "react-helmet";

function BottomResidency() {
  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>FREQUENTLY ASKED QUESTIONS | Latvia Residence</title>
        <meta
          name="description"
          content="Find answers to the most frequently asked questions about types of investment-based residency, citizenship, and investment in Latvia here."
        />
        <meta
          name="keywords"
          content="Latvia, residence permit, citizenship, investment, real estate investment, bank deposits, zero-interest government bonds, comparison table, residency by investment, process, required documents, necessary papers"
        />
      </Helmet>
      <div className='bottomResidencyMain'>
        <div className='bottomResidencyHeader'>
          <h1>RESIDENCE PERMIT THROUGH INVESTMENT</h1>
        </div>
        <div className='infoResidencyCardsMain'>

          <div className='infoResidencyCardsRows'>
            <div className='infoResidencyCards1'>
              <div className='infoCardUpper'>
                <img src='/svg_family.svg' alt='family icon' className='infoResidencySvg'/>
                <span className='infoCardTitle'>Residence for Your Entire Family</span>
              </div>
              <div className='infoCardLower'>
                <span>Thanks to your investment, both you and your spouse, as well as your children
                   under 18, can obtain a residence card.</span>
                <span>Additionally, if your parents are disabled or in need of constant care, 
                  you can obtain a residence card for them as well.</span>
              </div>
            </div>

            <div className='infoResidencyCards2'>
              <div className='infoCardUpper'>
                <img src='/svg_id.svg' alt='ID Card , Residency card icon' className='infoResidencySvg'/>
                <span className='infoCardTitle'>First Temporary, Then Permanent Residence</span>
              </div>
              <div className='infoCardLower'>
                <span>After living in Latvia for 5 years on temporary residence permits, our investors 
                  can apply for permanent residence at the end of the 5th year.</span>
                <span>To qualify for permanent residence, you must have spent 4 out of the first 5 years in Latvia.</span>
              </div>
            </div>
          </div>

          <div className='infoResidencyCardsRows'>
            <div className='infoResidencyCards3'>
              <div className='infoCardUpper'>
                <img src='/svg_latvia.svg' alt='application and folder icon' className='infoResidencySvg'/>
                <span className='infoCardTitle'>Latvian Citizenship</span>
              </div>
              <div className='infoCardLower'>
                <span>To apply for citizenship, you must first hold temporary residence for 5 years, 
                  then obtain permanent residence, and have spent most of the 10-year period in Latvia.</span>
              </div>
            </div>

            <div className='infoResidencyCards4'>
              <div className='infoCardUpper'>
                <img src='/svg_folder.svg' alt='application and folder icon' className='infoResidencySvg'/>
                <span className='infoCardTitle'>Easy Application Requirements</span>
              </div>
              <div className='infoCardLower'>
                <span>The program is open to all foreigners; the applicant must be over 18 and have no criminal record.</span>
                <span>Applications are generally finalized in 2 to 4 months, and our expert team makes this process even easier.</span>
              </div>
            </div>
          </div>

        </div>

        <div>
          <p className='bottomResUpperText'>
            Since the Investment-Based Residency program began in 2010, approximately 20,000 applications have been submitted.
            Under this program, around 1.5 billion Euros have been invested in Latvia.
            Below is a comparative summary of information on obtaining a residence permit in Latvia through investment.
          </p>
          <table className='companyTypesTable companyTypesTable2'>
            <tr>
              <th></th>
              <th>Real Estate</th>
              <th>Company</th>
              <th>Government Bond</th>
              <th>Bank Deposit</th>
            </tr>
            <tr>
              <td><strong>Minimum Investment</strong></td>
              <td>250,000</td>
              <td>50,000</td>
              <td>250,000</td>
              <td>280,000</td>
            </tr>
            <tr>
              <td><strong>State Fee</strong></td>
              <td>1.5% + 12,500</td>
              <td>10,000</td>
              <td>38,000</td>
              <td>25,000</td>
            </tr>
            <tr>
              <td><strong>Appreciation in Value</strong></td>
              <td>Possible</td>
              <td>Not possible</td>
              <td>Possible</td>
              <td>Possible</td>
            </tr>
            <tr>
              <td><strong>Monthly/Annual Return on Investment</strong></td>
              <td>Possible</td>
              <td>Not possible</td>
              <td>Not possible</td>
              <td>Possible</td>
            </tr>
            <tr>
              <td><strong>Risk Level</strong></td>
              <td className='greenCube'>Low</td>
              <td className='redCube'>High</td>
              <td className='greenCube'>Very low</td>
              <td className='greenCube'>Very low</td>
            </tr>
          </table>
        </div>
        <div className='bottomCompanyText bottomCompanyText2'>
          <h3>1. Real Estate Investment</h3>
          <p>
            <img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  
            Minimum investment 250,000 + 1.5% deed fee + 12,500 state fee + 15,000 consulting = Total 280,750 Euros
          </p>
          <p>
            <img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  
            Real estate prices in Latvia are quite affordable compared to other EU countries, 
            and as of 2025, they are even cheaper than in our own country. This is our most recommended type of investment.
          </p>
          <p>
            <img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  
            Under the program, our all-inclusive key and residence card handover price is 5,000 Euros. 
            Considering that the property you’ll buy will cost at least 250,000 Euros, along with fees
             and our consulting charge, the total amount you’ll pay will be around 280,000 Euros.
          </p>
          <p>
            <img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  
            Under the program, you can only purchase real estate from a company paying taxes in Latvia,
             from Latvian citizens, or from a foreigner living in Latvia (an EU citizen or someone with
              a long-term residence permit). Payment for the property must be made via bank transfer, the
               purchase price must be at least 250,000 Euros, and the property’s registered cadastral
                value must be at least 80,000 Euros. Agricultural and forest land are excluded from the
                 program, but plots where a house or apartment can be built are included.
          </p>
          <p>
            <img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  
            We strongly recommend real estate investment because the property you purchase can appreciate 
            in value every year, and you can earn rental income on top of that. Our expert team closely 
            follows the Riga real estate market and can offer you many options to help you choose the right property.
          </p>

          <h3>2. Company Investment</h3>
          <p>
            <img src='/svg_star.svg' className='leavesCompany' alt='leaf icon'/>  
            Minimum investment 50,000 + 10,000 state fee + 15,000 consulting = Total 75,000
          </p>
          <p>
            <img src='/svg_star.svg' className='leavesCompany' alt='leaf icon'/>  
            This involves investing in a company registered in Latvia. It’s the cheapest but not highly 
            recommended. There are two ways to invest in a company: <br/>
            <strong>50,000 Euros</strong>: Companies with a maximum of 50 employees and annual 
            turnover under 10 million Euros <br/>
            <strong>100,000 Euros</strong>: Other companies
          </p>
          <p>
            <img src='/svg_star.svg' className='leavesCompany' alt='leaf icon'/>  
            Although a company investment is cheaper, your investment is unlikely to appreciate or 
            generate monthly or yearly profits in practice. Also, if you ever want to sell the 
            shares you acquired, you might have to sell at a much lower price—or possibly 
            zero if no buyer is found. Moreover, if the company whose shares you purchased goes 
            bankrupt, your residence card will be canceled. In short, the funds allocated for a 
            company investment essentially only grant you a residence card. Keep in mind that there 
            may be no return or profit on your investment.
          </p>
          <p>A maximum of 10 foreign nationals can apply for a residence permit in the same company.</p>

          <h3>3. Zero-Interest Government Bond</h3>
          <p>
            <img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  
            Minimum investment 250,000 + 38,000 state fee + 15,000 consulting = Total 303,000
          </p>
          <p>
            <img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  
            Investing in zero-interest government bonds allows you to obtain a residence permit. 
            Compared to real estate and company investments, this can be seen as an easier option 
            than company investments and more secure than a bank deposit.
          </p>
          <p>
            <img src='/icon_leaf.png' className='leavesCompany' alt='leaf icon'/>  
            While these government bonds do not pay interest, you can profit from the difference 
            between the purchase price and the nominal price at the end of the bond’s term. For example: <br/> <br/>
            Purchase price: 900 <br/>
            Nominal price: 1000 <br/>
            Profit: 100 <br/> <br/>
            The customer buys the bond at the purchase price, and at the end of the bond’s term, 
            the government repurchases it at the nominal price. The profit from the difference 
            between the nominal price and the purchase price is generally slightly higher than 
            what you would earn from bank deposit interest.
          </p>

          <h3>4. Bank Deposit</h3>
          <p>
            <img src='/svg_star.svg' className='leavesCompany' alt='leaf icon'/>  
            Minimum investment 280,000 + 25,000 state fee + 6,000 consulting = Total 311,000
          </p>
          <p>
            <img src='/svg_star.svg' className='leavesCompany' alt='leaf icon'/>  
            A bank deposit is a very secure type of investment, and you can earn up to 8% 
            annual interest. That means you could get 390,000 Euros back after 5 years on 
            your 280,000-Euro investment.
          </p>
          <p>
            <img src='/svg_star.svg' className='leavesCompany' alt='leaf icon'/>  
            You must deposit at least 280,000 Euros into a Latvian bank. Your deposit 
            will be recorded in the bank’s system as a “subordinate liability,” which means 
            that if the bank goes bankrupt, the primary claim holders will be paid before 
            you. Since the likelihood of the bank going bankrupt is considered low, this 
            detail may not be particularly significant.
          </p>

          <h2>Required Documents</h2>
          <div className="list-type5">
            <ol>
              <li>Passport</li>
              <li>The address where the applicant will live in Latvia</li>
              <li>Health insurance</li>
              <li>Photo</li>
              <li>Receipts for the application fees. These generally range from 100 to 500 Euros. If your family members are included in the application, each family member pays an additional fee. (Note that application fees differ from state fees; state fees are paid after the application is approved.)</li>
              <li>Documents specific to the type of investment: Deed for property ownership, proof of government bond purchase, proof of bank deposit, commercial register documents for company investment, etc.</li>
              <li>A document stating that you have no criminal record, its Latvian translation and apostille.</li>
              <li>Documents showing how you obtained the investment amount. If you own a company, provide balance sheets, profit statements, etc. Or you could show the sale amount of a property you sold in your country.</li>
              <li>Proof of sufficient funds in a bank to cover your living expenses in Latvia. For real estate, the applicant needs 2,220 Euros, spouse 740 Euros, and each child 222 Euros. For other investments, the applicant and spouse each need 740 Euros, and each child 222 Euros. These monthly amounts are multiplied by 12 to calculate the annual total.</li>
              <li>If you are including your spouse and children in the application, you also need marriage and birth certificates.</li>
              <li>All original documents, translations into Latvian, and photocopies must be submitted. Some documents issued by governmental institutions also require an apostille.</li>
              <li>Our expert team will provide every assistance and convenience in preparing these documents.</li>
            </ol>
          </div>

          <h2>Process</h2>
          <p><strong>First Month</strong>: Initial communication with the client, selection of the investment, 
          payment of consulting fee, and preparation of documents for visa and residence permit applications.</p>
          <p><strong>Second Month</strong>: The client arrives in Latvia. Depending on the type of investment, 
          visits and meetings take place. All application procedures and documents are signed, 
          the investment amount is transferred to the relevant accounts, and the application 
          file is submitted to PMLP (Office of Citizenship and Migration Affairs).</p>
          <p><strong>Fourth Month</strong>: The PMLP review process can take 5 days if a fee of 
          about 450 Euros is paid, or around 50 days otherwise. Generally, applications are 
          processed within about 30 days. Once approved, the state fees for the investment are 
          transferred to the relevant accounts. The client then returns to Latvia and, with our 
          best wishes, receives the residence card in person.</p>
          <p>During this roughly 3 to 4 month process, we stand by our client; if they 
            cannot travel to Latvia, we provide all necessary assistance and guidance.</p>
        </div>

        <div className='bottomCompanyLinks bottomCompanyLinks2'>
          <br/>
          For more detailed information:
            <li>
              <a href='https://www.pmlp.gov.lv/en/real-estate-owner-01072016'>
                Latvian Office of Citizenship and Migration Affairs (Pilsonības un migrācijas lietu pārvalde, PMLP)
              </a>
            </li>
            <li>
              <a href='https://www.vid.gov.lv/en'>
                State Revenue Service (Valsts ieņēmumu dienests, VID)
              </a>
            </li>
            <li>
              <a href='https://www.liaa.gov.lv/en/invest-latvia'>
                Investment and Development Agency of Latvia (Latvijas Investīciju un attīstības aģentūra, LIAA)
              </a>
            </li>
            <li>
              <a href='https://lawyerslatvia.com/latvia-citizenship-by-investment/'>
                Lawyers Latvia Corporate Services
              </a>
            </li>
            <li>
              <a href='https://immigrantinvest.com/blog/latvia-residence-permit-by-investment-en/'>
                Immigrant Invest Corporate Services
              </a>
            </li>
            <li>
              <a href='https://passports.io/'>
                Passports.io Corporate Services
              </a>
            </li>
            <li>
              <a href='https://www.goldenvisas.com/latvia'>
                La Vida Corporate Services
              </a>
            </li>
            <li>
              <a href='https://www.residency-bond.eu/latvia-bank.html'>
                RCP Corporate Services
              </a>
            </li>
            <li>
              <a href='https://www.henleyglobal.com/'>
                Henley Global Corporate Services
              </a>
            </li>
        </div>

        <div> <br/><br/><br/><br/><br/><br/><br/> </div>
      </div>
      <div className='footerArea'> <Footer /> </div>
    </div>
  )
}

export default BottomResidency;
