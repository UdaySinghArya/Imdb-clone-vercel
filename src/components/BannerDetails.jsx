import 'react-multi-carousel/lib/styles.css';
import { Box, Typography, styled } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Hidden } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';


const StyledBanner = styled('img')({
    width: '100%',
    height: 'auto', // Ensures the image scales proportionally
    maxHeight: '80vh', // Set a maximum height to prevent the image from taking up too much space
});

const Moviename = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: theme.typography.pxToRem(30),
    position: 'absolute',
    transform: 'translate(-145%, 39%)',
    top: '50%',
    left: '50%',
    marginBottom: theme.spacing(3),
    maxWidth: theme.spacing(25),
    display: 'flex',
    justifyContent: 'center',
}));


const Check = styled(Box)({
    position: 'relative',
});

const BannerDetails = ({ movies, id }) => {
    const isSmallScreen = useMediaQuery('(max-width:800px)');

    let intid = parseInt(id, 10);

    const hasMatchingMovie = movies.some((movie) => movie.id === intid);
    return (
        <Box style={{ width: '100%' }}>   
                {movies.map((movie) => {
                    // console.log(typeof movie.id);
                    if (movie.id === intid) {
                        return (
                            <Check key={movie.id}>
                                <Box>
                                    {isSmallScreen ? (
                                        <Hidden >
                                            <StyledBanner
                                                sx={{ maxWidth: '100%' }}
                                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                                alt="poster"
                                            />
                                        </Hidden>
                                    ) : (
                                        <Hidden >
                                            <StyledBanner
                                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                                alt="poster"
                                            />
                                            <Moviename>
                                                <PlayCircleIcon color="#cfd8dc" fontSize="large" />
                                                <Box>{movie.original_title}</Box>
                                            </Moviename>
                                        </Hidden>
                                    )}
                                </Box>
                            </Check>
                        );
                    }
                    return null;
                })}
                {!hasMatchingMovie && (
                    <Typography sx={{ color: 'white' }}>Not Giving</Typography>
                )}
        </Box>
    );
};

export default BannerDetails;
