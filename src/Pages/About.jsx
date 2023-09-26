import React from "react";
import Header from "../Components/Header";
import { InfinitySpin } from 'react-loader-spinner';
import { useState, useEffect } from 'react';
const About = () => {

  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
      const timer = setTimeout(() => {
          setShowLoader(false);
      }, 1000);
      return () => clearTimeout(timer);
  }, []);

  const targets = [65, 75, 65, 80, 85, 85, 45, 85, 90];
  let currentProgress = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  function increaseProgress() {
    for (let i = 0; i < targets.length; i++) {
      if (currentProgress[i] < targets[i]) {
        currentProgress[i] += 1;
        document.getElementById(
          `progress${i}`
        ).style.width = `${currentProgress[i]}%`;
        document.getElementById(
          `percentage${i}`
        ).textContent = `${currentProgress[i]}%`;
      }
    }
    if (Math.min(...currentProgress) === 100) {
      clearInterval(progressInterval);
    }
  }

  let progressInterval = setInterval(increaseProgress, 100);

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

      <section className="aboutContainer lg:flex lg:justify-center lg:px-[15rem] px-4 w-full space-x-24 mt-10">
        <section className=" lg:w-[50%]">
          <h3 className="capitalize lg:text-[2rem] my-4">about me</h3>
          <p className="  text-[15px] leading-[25px]">
            Hello! My name is Boniface Paul and I'm a passionate Frontend
            Developer with over [2 years] of experience in crafting
            pixel-perfect and user-centric websites and applications. My
            expertise lies in HTML, CSS, JavaScript, TailwindCss and the latest
            frontend frameworks like React and Nextjs. Beyond the code, I'm an
            advocate for user-friendly, responsive, and accessible design,
            ensuring that every user, regardless of device or ability, has an
            optimal viewing experience. I'm always eager to take on new
            challenges, learn, and grow. If you're seeking a dedicated developer
            who can translate your vision into a seamless digital experience,
            let's connect and make web magic together!
          </p>
          <section className="aboutBtn flex mt-12 space-x-12">
            <button class="button abtDesoc " type="button">
              <span class="button__text">Download Cv</span>
              <span class="button__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                  id="bdd05811-e15d-428c-bb53-8661459f9307"
                  data-name="Layer 2"
                  class="svg"
                >
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                </svg>
              </span>
            </button>
            <button class="button  abtDesoc" type="button">
              <span class="button__text">Hire Me</span>
              <span class="button__icon t">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM20 13H4V19H20V13ZM20 7H4V11H7V9H9V11H15V9H17V11H20V7ZM9 3V5H15V3H9Z"></path>
                </svg>
              </span>
            </button>
          </section>
          <div className="socialLinks mt-[4rem]">
            <section className="flex space-x-12">
              <li class="border rounded-full border-gray-300 p-4 abtDesoc hover:text-blue-600   hover:border-blue-600 transform hover:scale-105 transition-transform duration-300">
                <span>
                  <i class="ri-linkedin-box-fill"></i>
                </span>
              </li>
              <li class="border rounded-full border-gray-300 p-4 abtDesoc hover:text-blue-600   hover:border-blue-600 transform hover:scale-105 transition-transform duration-300  ">
                <span>
                  <i class="ri-mail-line"></i>
                </span>
              </li>
              <li class="border rounded-full border-gray-300 p-4 abtDesoc  hover:text-blue-600   hover:border-blue-600 transform hover:scale-105 transition-transform duration-300">
                <span>
                  <i class="ri-twitter-x-line"></i>
                </span>
              </li>
              <li class="border rounded-full border-gray-300 p-4 abtDesoc hover:text-blue-600   hover:border-blue-600 transform hover:scale-105 transition-transform duration-300">
                <span>
                  <i class="ri-github-fill"></i>
                </span>
              </li>
            </section>
          </div>
        </section>
        <section className="progressSkills lg:w-[50%] h-[30rem] text-[15px] px-4 lg:block  hidden">
          <h3 className="capitalize text-[2rem] my-4">skills</h3>

          <section className="skillCategory">
            <div class="progress-container">
              <div class="progress-bar">
                <div class="progress" id="progress0"></div>
              </div>
              <span className="capitalize mx-1 ">nextjs:</span>
              <span id="percentage0">0%</span>
            </div>
            <div class="progress-container">
              <div class="progress-bar">
                <div class="progress" id="progress1"></div>
              </div>
              <span className="capitalize mx-1">reactjs:</span>{" "}
              <span id="percentage1">0%</span>
            </div>
            <div class="progress-container">
              <div class="progress-bar">
                <div class="progress" id="progress2"></div>
              </div>
              <span className="capitalize mx-1 ">redux:</span>{" "}
              <span id="percentage2">0%...</span>
            </div>
            <div class="progress-container">
              <div class="progress-bar">
                <div class="progress" id="progress3"></div>
              </div>
              <span className="capitalize mx-1"> javascript:</span>{" "}
              <span id="percentage3">0%</span>
            </div>
            <div class="progress-container">
              <div class="progress-bar">
                <div class="progress" id="progress4"></div>
              </div>
              <span className="capitalize mx-1 ">github:</span>
              <span id="percentage4">0%</span>
            </div>
            <div class="progress-container ">
              <div class="progress-bar">
                <div class="progress" id="progress5"></div>
              </div>
              <span className="capitalize mx-1">tailwind:</span>{" "}
              <span id="percentage5">0%</span>
            </div>
            <div class="progress-container ">
              <div class="progress-bar">
                <div class="progress" id="progress6"></div>
              </div>
              <span className="capitalize mx-1">figma</span>{" "}
              <span id="percentage6">0%</span>
            </div>
            <div class="progress-container ">
              <div class="progress-bar">
                <div class="progress" id="progress7"></div>
              </div>
              <span className="capitalize mx-1">CSS:</span>{" "}
              <span id="percentage7">0%</span>
            </div>
            <div class="progress-container ">
              <div class="progress-bar">
                <div class="progress" id="progress8"></div>
              </div>
              <span className="capitalize mx-1">html:</span>{" "}
              <span id="percentage8">0%</span>
            </div>
          </section>
        </section>


        
      </section>
    </>
  );
};

export default About;
