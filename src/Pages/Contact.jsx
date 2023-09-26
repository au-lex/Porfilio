import React from 'react'
import  { useState, useEffect } from 'react';
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InfinitySpin } from 'react-loader-spinner';

const Contact = () => {

  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
      const timer = setTimeout(() => {
          setShowLoader(false);
      }, 1000);
      return () => clearTimeout(timer);
  }, []);

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  const isValidForm = () => {
    if (!userName.trim()) {
      toast.error("Name cannot be empty.");
      return false;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(userEmail)) {
      toast.error("Please provide a valid email.");
      return false;
    }

    if (!message.trim()) {
      toast.error("Message cannot be empty.");
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (isValidForm()) {
      emailjs.sendForm('service_6gh875j', 'template_5stmg6j', e.target, 'Yd4_CAXX5Xj7EDYJb')
        .then((result) => {
          toast.success("Email sent successfully!", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
          setUserName('');
          setUserEmail('');
          setMessage('');
        }, (error) => {
          toast.error("Failed to send email. Please try again later.", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        });
    }
  };
  return (
    <>

{showLoader ? (
                <div className="loader ">
                    <InfinitySpin
                        height={400}
                        width={400}
                        radius={5}
                        color="#2f84e4"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                    />
                </div>
            ) : (
                <div>
                  
                </div>
            )}

    <Header />

    <section className=''>
      <h1 className='text-center text-[2rem] capitalize my-8 '>contact us </h1>

    

      <form className="inputBox  flex justify-center  flex-wrap lg:space-x-14 " onSubmit={sendEmail}>
        
        {/* <form className="contact-form" onSubmit={sendEmail}> */}
          

        <div className=''>
      <input 
       name="from_name" 
       value={userName} 
       onChange={(e) => setUserName(e.target.value)} 
      class="placeholder:italic placeholder:text-slate-400 block bg-white  border lg:w-[30rem] 
      
       border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm w-full focus:outline-none
        focus:border-sky-500
       focus:ring-sky-500 focus:ring-1 sm:text-sm"
       placeholder="Enter your name..." type="text" />

      <input
       name="from_name" 
       value={userEmail} 
       onChange={(e) => setUserEmail(e.target.value)} 
       required 
      class="placeholder:italic placeholder:text-slate-400 block bg-white  border w-full
       lg:w-[30rem] my-10
       border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500
       focus:ring-sky-500 focus:ring-1 sm:text-sm"
       placeholder="Enter your email..." type="email" />

<div className="socialLinks mt-[4rem]">
            <section className="flex space-x-12">
              <li class="border rounded-full border-gray-300 p-4  hover:text-blue-600   hover:border-blue-600 transform hover:scale-105 transition-transform duration-300">
                <span>
                  <i class="ri-linkedin-box-fill"></i>
                </span>
              </li>
              <li class="border rounded-full border-gray-300 p-4  hover:text-blue-600   hover:border-blue-600 transform hover:scale-105 transition-transform duration-300  ">
                <span>
                  <i class="ri-mail-line"></i>
                </span>
              </li>
              <li class="border rounded-full border-gray-300 p-4  hover:text-blue-600   hover:border-blue-600 transform hover:scale-105 transition-transform duration-300">
                <span>
                  <i class="ri-twitter-x-line"></i>
                </span>
              </li>
              <li class="border rounded-full border-gray-300 p-4  hover:text-blue-600   hover:border-blue-600 transform hover:scale-105 transition-transform duration-300">
                <span>
                  <i class="ri-github-fill"></i>
                </span>
              </li>
            </section>
          </div>
       </div>

       <div className='mt-[4rem]'>
         {/* <label >enter your message</label> */}
    <textarea 
      name="message" 
      value={message} 
      onChange={(e) => setMessage(e.target.value)} 
      required 
    id="textA" cols="30" rows="10"  placeholder="Enter your message..." 
     class="placeholder:italic placeholder:text-slate-400 block bg-white 
     border  
       border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm  focus:outline-none
        focus:border-sky-500 lg:w-[30rem] 
       focus:ring-sky-500 focus:ring-1 "> </textarea>
<section className='text-right my-6'>

<button
 type="submit" value="Send"
 class="bg-blue-500 hover:bg-violet-600 active:bg-violet-700 
px-10 py-4 rounded-[10px] text-slate-100 
focus:outline-none focus:ring focus:ring-violet-300 ..." >
  Send message
</button>
  </section>
       </div>

       
      <ToastContainer />
       {/* </form> */}
       </form>

       <footer>
        <section className=' bg-slate-500 lg:w-full h-[15.7rem]'>
          <nav className='flex justify-center   space-x-6  lg:space-x-64 " py-7 text-slate-300'>
            <ul  className='leading-[26px]'>
              <h3  className='text-[1.4rem] text-slate-100'>Quick links</h3>
              
              <li><Link to="/"> <span className='mr-2'><i class="ri-arrow-right-line"></i></span>Home </Link></li>
              <li><Link to="/About"> <span className='mr-2'><i class="ri-arrow-right-line"></i></span>about</Link></li>
              <li><Link to="/Project"><span className='mr-2'><i class="ri-arrow-right-line"></i></span>project</Link></li>
              <li><Link to="/Contact"><span className='mr-2'><i class="ri-arrow-right-line"></i></span>contact</Link></li>
            </ul>
            {/* <ul  className='leading-[26px]'>
              <h3  className='text-[1.4rem] text-slate-100'>Services</h3>
             
              <li> <span className='mr-2'><i class="ri-arrow-right-line"></i></span>web design</li>
              <li><span className='mr-2'><i class="ri-arrow-right-line"></i></span>web development</li>
              <li> <span className='mr-2'><i class="ri-arrow-right-line"></i></span>digital painting</li>
              <li><span className='mr-2' ><i class="ri-arrow-right-line"></i></span>graphics design</li>
            </ul> */}
            <ul  className='leading-[30px]'>
              <h3 className='text-[1.4rem] text-slate-100'>Have a queastion ?</h3>
              
              <li> <span className='mr-2'><i class="ri-map-pin-fill"></i></span>Enugu, Nigeria</li>
              <li> <span className='mr-2'><i class="ri-phone-fill"></i></span>+2348158772715</li>
              <li><span className='mr-2'><i class="ri-send-plane-fill"></i></span>Bonifacepaul500@gmail.com</li>
            </ul>
          </nav>
        </section>
       </footer>
       </section>






       
       
    </>
  )
}

export default Contact