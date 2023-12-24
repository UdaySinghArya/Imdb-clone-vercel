
import Header from '../components/common/Header';
import { useEffect, useState } from 'react';
import { categoryMovies } from '../services/api';
import { NOWPLAYING_API_URL, TV_API_URL } from '../constants/constant';
import { TRENDING_API_URL } from '../constants/constant';
import { Box,Container,styled} from '@mui/material';
import Banner from '../components/Banner';
import UpNext from '../components/UpNext';
import NowPlaying from '../components/NowPlaying';
import Trending from '../components/Trending';
import Tvshows from '../components/Tvshows';
import Footer from '../components/Footer';

const Wrapper = styled(Box)`
    display:flex;
    padding:20px 0;
`;


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [trendmovie, setTrendmovie] = useState([]);
    const [tvshows, setShows] = useState([]);

    // useEffect is a synchronous function
    useEffect(() => {
        // getData makes asynchronous function using async and await
        const getData = async () => {
            let response = await categoryMovies(NOWPLAYING_API_URL);
            setMovies(response.results);
        }
        getData();
    }, [])
    useEffect(() => {
        // getData makes asynchronous function using async and await
        const getData = async () => {
            let response = await categoryMovies(TRENDING_API_URL);
            setTrendmovie(response.results);
        }
        getData();
    }, [])

    useEffect(() => {
        // getData makes asynchronous function using async and await
        const getData = async () => {
            let response = await categoryMovies(TV_API_URL);
            setShows(response.results);
        }
        getData();
    }, [])

    return (
        <>
            <Header />
            <Container>
                <Wrapper>
                    <Banner movies={movies} />
                    <UpNext movies={movies} />
                </Wrapper>
                <NowPlaying movies={movies} />
                 <Trending trendmovie={trendmovie} />
                <Tvshows tvshows={tvshows} /> 
            </Container>  
            <Footer/>
        </>
    )
}
export default Home;