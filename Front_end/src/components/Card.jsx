import React from "react";
import { useState } from "react";
 

export default function Card({title,description}){
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
             <figure>
                 <img
                 src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                 alt="Shoes" />
             </figure>
             <div className="card-body">
                 <h2 className="card-title">{title}</h2>
                 <p>{description}</p>
                 <div className="card-actions justify-end flex items-center ">
                 <progress className="progress progress-primary w-56 " value={20} max="100"></progress>
                 <button className="btn btn-primary">Resume</button>
                 </div>
                 
             </div>
         </div>
    )
}