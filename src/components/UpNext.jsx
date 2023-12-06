import {Box,Typography,styled} from '@mui/material';

const Component = styled(Box)`
    width:40%;
    display:flex;
    flex-direction:column;
    align-item:baseline;
    padding-left:20px;
    // margin-top:10px;
    & > p {
        color:#F5C518;
        font-weight:600;
        font-size:18px;
        margin-bottom:10px;
    }
`;



const Poster = styled('img')({
    width:'80px'
})

const Wrapper= styled(Box)`
    color:#FFFFFF;
    display:flex;
    & > p {
        margin-left:20px;
    }
`

const UpNext =({movies})=>{
    return(
       <Component>
        <Typography>UpNext</Typography>
        {
            movies.splice(0,3).map(movie => (
                <Wrapper>
                    {/* poster_path=Poster */}
                    <Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}  alt="poster"/>
                    {/* original_title =Movie Name */}
                    <Typography>{movie.original_title}</Typography>  
                </Wrapper>
                
            ))
            
        }
       </Component>
    )
}
export default UpNext;