
import React from 'react';
import Header from '../Components/Header';
import { InfinitySpin } from 'react-loader-spinner';
import { useState, useEffect } from 'react';

const Project = () => {
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const projects = [
        { imgUrl: "https://res.cloudinary.com/durbee4ln/image/upload/v1694827197/lop_ugco6u.png",
        link: "https://calculator-app-au-lex.vercel.app",
         description: "My Calculator App"},
        { imgUrl: "https://res.cloudinary.com/durbee4ln/image/upload/v1695727949/2_kd1s8k.png",
        link: "https://space-tourism-app-livid.vercel.app/",
         description: "Space Tourism" },
        { imgUrl: "https://res.cloudinary.com/durbee4ln/image/upload/v1695727950/1_vg1vmy.png",
        link: "https://aul-exious-ecommerce-app.vercel.app/",
         description: "Ecommerce App" },

        { imgUrl: "https://res.cloudinary.com/durbee4ln/image/upload/v1691959445/port2_elzjcp.png", 
        link: "https://headphone-website-rust.vercel.app",
        description: "HeadPhone website" },
        { imgUrl: "https://res.cloudinary.com/durbee4ln/image/upload/v1691959694/proj3_bcaqxw.png", 
        link: "https://faq-dropdown.vercel.app",
        description: "FQR queastions" }
    ];

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
                    <Header />
                    <h1 className='text-center text-[2rem]'>my projects</h1>
                    <section className='flex justify-center lg:space-x-10 flex-wrap'>
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </section>
                </div>
            )}
        </>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <section className="relative Display">
            <div className='w-[20rem] h-[15rem] rounded-[10px] bg-slate-50 projectDisplay'>
               
                <div className='w-[320px] h-[200px] rounded-[10px]'>
                    <img src={project.imgUrl} alt="project" className='w-[100%] rounded-[10px]' />
                    <p className='text-[1.4rem] font-bold'>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none  text-[1.4rem] font-bold">
                       Visit Link </a>
                </div>
                </div>
        
        </section>
    );
};

export default Project;
