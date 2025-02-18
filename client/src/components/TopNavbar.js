import React from 'react';
import { useNavigate } from 'react-router-dom';

function TopNavbar() {
  const navigate = useNavigate();
  return (
    <div className='AreaTopNavbar'>
      <span onClick={() => navigate("/investment-residency")}>Residency Permit</span>
      <span onClick={() => navigate("/other-services")}>Other Services</span>
      <span onClick={() => navigate("/prices")}>Prices</span>
      <span onClick={() => navigate("/questions")}>FAQ</span>
      <span onClick={() => navigate("/contact")}>Contact</span>
    </div>
  )
}

export default TopNavbar