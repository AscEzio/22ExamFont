import create from "zustand"
import { combine } from "zustand/middleware"

export const useGoods = create(
    combine(
        {
            goods: [
                { id: "001", name: '苹果', price: 5, done: false },
                { id: "002", name: '香蕉', price: 6, done: false },
                { id: "003", name: '梨', price: 7, done: true },
            ]
        },
        (set, goods) => (
            {
                //更新购买状态
                updataGood: (id, done) => {
                    const newGoods = goods().goods.map((good) => {
                        if (id === good.id) return { ...good, done: done }
                        else return good
                    })
                    set({goods:newGoods})
                },
                //添加一个商品
                addGood:(goodObj)=>{
                    const newGoods = [goodObj, ...goods().goods]
                    set({goods:newGoods})
                },
                //删除一个商品
                deleteGood:(id)=>{
                    const newGoods = goods().goods.filter((good) => {
                        return good.id !== id
                    })
                    set({goods:newGoods})
                }
            }
        )
    )
)