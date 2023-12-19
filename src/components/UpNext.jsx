import { Box, Typography, styled } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { Hidden } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const Component = styled(Box)`
    width:40%;
    display:flex;
    flex-direction:column;
    align-item:baseline;
    padding-left:20px;
    & > p {
        color:#F5C518;
        font-weight:600;
        font-size:18px;
        
    }
`;
const Poster = styled('img')({
    width: '80px'
})

const Wrapper = styled(Box)`
    color:#FFFFFF;
    display:flex;
    margin-top:7px;
    background-color:rgba(255, 255, 255, 0.08);
`
const PosterName = styled(Box)`
    margin-left:25px;
`
const IconAndTime = styled(Box)`
    display:flex;
`
const UpNext = ({ movies }) => {
    const isSmallScreen = useMediaQuery('(max-width:1024px)');

    return (
        <Component>
            <Typography sx={{color:'white'}}>UpNext</Typography>
            {
                movies.splice(0, 3).map(movie => (
                    <Box>
                        
                        {isSmallScreen ? (
                            // Content that will be hidden on smaller screens

                            <Hidden implementation="css" css={{ width: '25%' }}>
                            </Hidden>
                        ) : (
                            // Content that will be hidden on larger screens
                            <Hidden implementation="css" css={{ width: '50%' }}>
                                
                                <Wrapper>
                                    {/* poster_path=Poster */}
                                    <Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
                                    {/* original_title =Movie Name */}
                                    <PosterName>
                                        <IconAndTime>
                                            <Typography><PlayCircleOutlineIcon color="#cfd8dc" fontSize="large" /></Typography>
                                            <Typography>{movie.runtime}</Typography>
                                        </IconAndTime>
                                        <Typography>{movie.original_title}</Typography>
                                    </PosterName>

                                </Wrapper>
                            </Hidden>
                        )}
                    </Box>
                ))
            }
        </Component>
    )
}
export default UpNext;