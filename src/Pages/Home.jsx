
import Header from '../components/common/Header';
import { useEffect, useState } from 'react';
import { categoryMovies } from '../services/api';
import { NOWPLAYING_API_URL } from '../constants/constant';
import { Box ,styled} from '@mui/material';
import Banner from '../components/Banner';
import UpNext from '../components/UpNext';
import Slide from '../components/Slide';

const Wrapper = styled(Box)`
    display:flex;
    padding:20px 0;
`;

const Component = styled(Box)`
    padding:0 115px;
`
const Home = () => {
    const [movies, setMovies] = useState([]);

    // useEffect is a synchronous function
    useEffect(() => {

        // getData makes asynchronous function using async and await
        const getData = async () => {
            let response = await categoryMovies(NOWPLAYING_API_URL);
            setMovies(response.results);
        }
        getData();
    }, [])




    return (
        <>
            <Header />
            <Component>
                <Wrapper>
                    <Banner movies={movies} />
                    <UpNext movies={movies} />
                </Wrapper>
                <Slide movies={movies} />
                <Slide movies={movies} />
                <Slide movies={movies} />
                <Slide movies={movies} />
                <Slide movies={movies} />
                <Slide movies={movies} />
            </Component>
        </>
    )
}
export default Home;