import "./hero.css";
import login from "../Login";
import Footer from "../Footer/footer";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";



function Hero() {

    const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);


  return (
    <div className="main">
  
      <div id="home" className="Home">


        <img className="car1" src="Home_Image.png" alt="Car 1" />
        <img className="air" src="air.png" alt="Air" />
        <img className="black" src="black.png" alt="Black" />

        <h3 className="title">
          Car<span className="ly">ly</span>
        </h3>
        <h3 className="title1">
          Car<span className="ly1">ly</span>
        </h3>

        <h3 className="head1">
          Maintenance made <span className="easy">easy</span>
        </h3>

          <button className="Start">Start Engine <i className="icon-go"></i>
          
          </button>
      </div>

  

 <div id="mission" className="our_mission">
        <h2 className="our">
          Our <span className="mission"> Mission</span>
        </h2>
        <hr width="20%" color="red" />

        <img className="driver" src="driver.png" alt="" />

        <p>
          At Carly, we simplify how you care for your car, ensuring it's always
          in top condition. We believe that maintaining your vehicle should be
          stress-free, affordable, and tailored to your needs. Our platform
          tracks your car’s kilometers, informs you of the next maintenance and
          gives you accurate cost estimates. At Carly, we strive to make your
          relationship with your car smooth and worry-free, allowing you to
          focus more on the road ahead. Whether you're a DIY enthusiast or
          prefer professional services, Carly helps you stay connected with your
          car ensuring every drive is safe and enjoyable.
        </p>
      </div>
       

      <div id="services" className="services">


    <h2 className="ours">Explore <span className="services1">Our Features</span></h2> 
    <hr className="serhr" width="20%" color="red" />

   
    <div className="service1">
        <img className="service1i" src="cost.png" alt="service1" />
        <h3 className="service1h"> <span className="f">Mileage</span> Tracking</h3>
        <p className="service1p">Track your car's kilometers and receive reminders for your next maintenance.</p>
        </div>

        <div className="service2">
        <img className="service2i" src="maintainance.png" alt="service2" />
        <h3 className="service2h"><span className="f">Maintenance</span> Schedule</h3>
        <p className="service2p">Receive alerts for upcoming maintenance and schedule appointments with local service providers.</p>
        </div>

        <div className="service3">
        <img className="service3i" src="chat.png" alt="service3" />
        <h3 className="service3h"><span className="f">Cost</span> Estimates</h3>
        <p className="service3p">Get accurate cost estimates for maintenance and repairs based on your car's make and model.</p>
        </div>

        <div className="service4">
        <img className="servicei" src="DIY.png" alt="service4" />
        <h3 className="service4h"><span className="f">Online</span>  Consultation </h3>
        <p className="service4p">View your car's service history and keep track of all maintenance performed.</p>
        </div>


</div>

<div id="how" className="how">
    <h2 className="howit"> <span className="f">How</span> It Works </h2>
    <hr className="howhr" width="20%" color="red" />

    <div className="number1 number">
        1
    </div>

<h2 className="step1">Sign Up and Add Your Car Details</h2>
<p className="step1p">Create your Carly account and add details about your car’s make and model to get started.</p>
<button>
    <span className="box">
       Let's Take Care of Your Car
    </span>
</button>

    <hr className="splitter" width="20%" color="red" />
    <div className="number2 number">
        2
        </div>
    <h2 className="step2">Relax and Access Maintenance Tips</h2>
    <p className="step2p">Relax knowing that Carly has your car’s care covered with personalized maintenance schedules, DIY guides, and cost estimates..

</p>
</div>

<div id="faq" className="faq">

    <h2 className="faqh"> <span className="faqspan"> Frequently</span> Asked Questions</h2>
    <hr className="faqhr" width="20%" color="red" />




    <div className="container">
  <details>
  <summary>1. What is Carly, and how can it help me with my car maintenance?</summary>
  <div>
  Carly is a comprehensive car maintenance platform designed to make managing your car’s health easy. We offer personalized maintenance schedules, cost estimates, DIY guides, and expert consultations, all tailored to your car’s make and model.

  </div>

</details>
</div>


<div className="container2">
    <details>
    <summary>2. How do I sign up and get started?</summary>
    <div>
    Simply click on the “Sign Up” button and create an account. Once registered, add details about your car, like the make, model, and year, so Carly can provide you with personalized recommendations.
    
    </div>
    </details>
</div>

<div className="container3">
    <details>
    <summary>3. How does Carly provide tailored maintenance recommendations?</summary>
    <div>
    Carly uses the information you provide about your car to create a customized maintenance plan. Our recommendations are based on industry standards and specific requirements for each make and model.
    
    </div>
    </details>
</div>

<div className="container4">
    <details>
    <summary>4. Can I use Carly for any car model and year?</summary>
    <div>
    Unfortuntely, Due to Lack of fund Carly is not compatible with most car models and years. We applogize for that and want to guarentee that we are always devloping our services.
    
    </div>
    </details>

</div>

<div className="container5">
    <details>
    <summary>5. Is there a fee for consulting with an expert through Carly?
</summary>
    <div>
    Some consultations may require a small fee depending on the expert service chosen. Basic features and DIY guides are free, but you can choose to book a detailed session with a certified mechanic for expert guidance.
    
    </div>
    </details>
</div>

<div className="container6">
    <details>
    <summary>6. Can I book a service appointment directly through Carly?
</summary>
    <div>
    Yes, Carly makes it easy to schedule service appointments with trusted mechanics in your area. Book online through the platform to save time and keep your car in great shape.
    
    </div>
    </details>
</div>

<div className="container7">
    <details>
    <summary>7. What’s included in the DIY guides? Are they beginner-friendly?
</summary>
    <div>
    Our DIY guides cover a variety of basic maintenance tasks, such as changing the oil, checking tire pressure, and more. They are written in simple steps with beginners in mind, so you can confidently take care of your car.
    
    </div>
    </details>
</div>

<div className="container8" id="footer">
    <details>
    <summary>8. Is my personal information safe on Carly?

</summary  >
    <div >
    Absolutely. Carly uses secure servers and encryption to protect your personal information, and we are committed to maintaining the privacy and security of all user data.    
    </div>
    </details>
</div>

<Footer />
</div>

</div>


  );
}

export default Hero;
