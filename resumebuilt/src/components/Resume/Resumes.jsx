import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Resume from './Resume'
import "./Resume.css";
const URL = "http://localhost:5000/resumes";

const fetchHandler = async() => {
    return await axios.get(URL).then((res) => res.data);
} ;
const Resumes = () => {
    const [resumes,setResumes] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setResumes(data.resumes));
    },[]);
    console.log(resumes);
    return (
    <div>
        <ul>
            { resumes
              && resumes.map((resume, i) => ( 
                <div className='resume' key={i}>
                   <Resume  resume ={resume} />
                </div>            
            ))}
        </ul>    
    </div>
  );
};

export default Resumes
// from backend "/resumes"