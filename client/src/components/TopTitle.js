import React from 'react';
import {useNavigate} from "react-router-dom";

function TopTitle() {
  
  const navigate = useNavigate();

  return (
    <div className='AreaTopTitle'>
      <span onClick={ () => navigate("/")} className='titleSpan'>Latvia Residence – Riga Consulting</span>&nbsp;&nbsp;
      <span><img src='/iconLV.png' alt='Latvia Flag'/></span> &nbsp;&nbsp;
    </div>
  )
}

export default TopTitle;
