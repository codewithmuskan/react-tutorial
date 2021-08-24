import React,{ useEffect }  from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import m from './Images/m.jpg';
import g from './Images/g.jpg'
import { FaDiscord, FaHtml5, FaJava } from 'react-icons/fa';
import './Navbar.css';

const Education=()=>{
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
        <h1 class="greeting-text" >EDUCATION</h1>
        <div className="text">
       <h3 >BEST QUALIFICATIONS AND CERTIFICATIONS</h3>
         <div className="social-media">
                <ul>
                    <li><a className="a" href ="https://github.com/codewithmuskan" target="_blank">< FaDiscord /></a></li>
                     <li><a  href ="https://www.facebook.com/profile.php?id=100070022528325" target="_blank">< FaHtml5 /></a></li>
                     <li><a className="m" href ="https://www.linkedin.com/in/muskan-katiyar-9b4220216" target="_blank">< FaJava /></a></li>
                    {/* <li><a className="i" href="https://www.instagram.com/codewithnn/" target="_blank">< FaInstagram/></a></li> */}  
                </ul>
            </div> 
            </div>
            </div>
            {/* <div className='mt-3'>
            <a href="https://github.com/codewithmuskan" className="btn" target="_blank" >⭐ Star Me On Github</a>
        </div> */}
        <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center flex-column">
            <img src={ m } className="img-fluid animated" alt="error loading"/>
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
         <h1 className="e" data-aos="zoom-in">DEGREES RECIEVED</h1>
         <div class="card">
  <div class="card-header " data-aos="zoom-in">
  <h1>University Institute of Engineering and Technology, C.S.J.M. University, Kanpur</h1>
  </div>
  <div class="card-body">
    <h5 class="card-title"  data-aos="zoom-in">B.Tech. in Computer Science And Engineering</h5>
    <p class="card-text"  data-aos="zoom-in">🔸I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.</p>
    <p class="card-text"  data-aos="zoom-in">🔸Apart from this, I have done courses on Full Stack Web Development, Mobile App Development, Cloud Computing and Deep Learning.</p>
    <a href="http://www.uietkanpur.com/" target="_blank" class="btn btn-primary">Visit Website</a>
  </div>
</div>
         </div></div></div></div></section>
         <footer  >
  <h5 >Made With 🧡 by Muskan Katiyar</h5>
</footer> 
   </>
    )
}
export default Education;