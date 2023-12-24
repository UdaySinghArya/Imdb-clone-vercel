
import Header from '../components/common/Header';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { categoryMovies } from '../services/api';
import { NOWPLAYING_API_URL } from '../constants/constant';
import { Box, Container, styled } from '@mui/material';
import BannerDetails from './BannerDetails';
import NowPlaying from './NowPlaying';
import Trending from './Trending';
import Tvshows from './Tvshows';
import { TV_API_URL ,TRENDING_API_URL} from '../constants/constant';
import Footer from './Footer';


const Wrapper = styled(Box)`
    display:flex;
    padding:20px 0;
`;
const Neww = () => {
    const [trendmovie, setTrendmovie] = useState([]);
    const [tvshows, setShows] = useState([]);
    const [movies, setMovies] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            let response = await categoryMovies(NOWPLAYING_API_URL);
            setMovies(response.results);
        };

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
                    {id ? (
                        <BannerDetails id={id} movies={movies} />
                    ) : (
                        <p>No ID parameter provided</p>
                    )}
                </Wrapper>
                <NowPlaying movies={movies} />
                <Trending trendmovie={trendmovie} />
                <Tvshows tvshows={tvshows} />
                <Footer />
            </Container>
        </>
    )
}
export default Neww
