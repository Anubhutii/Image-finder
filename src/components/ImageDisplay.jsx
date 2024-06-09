
import {Card, styled} from '@mui/material';

const StyleImage = styled('img')({
    height:300,
    width:'100%',
    objectFit: 'cover'

})

const ImageDisplay = ({image}) => {
  return (
    <Card sx={{margin: '0 2px'}}>
        <StyleImage src={image.largeImageURL} alt='image'/>
    </Card>
  )
}

export default ImageDisplay;
