import axios from 'axios';

import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import {Box, Button , TextField,FormControlLabel,Checkbox} from '@mui/material';

const ResumeDetail = () => {
    const [input,setInput] = useState({});  //dynamic input from axios request
    const [checked,setChecked] =useState(false);

    const id = useParams().id; // same var as in App.js 
    console.log(id);
    useEffect(() => {
        const fetchHandler = async() => {
            await axios.get(`http://localhost:5000/resume/${id}`)
            .then( (res) => res.data)
            .then((data) => setInput(data.resume));
        }
        fetchHandler()
        
    } ,[id]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value
          }))
          console.log(e.target.name,"value : ",e.target.value);
      }


  return (
<div>
    EDIT FORM
    {input && (
<form onSubmit={handleSubmit}>
<Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700}
alignContent={"center"} alignSelf ={"center"} margin={"auto"}>
  <TextField value={input.name} onChange ={handleChange} margin="normal" label="Name"  fullWidth  name ='name' /> 
  <TextField value={input.email} onChange ={handleChange} margin="normal" label="E-mail"   fullwidth  name ='email' />
  <TextField value={input.phoneNumber} onChange ={handleChange} margin="normal"label="Contact Number" fullwidth name ='phoneNumber' />
  <TextField value={input.address} onChange ={handleChange} margin="normal" label="Address" multiline  name ='address'  />
  <TextField value={input.socialMedia} onChange ={handleChange} margin="normal" label="SocialMedia" multiline  name ='socialMedia' />
  <TextField value={input.skills} onChange ={handleChange} margin="normal" label="Skills" multiline name ='skills' />
  <TextField value={input.yournotes} onChange ={handleChange} margin="normal" label="Notes" multiline name ='yournotes' />
  <TextField value={input.projects} onChange ={handleChange} margin="normal" label="Projects" multiline  name ='projects' />
  <TextField value={input.achievemants} onChange ={handleChange} margin="normal" label="Achivement" multiline  name ='achievemants' />
  <TextField value={input.language} onChange ={handleChange} margin="normal" label="Language" multiline name ='language' />
  <TextField value={input.interest} onChange ={handleChange} margin="normal" label="Interest" multiline  name ='interest' />
  <TextField value={input.ssc_mark} onChange ={handleChange} margin="normal" label=" 10th_Marks"  name ='ssc_mark' />
  <TextField value={input.hssc_mark} onChange ={handleChange} margin="normal" label="12th_marks" name ='hssc_mark' />
  <TextField value={input.btech_mark} onChange ={handleChange} margin="normal" label="Graduation_Marks" name ='btech_mark' />
  <TextField value={input.designation} onChange ={handleChange} margin="normal" label="Designation" name ='designation' />
  <TextField value={input.image} onChange ={handleChange} margin="normal" label="Image"fullwidth variant="standard" name ='image' />
  <FormControlLabel
   control={<Checkbox checked={checked} onChange={()=> setChecked(!checked)} />} label="terms&condition" name="tc"/>
  <Button type='submit' variant="contained">Add Details</Button>
  </Box> 
</form>

)}
   


    </div>
  )
}

export default ResumeDetail
//updating purpose