import React from 'react'
import {Button} from "@mui/material"
import {Link,LinkComponent} from 'react-router-dom'
const Resume = (props) => {
    const { _id,name,designation,email,phoneNumber,address,socialMedia,skills,yournotes,
    projects,
    achievemants,
    language,
    interest,
    ssc_mark,
    hssc_mark,
    btech_mark,
    image
} = props.resume;

  return (
    <div className='card'>
        <img src={image} alt={name} />
        <article> Designation :  {designation}</article>
        <h3>Id :{_id}</h3>
        <h3>Name : {name}</h3>
        <h3>email : {email}</h3>
        <h3>Phone num: {phoneNumber}</h3>
        <h3>Address :{address}</h3>
        <h3>SocialMedia :{socialMedia}</h3>
        <h3>Skills :{skills}</h3>
        <h3>notes :{yournotes}</h3>
        <h3>Projects :{projects}</h3>
        <h3>Achivement :{achievemants}</h3>
        <h3>Lang : {language}</h3>
        <h3>Interest :{interest}</h3>
        <h3>10th Marks :{ssc_mark}</h3>
        <h3>12 th marks :{hssc_mark}</h3>
       <h3>B.tech cgpa :{btech_mark}</h3>
        <Button LinkComponent = {Link} to ={`/resume/${_id}`} sx={{mt:"auto"}}>UPDATE</Button>
        <Button  sx={{mt:"auto"}} >DELETE</Button>
        
    </div>
  )
}

export default Resume