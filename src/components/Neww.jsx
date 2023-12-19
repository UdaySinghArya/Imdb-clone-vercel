
import Header from '../components/common/Header';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { categoryMovies } from '../services/api';
import { NOWPLAYING_API_URL } from '../constants/constant';
import { Box,Container,styled} from '@mui/material';
import BannerDetails from './BannerDetails';

const Wrapper = styled(Box)`
    display:flex;
    padding:20px 0;
`;
const Neww=()=>{

    const { id } = useParams();

    {console.log("Neww")}
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let response = await categoryMovies(NOWPLAYING_API_URL);
            setMovies(response.results);
        };

        getData();
    }, [])
    return(
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
            </Container>
        </>
    )
}
export default Neww
