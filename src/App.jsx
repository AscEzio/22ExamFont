import React from 'react'
import Header from "./component/Header"
import Goods from "./component/Goods"
import Footer from './component/MyGoods'
import "./App.css"

export default function App() {
    return (
        <div
            className='main'
            style={{
                width:'600px'
            }}
        >
            <Header />
            <Goods />
            <Footer />
        </div>
    )
}
