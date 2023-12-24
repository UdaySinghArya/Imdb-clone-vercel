
import { List, Container, ListItem, Typography, styled, Box, Hidden } from "@mui/material";
import { Star } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Footer from "./Footer";

const Banner = styled('img')({
    width: 47
})

const Conatiner = styled(List)`
    display:flex;
`
const MoviesList = ({ movies }) => {
    const isSmallScreen = useMediaQuery('(max-width:450px)');

    return (
        <>
            <Box>
                {isSmallScreen ? (
                    <Hidden implementation="css" css={{ width: '25%' }}>
                        {
                            movies.map((movie) => (
                                <Conatiner>
                                    <ListItem>
                                        <Banner src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
                                    </ListItem>

                                    <ListItem>
                                        {/* original_title=movie name  */}
                                        <Typography>{movie.original_title}</Typography>
                                    </ListItem>

                                </Conatiner>
                            ))
                        }
                    </Hidden>
                ) : (

                    <Hidden implementation="css" css={{ width: '50%' }}>
                        {
                            movies.map((movie) => (
                                <Conatiner>
                                    <ListItem>
                                        <Banner src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
                                    </ListItem>

                                    <ListItem>
                                        {/* original_title=movie name  */}
                                        <Typography>{movie.original_title}</Typography>
                                    </ListItem>

                                    <ListItem>
                                        <Star style={{ positiion: 'absolute' }} color="warning" />
                                        <Typography>{movie.vote_average}</Typography>
                                    </ListItem>

                                    <ListItem>
                                        <Typography>{movie.release_date}</Typography>
                                    </ListItem>
                                </Conatiner>

                            ))
                        }
                    </Hidden>
                )}
            </Box>
            <Footer />
        </>

    )
}

export default MoviesList;