import React from 'react'
import './Contact.css'
import messageicon from '../../Images/msg-icon.png'
import mailicon from '../../Images/mail-icon.png'
import phoneicon from '../../Images/phone-icon.png'
import locationicon from '../../Images/location-icon.png'
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e834ae61-3129-4760-98ca-5e83669bbfde");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className='contact-us'>
            <h3>Send us a Message. <img src={messageicon} alt=''></img> </h3>
            <p>Feel free to reach out through contact form or find our contact
            information below. Your feedback question and suggestion are important
            to us as we provide the exceptional service to our university community.</p>
            <ul>
                <li> <img src={mailicon} alt=''></img> 6396dhruv@gmail.com</li>
                <li> <img src={phoneicon} alt=''></img> 8212707374</li>
                <li> <img src={locationicon} alt=''></img> Ave Cambridge <br /> 23452, United State.</li>
            </ul>
        </div>
        <div className='contact-us'>
          <form className='form' onSubmit={onSubmit}>
                <input type='text' className='msg' placeholder='Your Name' name='your_name' required></input>
                <input type='phone' className='msg' placeholder='Your Phone' name='your_email' required></input>
                <textarea className='msg' name='message' rows='6' placeholder='Your Message' required></textarea>
                <button type='submit' value='Send' className='btn'>Submit</button>
          </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
