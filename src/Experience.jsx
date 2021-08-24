import React,{ useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import e from './Images/e.jpg';
import './Navbar.css';
import z from './Images/z.jpg';
import h1 from './Images/h1.png';

const Experience=()=>{
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
        <h1 class="greeting-text"  >EXPERIENCE🎊</h1>
        <h3 className="w">Work, Internship and Volunteership</h3>
        <div className="text">
        <p className="greeting-texta-p subTitle">I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.</p>
        <div className="social-media">
                <ul>
                    {/* <li><a className="a" href ="https://github.com/codewithmuskan" target="_blank">< FaGithubSquare /></a></li>
                    <li><a  href ="https://www.facebook.com/profile.php?id=100070022528325" target="_blank">< FaFacebook /></a></li>
                    <li><a href ="https://www.linkedin.com/in/muskan-katiyar-9b4220216" target="_blank">< FaLinkedin/></a></li>
                    <li><a className="i" href="https://www.instagram.com/codewithnn/" target="_blank">< FaInstagram/></a></li> */}
                </ul>
            </div>
            </div>
            </div>
            {/* <div className='mt-3'>
            <a href="https://github.com/codewithmuskan" className="btn" target="_blank" >⭐ Star Me On Github</a>
        </div> */}
        <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center flex-column">
            <img src={ e } className="img-fluid animated" alt="error loading"/>
            </div>
            </div>
            </div>
            </div>
           </div>
            </section>
            </div>
            <div className="one" data-aos="zoom-in"  >
        <section id="header" className="d-flex align-items-center">
         <div className="container-fluid nav_bg">
         <div className="row">
         <div className="col-10 mx-auto">
         <div className="row">
         {/* <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column " >  */}
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Competitive Programming
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong><img src={ z } alt=""/></strong> chirst123 <code><a className="c1" href="https://www.codechef.com/users/chirst123" target="_blank">Codechef</a></code>
        <strong><img src={ h1 } alt=""/></strong>@muskan730 <code><a className="c1" href="https://www.hackerearth.com/@muskan730" target="_blank">Hackerearth</a></code>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Volunteerships
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong></strong> <code></code>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Internships
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong></strong> <code></code>
      </div>
    </div>
  
</div></div></div></div></div></div></section></div>
 <footer className="f" >
  <h5 >Made With 🧡 by Muskan Katiyar</h5>
</footer> 
        </>
    )
}
export default Experience ;