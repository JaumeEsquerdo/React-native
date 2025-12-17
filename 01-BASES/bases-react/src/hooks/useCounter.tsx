import { useState } from "react"

export const useCounter = () => {

    const [count, setCount] = useState<number>(10) //number para decir que tipo de dato va a manejar useState

    const increaseBy = (value: number) => {
        // setCount(count + value)
        // setCount((current) => current + value)
        setCount(Math.max(value + count, 0)) //para no dar valores negativos, ya que coge el mas grande entre los dos
    }

    return {
        //properties
        count,
        //actions
        increaseBy
    };
}
