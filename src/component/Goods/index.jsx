import React from 'react'
import { Box } from '@mui/material'
import Item from '../GoodsItem'
import { useGoods } from '../../store/goods'


export default function Goods() {

    const { goods } = useGoods()

    return (
        <Box
            sx={{
                marginTop: '15px'
            }}
        >
            <Box>
                <span>商品</span>
                <span
                    style={{
                        position: 'relative',
                        left: '450px'
                    }}
                >金钱总额:1000</span>
            </Box>
            <Box
                sx={{
                    border: '1px solid rgb(188,188,188)',
                    height: '240px'
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'white',
                        hight: '40px'
                    }}
                >
                    <Box
                        sx={{
                            display: 'inline-block',
                            width: '100px',
                            fontSize: '15px',
                            color: 'black',
                        }}
                    >商品名称</Box>
                    <Box
                        style={{
                            display: 'inline-block',
                            position: 'relative',
                            left: '100px',
                            width: "60px"
                        }}
                    >价格</Box>
                    {
                        goods.map((good) => {
                            if (good.done === false) return <Item key={good.id} {...good} />
                        })
                    }
                </Box>
            </Box>
        </Box>
    )
}
