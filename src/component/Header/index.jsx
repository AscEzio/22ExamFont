import {useRef} from 'react'
import { TextField, Button, Box } from '@mui/material'
import { nanoid } from 'nanoid'
import { useGoods } from '../../store/goods'
import { getValue } from '@mui/system'

export default function Header() {

    const nameRef = useRef()
    const priceRef = useRef()

    const {addGood} = useGoods()

    const add = ()=>{
        const name = nameRef.current.value
        const price = nameRef.current.value
        const goodObj = {id:nanoid(), name:name, price:parseInt(price), done:false}
        addGood(goodObj)
        nameRef.current.value = ""
        priceRef.current.value = ""
    }

    return (
        <Box
            sx={{
                marginTop:'20px'
            }}
        >
            <TextField
                variant='outlined'
                size='small'
                label='输入商品名字'
                inputRef={nameRef}
                onChange={(e)=>getValue(e)}
                sx={{
                    width: '350px'
                }}
            />
            <TextField
                variant='outlined'
                size='small'
                label='输入价格'
                inputRef={priceRef}
                sx={{
                    width: '150px',
                    marginLeft: '5px'
                }}
            />
            <Button
                variant="contained"
                onClick={add}
                sx={{
                    marginLeft: '5px'
                }}
            >添加商品</Button>
        </Box>
    )
}
