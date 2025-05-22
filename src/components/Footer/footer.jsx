import "./footer.css";
import React from "react";
import { useForm, ValidationError } from '@formspree/react';


function Footer() {
    const [state, handleSubmit] = useForm("xbljyjbe");
  if (state.succeeded) {
      return (
        <div className="footer">

      <h1 className="ftitile">Carly</h1>
      <p className="story">
        Carly was created out of a passion for cars and a vision to simplify
        vehicle maintenance. We understand the challenges car owners face when
        it comes to tracking mileage, scheduling maintenance, and managing
        costs.
      </p>

  <p className="Address">Thomas Mann Ut 41, Debrecen, Hungary, Europe</p> <i className="icon-location"></i>
      <p className="email"><a href="mailto:pixel@mailbox.unideb.hu?subject=Hello&body=This App Has Been Developed By Omar Ahmed">pixel@mailbox.unideb.hu</a></p> <i className="icon-envelope"></i>
      <p className="phone "><a href="tel:+36202984780">+36202984780</a></p> <i className="icon-phone"></i>



<div className="contact"> 
      <a href="https://www.facebook.com/miro.king.3367/" className="icon-facebook icon"></a>
      <a href="https://instagram.com/iamomarkhaledd?igshid=MjEwN2IyYWYwYw==" className="icon-instagram-with-circle icon"></a>
      <a href="https://www.linkedin.com/in/omar-k-ahmed/" className="icon-linkedin-with-circle icon"></a>
      <a href="https://mobile.twitter.com/omark_ahmed7" className="icon-twitter-with-circle icon"></a>



      <p className="footer-text">Thank you for visiting our site—drive with confidence and reach out if you have any questions or need assistance. Follow us on social media to stay updated on new features and helpful tips!"</p>
      <h2 className="feel">Feel Free To Get In Touch</h2>


      <p className="thanks"> Thank You! We Have Recieved Your Message.</p>;

    

      </div>

      <p className="copyright"> © 2024 Carly - All Rights Reserved </p>

    </div>
      )
      
  }

  return (
    <div className="footer">

      <h1 className="ftitile">Carly</h1>
      <p className="story">
        Carly was created out of a passion for cars and a vision to simplify
        vehicle maintenance. We understand the challenges car owners face when
        it comes to tracking mileage, scheduling maintenance, and managing
        costs.
      </p>

  <p className="Address">Thomas Mann Ut 41, Debrecen, Hungary, Europe</p> <i className="icon-location"></i>
      <p className="email"> <a href="mailto:pixel@mailbox.unideb.hu?subject=Hello&body= This App has Been Developed By Omar Ahmed">pixel@mailbox.unideb.hu</a></p> <i className="icon-envelope"></i>
      <p className="phone "><a href="tel:+36202984780">+36202984780</a></p> <i className="icon-phone"></i>



<div className="contact"> 
<a href="https://www.facebook.com/miro.king.3367/" className="icon-facebook icon"></a>
      <a href="https://instagram.com/iamomarkhaledd?igshid=MjEwN2IyYWYwYw==" className="icon-instagram-with-circle icon"></a>
      <a href="https://www.linkedin.com/in/omar-k-ahmed/" className="icon-linkedin-with-circle icon"></a>
      <a href="https://mobile.twitter.com/omark_ahmed7" className="icon-twitter-with-circle icon"></a>


      <p className="footer-text">Thank you for visiting our site—drive with confidence and reach out if you have any questions or need assistance. Follow us on social media to stay updated on new features and helpful tips!"</p>
      <h2 className="feel">Feel Free To Get In Touch</h2>
     
      <form action="" onSubmit={handleSubmit}>

        <label htmlFor="" className="emaillabel">Email:</label>
        <input name="email" type="email" required placeholder="example@gmail.com" /> <br />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        <label className="message" htmlFor="">Message:</label>
        <textarea required name="message" id="" cols="10" rows="3" placeholder="Enter Your Message"></textarea>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        <button type="submit" disabled={state.submitting} className="send">Send</button>

        </form>


      </div>

      <p className="copyright"> © 2024 Carly - All Rights Reserved </p>
    </div>
  );
}

export default Footer;
