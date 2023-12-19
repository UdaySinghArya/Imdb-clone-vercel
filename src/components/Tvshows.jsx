import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Typography, styled } from '@mui/material';
import { Star } from '@mui/icons-material';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 700 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 2
  },
};

const WholeSlide = styled(Box)`
  margin-left:15px;
`
const StyledBanner = styled('img')`
    width:100%;
    
    margin-top:20px;
    mergin-left:10px;
`
const Title = styled(Typography)`
    color:#FFFFFF;
`

const SlideImageRating = styled(Box)`
  display:flex;
  
  & > p {
    color:white;
  }
`

const DetailedSection = styled(Box)`
  background-color:#212121;
`

const WatchList = styled(Box)`
display:flex;
background-color:#263238;
`
const Tvshows = ({ tvshows }) => {
  return (
    <div>
      <Box sx={{display:'flex',alignItems: 'center',marginTop:'40px',marginBottom:'30px'}}>
        <Typography sx={{fontWeight:'800',fontSize:'27px',color:'yellow'}}>Top Rated Movies</Typography>
        <ArrowForwardIosIcon  fontSize='large'  style={{ color: 'white',marginLeft:'20px'}}/>
      </Box>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        infinite={true}
        slidesToSlide={1}
      >
        {
          tvshows.map((movie) => (
            <>
              <WholeSlide>
                <StyledBanner style={{height:'100%'}}   src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="banner"/>
                <DetailedSection>
                  <SlideImageRating>
                    <Star color="warning" />
                    <Typography>{movie.vote_average}</Typography>

                    <StarBorderPurple500Icon color="primary" fontSize="small" style={{ marginLeft: '20px' }} />
                  </SlideImageRating>
                  <Title style={{ marginTop: '10px', position: 'fixed' }}>{movie.original_title}</Title>

                  <WatchList style={{ marginTop: '90px' }}>
                    <AddIcon color="primary" fontSize="small" />
                    <Typography color="primary" style={{ fontSize: '17px' }}>WatchList</Typography>
                  </WatchList>

                  <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                    <PlayArrowIcon style={{ color: '#ffffff', fontSize: 'large', marginTop: '10px' }} />
                    <Typography style={{ marginLeft: '5px', color: 'white' }}>Trailer</Typography>
                  </Box>
                </DetailedSection>
              </WholeSlide>

            </>
          ))
        }
      </Carousel >
    </div>
  )
}
export default Tvshows;