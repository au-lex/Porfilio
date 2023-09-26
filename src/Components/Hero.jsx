import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";




const Hero = () => {

      
      
  return (

    
    <>


    
{/* mobile */}
<div>

</div>


      <section>



        <div className="bg ">

   

          <Header />
          <div  className="flex justify-center px-10 mb-[4rem] lg:hidden xl:hidden md:hidden  mt-[10rem]">



<section>


          <div  className=" 
               w-[300px] h-[300px] rounded-full ">
              
                
                <img
                  src="https://res.cloudinary.com/durbee4ln/image/upload/v1692084030/rsz_sketch1692077698481_ftwmew.png"
                  alt="profile"
                  className="w-[100%] h-[auto]  z-30 rounded-full"
                />
                
              </div>


          <figcaption className="desc pt-10 lg:hidden md:hidden xl:hidden" >
              <h2 >
                hi, i'm <br />
                <span className="text-[2.5rem] capitalize">
                  boniface paul{" "}
                </span>{" "}
                <br />
              </h2>
              <h3 className="capitalize my-2 text-[10px]">frontend developer</h3>
              <p>
                Crafting pixels into immersive experiences, where design,
              
                seamlessly meets functionality.  
                Dive into the artistry of 
                frontend mastery.
              </p>
              <section className="my-[2.8rem]">
                <button className="bg-blue-500 capitalize text-gray-100 py-2 px-2 w-[10rem] btn ">
                  <Link to = '/About'>
                  discover</Link>
                </button>
              </section>
              <div className="socialLinks mt-[2rem]">
                <section className="flex space-x-8">
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
            </figcaption>
            </section>
            </div>
          
          <section className="heroMain lg:flex  justify-center   space-x-64  mt-[7rem] hidden">
            <figure>
              
              <div  className="profile w-[400px] h-[400px] rounded-full ">
              
                
                <img
                  src="https://res.cloudinary.com/durbee4ln/image/upload/v1692084030/rsz_sketch1692077698481_ftwmew.png"
                  alt="profile"
                  className="w-[100%] h-[auto]  z-30 rounded-full"
                />
                
              </div>
            </figure>
            <figcaption className="desc pt-10" >
              <h2 >
                hi, i'm <br />
                <span className="text-[3rem] capitalize">
                  boniface paul{" "}
                </span>{" "}
                <br />
              </h2>
              <h3 className="capitalize my-2">frontend developer</h3>
              <p>
                Crafting pixels into immersive experiences, where design,
                <br />
                seamlessly meets functionality. Dive into the artistry of
                frontend mastery.
              </p>
              <section className="my-[2.8rem]">
                <button className="bg-blue-500 capitalize text-gray-100 py-2 px-2 w-[10rem] btn ">
                  <Link to = '/About'>
                  discover</Link>
                </button>
              </section>
              <div className="socialLinks mt-[8rem]">
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
            </figcaption>
          </section>
        </div>
      </section>

    

    </>
  );
};

export default Hero;
