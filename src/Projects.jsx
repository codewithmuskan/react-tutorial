import React , { useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import p from './Images/p.jpg';
import './Navbar.css';

const Project=()=>{
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
        <h1 class="greeting-text"  >PROJECTS</h1>
        
        <div className="text">
        <p className="greeting-texta-p subTitle">My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.</p>
        <div className='mt-3'>
            <a href="https://github.com/codewithmuskan" className="btn" target="_blank" >More Projects</a>
        </div>
        </div></div>
        <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center flex-column">
            <img src={ p } className="img-fluid animated" alt="error loading"/>
       </div></div></div></div></div></section></div>
       <footer className="f" >
  <h5 >Made With 🧡 by Muskan Katiyar</h5>
</footer>
      
   </>
    )
}
export default  Project;