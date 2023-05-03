import React ,{useState}from 'react'
import {AppBar ,Typography,Toolbar, Tabs, Tab} from '@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import {NavLink} from 'react-router-dom';
const Header = () => {
    const [value ,setValue] = useState();
  return (
    <div>
        <AppBar   sx={{backgroundColor:'rgba( 128, 0, 255, 0.5 )' ,borderRadius:'16px' ,boxShadow:'0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter:'blur(5px)',WebkitBackdropFilter:'blur(5px)',border:'1px solid rgba(255, 255, 255, 0.3)'}} position='sticky'>
            <Toolbar>
                <Typography>
                   <LibraryBooksOutlinedIcon />
                </Typography>
                <Tabs
                sx={{ml:'auto'}}
                indicatorColor='primary'
                textColor='inherit'
                 value={value} 
                 onChange={(e,val) => setValue(val)} >
                    <Tab LinkComponent = {NavLink} to="/Add" label="Add Details"/>
                    <Tab LinkComponent = {NavLink} to="/resume" label="Resume"/>
                    <Tab LinkComponent = {NavLink} to="/about" label="About Us"/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header