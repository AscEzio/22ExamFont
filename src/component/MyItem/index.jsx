import {useState} from 'react'
import {Box, IconButton} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import { useGoods } from '../../store/goods'
import { useFare } from '../../store/fare'

export default function Item(props) {

    const { name, price, id } = props
    const { updataGood } = useGoods()
    const { deFare } = useFare()


    const [mouse, setMouse] = useState(false)

    return (
        <Box
            onMouseOver={()=> setMouse(true) }
            onMouseOut={()=> setMouse(false) }
            sx={{
                backgroundColor: mouse ?  "rgb(220,220,220)" : "white",
                height:'40px'
            }}
        >
            <Box
                sx={{
                    display:'inline-block',
                    width:'100px',
                }}
            >{name}</Box>
            <Box
                style={{
                    display:'inline-block',
                    position: 'relative',
                    left: '100px',
                    width:"60px"
                }}
            >{price}元</Box>
            <IconButton edge="end" aria-label="delete" sx={{ marginLeft: '380px' }} onClick={()=>{updataGood(id, false);deFare(price)}}>
                <DeleteIcon />
            </IconButton>
        </Box>
    )
}
