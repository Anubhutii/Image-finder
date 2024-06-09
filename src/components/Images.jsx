
import {Grid} from '@mui/material';
import ImageDisplay from './ImageDisplay';


const Images = ({data}) =>{
    return (
        <Grid container>
            {
            data.map(image =>(
                <Grid xs={3} item>
                    <ImageDisplay image={image} />
                </Grid>
                

            ))
        }

        </Grid>
    )
}

export default Images;