import React, { useState, useRef, useEffect } from 'react'

const Demo2 = () => {
    const [y, setY] = useState(0)
    let x = 0;

    const ref = useRef(0);
    console.log('Rendering....');

    let i;
    useEffect(() => {
        i = setInterval(() => {
            console.log('Namaste Sazzad')
        }, 1000);
        return () => clearTimeout(i);
    }, [])
    return (
        <div className='m-4 p-2 w-96 h-96 border border-black '>
            <div>
                <button
                    className='bg-orange-600 px-2 m-4'
                    onClick={() => {
                        x = x + 1;
                        console.log(x);
                    }}
                >
                    Increase x
                </button>
                <span className='font-bold text-xl'>Let= {x}</span>

            </div>
            <div>
                <button
                    className='bg-orange-600 px-2 m-4'
                    onClick={() => {
                        setY(y + 1);
                    }}
                >
                    Increase Y
                </button>
                <span className='font-bold text-xl'>Let= {y}</span>
                <button
                    className='bg-orange-600 px-2 m-4'
                    onClick={() => {
                        setY(y - 1);
                    }}
                >
                    Decrease Y
                </button>
            </div>
            <div>
                <button
                    className='bg-orange-600 px-2 m-4'
                    onClick={() => {
                        ref.current = ref.current + 1;
                        console.log("ref=", ref.current)
                    }}
                >
                    Increase Ref
                </button>
                <span className='font-bold text-xl'>Ref= {ref.current}</span>

            </div>
            <button
                onClick={() => clearInterval(i)}
                className='bg-orange-500 p-2 m-20 text-white font-bold rounded-2xl '>Stop Printing</button>

        </div>
    )
}

export default Demo2