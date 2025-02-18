import React, { useState } from 'react';
import "../styles/bottomContactForm.css";
import axios from "axios";

function BottomContactForm() {
  const [inputMessage, setInputMessage] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputMail, setInputMail] = useState("");
  const [resultArea, setResultArea] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Name validation
    if (inputName.length < 2 || inputName.length > 50) {
      setResultArea("Name must be between 2 and 50 characters.");
      return;
    }

    // Email validation
    if (!validateEmail(inputMail)) {
      setResultArea("Please enter a valid email address.");
      return;
    }

    // Message validation
    if (inputMessage.length < 10 || inputMessage.length > 500) {
      setResultArea("Your message must be between 10 and 500 characters.");
      return;
    }

    try {
      const messageObject = {
        inputName,
        inputMail,
        inputMessage
      };
      console.log(messageObject);
      const res = await axios.post("/api/save-message", messageObject);
      setResultArea(res.data.message);
    } catch (error) {
      if (error.response) {
        setResultArea(error.response.data.message);
        console.log(error.message);
      } else {
        setResultArea("An error occurred while sending your message. Please send an email directly.");
        console.log(error.message);
      }
    }
  };

  return (
    <div>
      <form className='contactFormArea' onSubmit={handleSubmit}>
        <div className='formUpperInputs'>
          <input 
            className='formInputs' 
            type='text' 
            placeholder='Name-Surname'
            value={inputName} 
            onChange={(e) => setInputName(e.target.value)} 
            required 
          />
          <input 
            className='formInputs' 
            type='text' 
            placeholder='E-mail'
            value={inputMail} 
            onChange={(e) => setInputMail(e.target.value)} 
            required 
          />
        </div>

        <div className='formTextArea'>
          <textarea 
            cols="30" 
            rows="10" 
            placeholder="Your message"
            value={inputMessage} 
            onChange={(e) => setInputMessage(e.target.value)} 
            required
          ></textarea>
        </div>

        <div className='formButtonArea'>
          <button type="submit" className='button1111'>Send</button>
        </div>
        <div>{ resultArea }</div>
      </form>
    </div>
  )
}

export default BottomContactForm;
