import React, { useEffect } from 'react';


import img from './Images/a.jpg';
import x from './Images/d.jpg';
import k from './Images/k.jpg';
import f from './Images/f.jpg';
import h from './Images/h.jpg';
import { FaGithubSquare } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaReact } from "react-icons/fa";
import { FaCss3  } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { FaNodeJs,FaAdobe,FaFigma } from 'react-icons/fa';
import { FaJava,FaNpm,FaYarn ,FaGetPocket,FaAws,FaFirefoxBrowser,FaMdb} from 'react-icons/fa';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';



const Home=()=>{
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
        <h1 class="greeting-text"  >MUSKAN KATIYAR</h1>
        <div className="text">
        <p className="greeting-text-p subTitle">A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
        <div className="social-media">
                <ul>
                    <li><a className="a" href ="https://github.com/codewithmuskan" target="_blank">< FaGithubSquare /></a></li>
                    <li><a  href ="https://www.facebook.com/profile.php?id=100070022528325" target="_blank">< FaFacebook /></a></li>
                    <li><a href ="https://www.linkedin.com/in/muskan-katiyar-9b4220216" target="_blank">< FaLinkedin/></a></li>
                    <li><a className="i" href="https://www.instagram.com/codewithnn/" target="_blank">< FaInstagram/></a></li>
                </ul>
            </div>
            </div>
            </div>
            <div className='mt-3'>
            <a href="https://github.com/codewithmuskan" className="btn" target="_blank" >⭐ Star Me On Github</a>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center flex-column">
            <img src={ img } className="img-fluid animated" alt="error loading"/>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
            </div>
            <section id="header" className="d-flex align-items-center"  >
            <div className="container-fluid nav_bg">
         <div className="row">
         <div className="col-10 mx-auto">
         <div className="row">
         <h1 className="e" data-aos="zoom-in">WHAT I DO</h1>
            <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={ x }class="img-fluid rounded-start" data-aos="fade-right" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title" data-aos="fade-left">MOBILE APPLICATION DEVELOPMENT</h1>
        <li className="b" data-aos="fade-left">< FaReact /><span className="a2" data-aos="fade-left">< FaFacebook /></span><span className="a3" data-aos="fade-left">< FaGithubSquare /></span></li>
        <p class="card-text"  data-aos="fade-left">✨ Developing highly scalable mobile applications solving some real world problems</p>
        <p class="card-text" data-aos="fade-left">✨ Experience of working with Flutter, React Native & Android applications</p>
        <p class="card-text" data-aos="fade-left">✨Specialized in Native App Development using Flutter or React Native</p>
       
      </div>
    </div>
  </div>
</div> </div></div></div></div>
</section>  
  <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
         <div className="row">
         <div className="col-10 mx-auto">
         <div className="row">
         {/* <h1 className="e">FULL STACK DEVELOPMENT</h1> */}
            <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={ k }class="img-fluid rounded-start"  data-aos="fade-right" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title" data-aos="fade-left">FULL STACK DEVELOPMENT</h1>
        <li className="b1" data-aos="fade-left">< FaCss3 /><span className="b2" data-aos="fade-left">< FaHtml5 /></span><span className="b3" data-aos="fade-left">< FaSass /></span><span className="b4" data-aos="fade-left">< FaJava /></span><span className="b5" data-aos="fade-left">< FaReact /></span><span className="b6" data-aos="fade-left">< FaNodeJs /></span><span className="b7" data-aos="fade-left">< FaNpm /></span><span className="b8" data-aos="fade-left">< FaYarn /></span></li>
        <p class="card-text" data-aos="fade-left">✨Building responsive website front end using React-Redux</p>
        <p class="card-text" data-aos="fade-left">✨ Deploying the website on Firebase, Heroku & AWS</p>
        <p class="card-text" data-aos="fade-left">✨Creating application backend in Node, Express & Flask</p>
       
      </div>
    </div>
  </div>
</div> </div></div></div></div>
</section>  
           
          <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
        <div className="row">
       <div className="col-10 mx-auto">
       <div className="row">
          {/* <h1 className="e">CLOUD INFRA-ARCHITECTURE</h1>  */}
            <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={ f }class="img-fluid rounded-start" data-aos="fade-right" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title" data-aos="fade-left">CLOUD INFRA-ARCHITECTURE</h1>
        <li className="b1" data-aos="fade-left">< FaGetPocket /><span className="b2" data-aos="fade-left">< FaMdb /></span><span className="b3" data-aos="fade-left">< FaAws /></span><span className="b4" data-aos="fade-left">< FaFirefoxBrowser/></span><span className="b7" data-aos="fade-left">< FaNpm /></span></li>
        <p className="card-text" data-aos="fade-left">✨Experience working on multiple cloud platforms</p>
        <p className="card-text" data-aos="fade-left">✨Hosting and maintaining websites on virtual machine instances along with integration of databases</p>
        <p className="card-text" data-aos="fade-left">✨Deploying deep learning models on cloud to use on mobile devices</p>
       <p className="card-text" data-aos="fade-left">✨ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS</p>
      </div>
    </div> 
  </div>
</div> </div></div></div></div>
</section> 
           
           <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
         <div className="row">
         <div className="col-10 mx-auto">
         <div className="row">
         {/* <h1 className="e">CLOUD INFRA-ARCHITECTURE</h1> */}
            <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={ h }class="img-fluid rounded-start" data-aos="fade-right" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title" data-aos="fade-left">UI/UX DESIGN</h1>
        <li className="b1" data-aos="fade-left">< FaAdobe /><span className="b2" data-aos="fade-left">< FaFigma/></span></li>
        <p className="card-text" data-aos="fade-left">✨Designing highly attractive user interface for mobile and web applications</p>
        <p className="card-text" data-aos="fade-left">✨Customizing logo designs and building logos from scratch</p>
        <p className="card-text" data-aos="fade-left">✨Creating the flow of application functionalities to optimize user experience</p>
     
      </div>
    </div>
  </div>
</div> </div></div></div></div>
</section> 
<footer  >
  <h5 >Made With 🧡 by Muskan Katiyar</h5>
</footer> 
            
        </>
    )
}
export default Home;
