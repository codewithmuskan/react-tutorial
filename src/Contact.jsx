import React , { useEffect }from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import logo from './Images/l.png';
import ad from './Images/ad.jpg';
import { FaGithubSquare } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


const Contact=()=>{
            useEffect(()=>{
              Aos.init({ duration: 1800 });
            },[]); 
            return(
                <>
                 <div className="one" data-aos="zoom-in"  >
                <section id="header" className="d-flex align-items-center">
                 <div className="container-fluid nav_bg">
                 <div className="row">
                 <div className="col-10 mx-auto">
                 <div className="row">
                 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column " >   
                <h1 class="greeting-text"  >CONTACT ME</h1>
                
                <div className="text">
                <p className="greeting-texta-p subTitle">I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Competitive Programming, Web Development, Mobile App Development, React, React Native, Flutter, Android, Cloud and Opensource Development.</p>
                <div className="social-media">
                <ul>
                    <li><a className="a" href ="https://github.com/codewithmuskan" target="_blank">< FaGithubSquare /></a></li>
                    <li><a  href ="https://www.facebook.com/profile.php?id=100070022528325" target="_blank">< FaFacebook /></a></li>
                    <li><a href ="https://www.linkedin.com/in/muskan-katiyar-9b4220216" target="_blank">< FaLinkedin/></a></li>
                    <li><a className="i" href="https://www.instagram.com/codewithnn/" target="_blank">< FaInstagram/></a></li>
                </ul>
            </div>
            <div className='mt-3'>
            <a href="https://github.com/codewithmuskan" className="btn" target="_blank" >See My Resume</a>
        </div>
                </div></div>
        <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center flex-column">
            <img src={ logo } className="img-fluid animated" alt="error loading"/>
       </div></div></div></div></div></section></div>
       <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
         <div className="row">
         <div className="col-10 mx-auto">
         <div className="row">
         {/* <h1 className="e">FULL STACK DEVELOPMENT</h1> */}
            <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={ ad }class="img-fluid rounded-start"  data-aos="zoom-in" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title" data-aos="zoom-in">ADDRESS</h1>
        
        <p class="card-text" data-aos="zoom-in">✨120, Civil Lines, Behind ABC Colony, R.D.A. , Jail Garden Road, Bareilly, Uttar Pradesh, 243202</p>
        <h1 class="card-title" data-aos="zoom-in">Phone Number</h1>
        <p class="card-text" data-aos="zoom-in">+9876556789</p>
        <div className='mt-3'>
            <a href="https://goo.gl/maps/cv4fDGeLFQ8U5M788" className="btn" target="_blank" >Visit On Google Maps</a>
        </div>
       
      </div>
    </div>
  </div>
</div> </div></div></div></div>
</section> 
 <footer className="f" >
  <h5 >Made With 🧡 by Muskan Katiyar</h5>
</footer> 
</>
    )
}
export default Contact;