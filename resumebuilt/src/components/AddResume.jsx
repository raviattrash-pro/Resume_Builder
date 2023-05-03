import {React ,useState}from 'react'
import {Box, Button , TextField,FormControlLabel,Checkbox} from '@mui/material';
const AddResume = () => {
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
    image:''
    
  })
  return (
   <form>
    <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700}
    alignContent={"center"} alignSelf ={"center"} margin={"auto"}>
      <TextField margin="normal" label="Name"placeholder="Name" fullWidth  name ='name' /> 
      <TextField margin="normal" label="E-mail"placeholder="E-mail"   fullwidth  name ='email' />
      <TextField margin="normal"label="Contact Number"placeholder="Contact Number" fullwidth name ='phoneNumber' />
      <TextField margin="normal" label="Address"placeholder="Address" multiline  name ='address'  />
      <TextField margin="normal" label="SocialMedia"placeholder="SocialMedia" multiline  name ='socialMedia' />
      <TextField margin="normal" label="Skills"placeholder="Skills" multiline name ='skills' />
      <TextField margin="normal" label="Notes"placeholder="Notes" multiline name ='yournotes' />
      <TextField margin="normal" label="Projects"placeholder="Projects" multiline  name ='projects' />
      <TextField margin="normal" label="Achivement"placeholder="Achivement" multiline  name ='achievemants' />
      <TextField margin="normal" label="Language"placeholder="Language" multiline name ='language' />
      <TextField margin="normal" label="Interest"placeholder="Interest" multiline  name ='interest' />
      <TextField margin="normal" label=" 10th_Marks"placeholder=" 10th_Marks"  name ='ssc_mark' />
      <TextField margin="normal" label="12th_marks"placeholder="12th_marks" name ='hssc_mark' />
      <TextField margin="normal" label="Graduation_Marks"placeholder="Graduation_Marks" name ='btech_mark' />
      <TextField margin="normal" label="Designation"placeholder="Designation" name ='designation' />
      <TextField margin="normal" placeholder="Image"fullwidth variant="standard" name ='image' />
      <FormControlLabel control={<Checkbox checked={false} />} label="Label" />
      <Button type='submit' variant="contained">Add Details</Button>
      </Box> 
   </form>
  )
}

export default AddResume

/*
 */