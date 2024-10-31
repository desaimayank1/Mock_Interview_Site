import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();
    const handleBookNowClick = () => {
    navigate("/Book"); // Replace with your desired path
    };

    const [buyState,setBuyState]=useState([0,0,0,0])
    const handleBuyClick=(index)=>{
        const newStates=[... buyState];
        newStates[index]=1;
        setBuyState(newStates);
    };
    
    return (
        <>
    
  <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button 
      onClick={handleBookNowClick}
      className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>

{/* card */}
    {/* <div className="grid grid-cols-3 gap-10 p-5" >
         <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Machine Learning</h2>
                <p>Basic Fundamentals of Machine learning</p>
                <div className="card-actions justify-end flex items-center ">
                <progress className="progress progress-primary w-56 " value={20} max="100"></progress>
                <button className="btn btn-primary">Resume</button>
                </div>
                
            </div>
        </div>
    </div> */}

    <div className="overflow-x-auto p-10">
  <table className="table ">
    {/* head */}
    <thead>
      <tr className="font-extrabold text-black text-lg ">
        
        <th>Topic</th>
        <th>Description</th>
        <th>Tech stack</th>
        <th>Buy Now</th>
      </tr>
    </thead>
    <tbody>
    {[
              {
                title: "Data Science",
                description: "Basic Fundamental of Data Science",
                techStack: "Python, R, SQL",
                imgSrc: "https://img.daisyui.com/images/profile/demo/2@94.webp",
              },
              {
                title: "Machine Learning",
                description: "Basic Fundamental of Machine Learning",
                techStack: "Pandas, Python, TensorFlow",
                imgSrc: "https://img.daisyui.com/images/profile/demo/3@94.webp",
              },
              {
                title: "Matlab",
                description: "Basic Fundamental of Matlab",
                techStack: "Git, Matlab-Desktop",
                imgSrc: "https://img.daisyui.com/images/profile/demo/4@94.webp",
              },
              {
                title: "Web Development",
                description: "Basic Fundamental of Web Development",
                techStack: "HTML, CSS, JavaScript",
                imgSrc: "https://img.daisyui.com/images/profile/demo/5@94.webp",
              },
            ].map((course, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={course.imgSrc} alt={course.title} />
                      </div>
                    </div>
                    <div>
                      <div className="font-extrabold">{course.title}</div>
                    </div>
                  </div>
                </td>
                <td>{course.description}</td>
                <td>{course.techStack}</td>
                <th>
                  <button
                    onClick={() => handleBuyClick(index)}
                    className="btn btn-outline btn-info"
                  >
                    {buyState[index] === 0 ? "Buy" : "Purchased"}
                  </button>
                </th>
              </tr>
            ))}
    </tbody>
    
  </table>
</div>

        </>
    )
}