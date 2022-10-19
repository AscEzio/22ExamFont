import { useState, useRef } from 'react'
import { Box, Button, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import { useGoods } from '../../store/goods'
import { useFare } from '../../store/fare'


export default function Item(props) {

    const { name, price, id } = props
    const { updataGood, deleteGood } = useGoods()
    const { addFare } = useFare()
    const [able, setAble] = useState(true)
    const [mouse, setMouse] = useState(false)
    const inputRef = useRef()

    return (
        <Box
            onMouseOver={()=> setMouse(true) }
            onMouseOut={()=> setMouse(false) }
            sx={{
                backgroundColor: mouse ?  "rgb(220,220,220)" : "white",
                hight: '40px'
            }}
        >
            <input
                type="text"
                defaultValue={name}
                disabled={able}
                ref={inputRef}
                onBlur={() => setAble(true)}
                style={{
                    borderStyle: "hidden",
                    width: '100px',
                    fontSize: '15px',
                    color: 'black',
                    backgroundColor: mouse ?  "rgb(220,220,220)" : "white"
                }}
            />
            <Box
                style={{
                    display: 'inline-block',
                    position: 'relative',
                    left: '100px',
                    width: "60px"
                }}
            >{price}元</Box>
            <Button
                variant="contained"
                size='small'
                onClick={() => {
                    setAble(false)
                    inputRef.current.focus()
                }}
                sx={{
                    marginLeft: '230px'
                }}
            >修改名称</Button>
            <Button
                variant="contained"
                size='small'
                sx={{
                    marginLeft: '10px'
                }}
                onClick={() => {
                    updataGood(id, true)
                    addFare(price)
                }}
            >购买</Button>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteGood(id)} sx={{ marginLeft: '5px' }}>
                <DeleteIcon />
            </IconButton>
        </Box>
    )
}
