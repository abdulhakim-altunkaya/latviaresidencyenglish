import React from 'react';
import {Routes, Route} from "react-router-dom";
import BottomContact from "./BottomContact";
import BottomPrices from "./BottomPrices";
import BottomOther from "./BottomOther";
import BottomSSS from "./BottomSSS";
import BottomResidency from "./BottomResidency";
import BottomHome from "./BottomHome";
import BottomCompany from "./BottomCompany";
import "../styles/infosheets.css";

function Bottom() {
  return (
    <div className='AreaBottom'>
      <Routes>
        <Route path="/contact" element={<BottomContact/>} />
        <Route path="/other-services" element={<BottomOther/>} />
        <Route path="/prices" element={<BottomPrices/>} />
        <Route path="/investment-residency" element={<BottomResidency/>} />
        <Route path="/questions" element={<BottomSSS/>} />
        <Route path="/company-set-up" element={<BottomCompany/>} />
        <Route path="*" element={<BottomHome/>} />
      </Routes>
    </div>
  )
}

export default Bottom;