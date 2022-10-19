import create from "zustand"
import { combine } from "zustand/middleware"

export const useFare = create(
    combine(
        {
            totalFare: 0
        },
        (set, get) => (
            {
                addFare: (num) => {
                    const { totalFare } = get()
                    set({ totalFare: totalFare + num })
                },
                deFare: (num) => {
                    const { totalFare } = get()
                    set({ totalFare: totalFare - num })
                }
            }
        )
    )
)