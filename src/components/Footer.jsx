import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Grid } from '@mui/material';
const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#000',
                color: 'white',
                padding: '20px 0',
                mt: '20px', // Push the footer to the bottom of the page
            }}
        >
            <Container maxWidth="lg" sx={{}}>
                <Box sx={{ marginTop:'10px',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box variant="body2" align="center" sx={{ backgroundColor: 'yellow', display: 'inline-block', color: 'black', paddingTop: '5px', paddingBottom: '5px' }}>
                        <Typography>Sign In For More</Typography>
                    </Box>
                </Box>
                <Box sx={{ marginTop:'10px',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box variant="body2" align="center" sx={{  display: 'inline-block', color: 'black', paddingTop: '5px', paddingBottom: '5px' }}>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            <MusicNoteIcon color="warning" fontSize="medium" sx={{ marginRight: 4 }} />
                        </Link>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            <InstagramIcon color="warning" fontSize="medium" sx={{ marginRight: 4 }} />
                        </Link>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            <TwitterIcon color="warning" fontSize="medium" sx={{ marginRight: 4 }} />
                        </Link>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            <YouTubeIcon color="warning" fontSize="medium" sx={{ marginRight: 4 }} />
                        </Link>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            <FacebookIcon color="warning" fontSize="medium" />
                        </Link>
                    </Box>
                </Box>
                <Box sx={{marginTop:'10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box variant="body2" align="center"  sx={{flexWrap: 'wrap' , display:'flex', color: 'black', paddingTop: '5px', paddingBottom: '5px' }}>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            <Typography sx={{color:'white', marginRight: 4 }}>Get the IMDb app</Typography>
                        </Link>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            <Typography sx={{color:'white', marginRight: 4 }}>Help</Typography>
                        </Link>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            <Typography sx={{color:'white', marginRight: 4 }}>Site Index </Typography>
                        </Link>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            <Typography sx={{color:'white', marginRight: 4 }}>IMDbPro</Typography>
                        </Link>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            <Typography sx={{color:'white', marginRight: 4 }}>Box Office mojo</Typography>
                        </Link>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            <Typography sx={{ color:'white',marginRight: 4 }}>IMDb Developer</Typography>
                        </Link>
                    </Box>
                </Box>


                {/* sdsfsdfd */}
                <Box sx={{marginTop:'10px',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box variant="body2" align="center"  sx={{flexWrap: 'wrap' , display:'flex', color: 'black', paddingTop: '5px', paddingBottom: '5px' }}>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            <Typography sx={{color:'white', marginRight: 4 }}>Press Room</Typography>
                        </Link>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            <Typography sx={{color:'white', marginRight: 4 }}>Advertising</Typography>
                        </Link>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            <Typography sx={{color:'white', marginRight: 4 }}>Jobs </Typography>
                        </Link>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            <Typography sx={{color:'white', marginRight: 4 }}>Condition Of Use</Typography>
                        </Link>
                        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            <Typography sx={{color:'white', marginRight: 4 }}>Privacy Policy</Typography>
                        </Link>
                    </Box>
                </Box>
                
                 <Box sx={{marginTop:'10px',display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box variant="body2" align="center"  sx={{flexWrap: 'wrap' , display:'flex', color: 'black', paddingTop: '5px', paddingBottom: '5px' }}>
                    <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                            <Typography sx={{color:'white', marginRight: 4 }}>an amazon company</Typography>
                        </Link>
                    </Box>
                </Box>
                <Box sx={{ marginTop:'10px',margin: 'auto', display: 'flex', align: 'center', justifyContent: 'center', marginTop: '15px' }}>
                    <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
                        <Typography>© 1990-2023 by IMDb.com, Inc.</Typography>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
