import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, styled } from '@mui/material';

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
const Banner = ({ movies }) => {
  return (
    <Box style={{ width: '65%' }}>
      
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        slidesToSlide={1}
      >
        {
          movies.map((movie) => (
            <StyledBanner
            // https://image.tmdb.org/t/p/original/: This is the base URL for accessing TMDb images.
            // ${movie.backdrop_path}: This is the specific path to the backdrop image for the given movie.
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="banner"
            />
          ))
        }
      </Carousel>
    </Box>
  );
};

export default Banner;
