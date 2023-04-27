import React ,{useState}from 'react'
import {AppBar ,Typography,Toolbar, Tabs, Tab} from '@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
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
                    <Tab label="Personal 1"/>
                    <Tab label="Personal 2"/>
                    <Tab label="notes"/>
                    <Tab label="Work Exp"/>
                    <Tab label="Project"/>
                    <Tab label="Education"/>
                    <Tab label="Add Skill"/>
                    <Tab label="Achievement"/>
                    <Tab label="Interest"/>
                    <Tab label="Language"/>
                    <Tab label="Generate Resume"/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header