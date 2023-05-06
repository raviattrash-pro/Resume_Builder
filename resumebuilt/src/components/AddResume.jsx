import {React ,useState}from 'react'
import {Box, Button , TextField,FormControlLabel,Checkbox} from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const AddResume = () => {
  const history = useNavigate();
  const [input,setInput] = useState({
    name:'',
    email:'',
    phoneNumber:'',
    address:'',
    socialMedia:'',
    skills:'',
    yournotes:'',
    projects:'',
    achievemants:'',
    language:'',
    interest:'',
    ssc_mark:'',
    hssc_mark:'',
    btech_mark:'',
    designation:'',
    image:'',
    tc:false
  })
  const [checked,setChecked] =useState(false);
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]:e.target.value
    }))
    console.log(e.target.name,"value : ",e.target.value);
  }

//call backed 
const sendRequest =  async() =>{
  axios.post("http://localhost:5000/resumes/",{
    name:String(input.name),
    email:String(input.email),
    phoneNumber:String(input.phoneNumber),
    address:String(input.address),
    socialMedia:String(input.socialMedia),
    skills:String(input.skills),
    yournotes:String(input.yournotes),
    projects:String(input.projects),
    achievemants:String(input.achievemants),
    language:String(input.language),
    interest:String(input.interest),
    ssc_mark:String(input.ssc_mark),
    hssc_mark:String(input.hssc_mark),
    btech_mark:String(input.btech_mark),
    designation:String(input.designation),
    image:String(input.image)
  }).then(res =>  res.data);
}


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input,checked);
    sendRequest().then(() => history('/resume'))
  }

  return (
   <form onSubmit={handleSubmit}>
    <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700}
    alignContent={"center"} alignSelf ={"center"} margin={"auto"}>
      <TextField value={input.name} onChange ={handleChange} margin="normal" label="Name"  fullWidth  name ='name' /> 
      <TextField value={input.email} onChange ={handleChange} margin="normal" label="E-mail"placeholder="E-mail"   fullwidth  name ='email' />
      <TextField value={input.phoneNumber} onChange ={handleChange} margin="normal"label="Contact Number"placeholder="Contact Number" fullwidth name ='phoneNumber' />
      <TextField value={input.address} onChange ={handleChange} margin="normal" label="Address"placeholder="Address" multiline  name ='address'  />
      <TextField value={input.socialMedia} onChange ={handleChange} margin="normal" label="SocialMedia"placeholder="SocialMedia" multiline  name ='socialMedia' />
      <TextField value={input.skills} onChange ={handleChange} margin="normal" label="Skills"placeholder="Skills" multiline name ='skills' />
      <TextField value={input.yournotes} onChange ={handleChange} margin="normal" label="Notes"placeholder="Notes" multiline name ='yournotes' />
      <TextField value={input.projects} onChange ={handleChange} margin="normal" label="Projects"placeholder="Projects" multiline  name ='projects' />
      <TextField value={input.achievemants} onChange ={handleChange} margin="normal" label="Achivement"placeholder="Achivement" multiline  name ='achievemants' />
      <TextField value={input.language} onChange ={handleChange} margin="normal" label="Language"placeholder="Language" multiline name ='language' />
      <TextField value={input.interest} onChange ={handleChange} margin="normal" label="Interest"placeholder="Interest" multiline  name ='interest' />
      <TextField value={input.ssc_mark} onChange ={handleChange} margin="normal" label=" 10th_Marks"placeholder=" 10th_Marks"  name ='ssc_mark' />
      <TextField value={input.hssc_mark} onChange ={handleChange} margin="normal" label="12th_marks"placeholder="12th_marks" name ='hssc_mark' />
      <TextField value={input.btech_mark} onChange ={handleChange} margin="normal" label="Graduation_Marks"placeholder="Graduation_Marks" name ='btech_mark' />
      <TextField value={input.designation} onChange ={handleChange} margin="normal" label="Designation"placeholder="Designation" name ='designation' />
      <TextField value={input.image} onChange ={handleChange} margin="normal" placeholder="Image"fullwidth variant="standard" name ='image' />
      <FormControlLabel
       control={<Checkbox checked={checked} onChange={()=> setChecked(!checked)} />} label="terms&condition" name="tc"/>
      <Button type='submit' variant="contained">Add Details</Button>
      </Box> 
   </form>
  )
}

export default AddResume

/*
 */