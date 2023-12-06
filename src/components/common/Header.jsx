
import {AppBar,Toolbar,styled,Box,Typography,InputBase} from '@mui/material';
import { logoURL } from '../../constants/constant';
import {Menu,BookmarkAdd,ExpandMore} from '@mui/icons-material';

//components
import HeaderMenu from './HeaderMenu';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../../constants/route';


const StyledToolBar = styled(Toolbar)`
    background:#121212;
    min-height:56px !important;
    padding:0 115px !important;
    justify-content:space-between;
    & > * {
        padding:0 16px;
    }
    // To manage Box
    & > div{
        display:flex;
        cursor:pointer;

        // To manage Typography
        & > p{
            font-size:14px;
            font-weight:600;
        }
    }
    & > p{
        font-size:14px;
        font-weight:600;
    }
`;
const Logo=styled('img')({
    width:64
    
})

const InputSearchField=styled(InputBase)`
    background:#ffffff;
    height:30px;
    width:55%;
    border-radius:5px;
`
const Header = ()=>{

    const [open,setOpen]=useState(null);

    const navigate = useNavigate();


    const handleClick=(e)=>{
        setOpen(e.currentTarget); //open menu downside
    }

    const handleClose=(e)=>{
        setOpen(null);
    }

    return(
       <AppBar position='static'>
        <StyledToolBar>
        <Logo src={logoURL} alt="logo" onClick={() => navigate(routePath.home)}/>   {/* <img src={logoURL} alt="logo"/> */}
        
        {/* Menu */}
        <Box onClick={handleClick}>
            <Menu/>
            <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose}/>

        {/* Search Text Field */}
        <InputSearchField/>

        <Typography>IMDb<Box component="span">Pro</Box> </Typography>
        <Box>
            <BookmarkAdd/>
            <Typography>WatchList</Typography>
        </Box>
        <Typography>SignIn</Typography>
        <Box>
            <Typography>EN</Typography>
            <ExpandMore/>
        </Box>
        </StyledToolBar>
       </AppBar>
    )
}
export default Header;
