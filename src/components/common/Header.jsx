
import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material';
import { logoURL } from '../../constants/constant';
import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material';

//components
import HeaderMenu from './HeaderMenu';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../../constants/route';

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import DropDown from '../common/DropDown'
import { Hidden } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledToolBar = styled(Toolbar)`
    background:#121212;
    min-height:56px !important;
    padding:0 115px !important;
    justify-content:space-between;
    & > * {
        padding:0 8px;
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
const Logo = styled('img')({
    width: 64

})

const Header = () => {
    const isSmallScreen = useMediaQuery('(max-width:700px)');
    const [open, setOpen] = useState(null);
    const navigate = useNavigate();
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen(prev => !prev);
    };

    useEffect(() => (
        function CustomizedInputBase() {
            return (
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>


                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                        <DirectionsIcon />
                    </IconButton>
                </Paper>
            );
        }
    ))
    return (
        <AppBar position='static'>
            <StyledToolBar>
                <Logo src={logoURL} alt="logo" onClick={() => navigate(routePath.home)} />   {/* <img src={logoURL} alt="logo"/> */}
                
                <HeaderMenu handleToggle={handleToggle} open={open} anchorRef={anchorRef} />

                <Box>
                    {isSmallScreen ? (
                        <Hidden implementation="css" css={{ width: '25%' }}>
                        </Hidden>
                    ) : (
                        <Hidden implementation="css" css={{ width: '75%' }}>
                            <Box sx={{
                                display: 'flex',
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <DropDown />

                                {/* Search Text Field */}
                                <InputBase sx={{
                                    background: '#ffffff',
                                    height: '23px',
                                    width: '60%',
                                    borderRadius: '1px',
                                    maxWidth: '70%',
                                    display: 'flex',
                                    padding: '2px'
                                }} />
                            </Box>
                        </Hidden>

                    )}
                </Box>
                <Box>
                    {isSmallScreen ? (
                        <Hidden mdUp>
                        </Hidden>
                    ) : (
                        <Hidden mdDown>
                            <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                                <Typography>IMDb<Box component="span">Pro</Box> </Typography>
                                <Box sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center', marginLeft: '20px' }}>
                                    <BookmarkAdd />
                                    <Typography>WatchList</Typography>
                                </Box>
                            </Box>
                        </Hidden>
                    )}
                </Box>

                <Typography>SignIn</Typography>
                <Box>
                    <Typography>EN</Typography>
                    <ExpandMore />
                </Box>
            </StyledToolBar>
        </AppBar>
    )
}
export default Header;


