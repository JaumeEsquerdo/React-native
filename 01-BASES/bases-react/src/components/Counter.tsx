import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
    const { count, increaseBy } = useCounter()

    return (
        <>
            <h3>Contador: <small className="font-bold">{count}</small>
            </h3>
            <div>
                <button onClick={() => increaseBy(1)} className="w-10 p-2 text-white bg-blue-500 rounded-xl hover:bg-blue-700">+1</button>
                <button onClick={() => increaseBy(-1)} className="w-10 p-2 text-white bg-blue-500 rounded-xl hover:bg-blue-700">-1</button>
            </div>
        </>
    );
}

