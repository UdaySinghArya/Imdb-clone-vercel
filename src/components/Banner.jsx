import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, styled ,Hidden} from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const StyledBanner = styled('img')({
  width: '100%'
})

const Moviename = styled(Box)`
  text-align:center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size:30px;
  position:absolute;
  transform:translate(43%,-128%);
  top: '50%',
  left: '50%',
  margin-bottom:30px;
  max-width: 200px;
  display:flex;
  justify-content:center;
`
const Check = styled(Box)`
  position:relative;
`
const Banner = ({ movies }) => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(max-width:1024px)');

  function handleNavigate(id) {
    navigate(`${id}`);
  }
  return (
    <Box style={{ width: isSmallScreen ? '100%' : '65%' }}>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}

        infinite={true}
        slidesToSlide={1}
      >
        {
          movies.map((movie) => (
            <Check >
              <Box>
                {isSmallScreen ? (
                  <Hidden >
                    <button onClick={() => handleNavigate(movie.id)}  style={{ outline: 'none', border: 'none', background: 'none', cursor: 'pointer' }}>
                      <StyledBanner sx={{ maxWidth: '100%' }}
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                      alt="poster"
                    />
                    </button>
                  </Hidden>
                ) : (
                <Hidden    >
                  <button onClick={() => handleNavigate(movie.id)}  style={{ outline: 'none', border: 'none', background: 'none', cursor: 'pointer' }}>
                    <StyledBanner
                      // https://image.tmdb.org/t/p/original/: This is the base URL for accessing TMDb images.
                      // ${movie.backdrop_path}: This is the specific path to the backdrop image for the given movie.
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                      alt="poster"
                    />
                    <Moviename>
                      <PlayCircleIcon color="#cfd8dc" fontSize="large" />
                      <Box>{movie.original_title}</Box>
                    </Moviename></button>                    
                  </Hidden>
                )}
              </Box>
            </Check>
          ))
        }
      </Carousel>
    </Box>
  
  );
};

export default Banner;
