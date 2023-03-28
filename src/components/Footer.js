import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram,BsWhatsapp} from "react-icons/bs";
const Footer = () => {
  return <>
  {/* 1st sec starts here */}
    {/* <footer className='py-4 footer-1'>
      <div className="container-xxl">
      <div className="row align-items-center">
        <div className="col-5">
        <div className="footer-top-data d-flex gap-30 align-items-center">
          <img src="images/newsletter.png" alt="newsletter" />
          <h2 className='mb-0 text-white'>Sign Up For NewsLetter</h2>
        </div>
        </div>
        <div className="col-7">
        <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2 " id="basic-addon2">
                  Subscribe
                </span>
              </div>
        </div>
        
      </div>

      </div>
    </footer> */}

    {/* 2nd sec starts here */}
    <footer className='py-4 footer'>
<div className="container-xxl  ">
  <div className="row ">
    <div className="col-3 element">
      <h4 className='text-white mb-4'>Contact Us</h4>
      <div>
        <address className='text-white fs-6'>
        National Institute of Technology,Patna<br />
Bihar (800005), India 
          
        </address>
        <a href="tel:+91 06122371715" className="mt-3 d-block mb-1 text-white">
        +91-06122371715
        </a>
        <a href="mailto:alumni@nitp.ac.in" className="mt-2 d-block mb-0 text-white">
        alumni@nitp.ac.in
        </a>
        <div className="social_icons d-flex align-items-center gap-30 mt-4">
          <a className='text-white'  href="#">
            <BsLinkedin className=' fs-4'/>
          </a>
          <a className='text-white'  href="#">
            <BsYoutube className=' fs-4'/>
          </a>
          <a className='text-white' href="#">
           <BsInstagram className=' fs-4'/>
          </a>
          <a className='text-white'  href="#">
            <BsWhatsapp className=' fs-4'/>
          </a>
        </div>
      </div>
    </div>
    <div className="col-2 element">
      <h4 className='text-white mb-4 elements'>Extra Links</h4>
      <div>
      <div className='footer-links d-flex flex-column '>
<Link className="text-white py-2 mb-1">Privacy Policy</Link>
<Link className="text-white py-2 mb-1">Refund Policy</Link>

<Link className="text-white py-2 mb-1">Terms & Conditions</Link>
<Link className="text-white py-2 mb-1">Blogs From Alumni</Link>
  </div>
      </div>
    </div>
<div className="col-3 element">
  <h4 className='text-white mb-4'>Relations & Talks</h4>
  <div>
  <div className='footer-links d-flex flex-column '>
<Link className="text-white py-2 mb-1">Alumni-Student Relations</Link>
<Link className="text-white py-2 mb-1">Alumni Talks</Link>
<Link className="text-white py-2 mb-1">Alumni Mentorship</Link>
<Link className="text-white py-2 mb-1">Alumni-Student Interactions</Link>

  </div>
  </div>
</div>
<div className="col-2 element">
  <h4 className='text-white mb-4'>Resources & Events</h4>
  <div>
  <div className='footer-links d-flex flex-column '>
<Link className="text-white py-2 mb-1">Upcoming Events</Link>
<Link className="text-white py-2 mb-1">Events From Past</Link>
<Link className="text-white py-2 mb-1">Institute Publications</Link>
<Link className="text-white py-2 mb-1">Associated Bodies</Link>
</div>
  </div>
</div>

<div className="col-2 element">
  <h4 className='text-white mb-4'>Teams</h4>
  <div>
  <div className='footer-links d-flex flex-column '>
<Link className="text-white py-2 mb-1">Director</Link>
<Link className="text-white py-2 mb-1">Dean(Alumni)</Link>
<Link className="text-white py-2 mb-1">Web Team(Alumni)</Link>
</div>
  </div>
</div>

  </div>
</div>

    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className='text-center mb-0 text-white'> Copyright &copy; {new Date().getFullYear()}|Alumni Association Of NIT Patna|All Rights Reserved</p>
          </div>
        </div>
      </div>
      </footer>
   
  </>
   
  
}

export default Footer;