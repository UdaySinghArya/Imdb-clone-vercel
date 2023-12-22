

import { routePath } from '../../constants/route';
import { useNavigate } from 'react-router-dom';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { Menu } from '@mui/icons-material';
import React, { useState } from 'react';
import { Modal, Button, Box, Typography, Container, Grid, styled } from '@mui/material';
import { logoURL } from '../../constants/constant';
import CloseIcon from '@mui/icons-material/Close';
import { Hidden } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
const HeaderMenu = ({ handleToggle, anchorRef }) => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const handleMoviesClick = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = (option) => {

    console.log(`Selected option: ${option}`);

    switch (option) {
      case 'popular':
        navigate(`${routePath.categories}?category=popular`);
        break;
      case 'topRated':
        navigate(`${routePath.categories}?category=topRated`);
        break;
      case 'upcoming':
        navigate(`${routePath.categories}?category=upcoming`);
        break;
      default:
        console.warn(`Unhandled option: ${option}`);
        break;
    }
  };


  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:700px)');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // CSS

  return (
    <>
      <Box>
        {isSmallScreen ? (


          <Hidden implementation="css" css={{ width: '25%' }}>
            <Button onClick={handleOpen} variant="outlined">
              <Menu style={{ color: "white" }} />

            </Button>
          </Hidden>
        ) : (

          <Hidden implementation="css" css={{ width: '50%' }}>
            <Button onClick={handleOpen} variant="outlined">
              <Menu style={{ color: "white" }} />
              <Typography sx={{ color: 'white' }}>Menu</Typography>
            </Button>
          </Hidden>
        )}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="full-screen-top-modal-title"
        aria-describedby="full-screen-top-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            boxShadow: 24,
            p: 4,
            bgcolor: 'black'
          }}
        >
          {/* Modal Content */}
          <Container >
            <Box sx={{ marginTop: '100px', display: 'flex' }}>
              <img src={logoURL} alt="logo" style={{ width: '75px' }} />
              <Button onClick={handleClose} variant="outlined" sx={{ marginLeft: 'auto' }}>
                <CloseIcon fontSize='large' color='warning' />
              </Button>
            </Box>
            <Box sx={{ flexGrow: 1, marginTop: '30px' }}>
              <Grid container spacing={2} sx={{position:'fixed', display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                {/* Section 1 */}
                <Grid item xs={4}>
                  {/* Menu */}
                  <div>
                    <Box sx={{display:'flex'}}>
                      <LocalMoviesIcon color="warning" fontSize="large" />
                      <Typography
                        sx={{
                          fontSize: '25px',
                          marginLeft: '15px',
                          fontWeight: 'bold',
                          color: 'white',
                          cursor: 'pointer',
                        }}
                        onClick={handleMoviesClick}
                      >
                        Movies
                      </Typography>
                    </Box>
                    {showOptions && (
                      <div style={{ position: 'absolute', zIndex: 1, marginLeft: '4px' }}>
                        <Typography
                          sx={{ marginLeft: '30px', color: 'white', cursor: 'pointer' }}
                          onClick={() => handleOptionClick('popular')}
                        >
                          Popular
                        </Typography>
                        <Typography
                          sx={{ marginLeft: '30px', color: 'white', cursor: 'pointer' }}
                          onClick={() => handleOptionClick('topRated')}
                        >
                          Top Rated
                        </Typography>
                        <Typography
                          sx={{ marginLeft: '30px', color: 'white', cursor: 'pointer' }}
                          onClick={() => handleOptionClick('upcoming')}
                        >
                          Upcoming
                        </Typography>
                      </div>
                    )}
                  </div>
                </Grid>

                {/* section 2 */}
                <Grid item xs={4}>
                  {/* Menu */}
                  <div style={{ position: 'relative', zIndex: 0 }}>
                    <Box sx={{display:'flex'}}>
                      <TvOutlinedIcon color="warning" fontSize="large" />
                      <Typography
                        sx={{
                          fontSize: '25px',
                          marginLeft: '15px',
                          fontWeight: 'bold',
                          color: 'white',
                          cursor: 'pointer',
                        }}
                        
                      >
                        Tv Shows
                      </Typography>
                    </Box>
                   
                  </div>
                </Grid>


                {/* Section 3 */}
                <Grid item xs={4}>
                  {/* Menu */}
                  <div style={{ position: 'relative', zIndex: 0 }}>
                    <Box sx={{display:'flex'}}>
                      <StarsRoundedIcon color="warning" fontSize="large" />
                      <Typography
                        sx={{
                          fontSize: '25px',
                          marginLeft: '15px',
                          fontWeight: 'bold',
                          color: 'white',
                          cursor: 'pointer',
                        }}
                        
                      >
                        Awards and Events
                      </Typography>
                    </Box>
                   
                  </div>
                </Grid>

              </Grid>

            </Box>
          </Container>
        </Box>
      </Modal>
    </>
  );
};

export default HeaderMenu;
