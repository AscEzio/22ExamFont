import {useEffect} from 'react'
import { Box, Button } from "@mui/material"
import MyItem from "../MyItem"
import { useGoods } from '../../store/goods'
import { useFare } from '../../store/fare'



export default function Footer() {

    let total = 0
    const { goods, updataGood } = useGoods()
    const { totalFare,addFare,deFare } = useFare()

    useEffect(async()=>{
        goods.map((good)=>{
            if(good.done === true)  total += good.price
        })
        addFare(total)
        total = 0
    },[])

    const sellAll = () => {
        goods.map((good) => {
            if (good.done === true){
                updataGood(good.id, false)
                total += good.price
            } 
        })
        deFare(total)
        total = 0
    }

    return (
        <Box
            sx={{
                marginTop: '15px'
            }}
        >
            <Box>
                <span>已购买商品</span>
                <span
                    style={{
                        position: 'relative',
                        left: '420px'
                    }}
                >总费用:{totalFare}</span>
            </Box>
            <Box
                sx={{
                    border: '1px solid rgb(188,188,188)',
                    height: '240px'
                }}
            >
                {
                    goods.map((good) => {
                        if (good.done === true) return <MyItem key={good.id} {...good} />
                    })
                }
            </Box>
            <Button
                variant='contained'
                size="small"
                onClick={sellAll}
                sx={{
                    marginLeft: "525px",
                    marginTop: '5px'
                }}
            >清空所有</Button>
        </Box>
    )
}
