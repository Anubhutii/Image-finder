
import{Box, InputBase, styled} from '@mui/material';

const Component = styled(Box)({
    background: '#E0FFFF','& > div':{
        margin : 10
    }
})

const SearchRes = ({setText, setCount})=>{
    return(
        <Component>
            <InputBase 
                placeholder='Search Here'
                onChange={(e)=>setText(e.target.value)}
            />

            <InputBase 
                placeholder='Number of Images'
                type='number'

                onChange={(e)=>setCount(e.target.value)}

            />
        </Component>
    )
}

export default SearchRes;