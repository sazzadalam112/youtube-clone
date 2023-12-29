import React, { useMemo, useState } from 'react'
import { findNthPrime } from '../utils/helper'
import { BsFillMoonStarsFill } from "react-icons/bs";
// import DarkMode from './DarkMode';

const Demo = () => {
    const [text, setText] = useState(0)
    const [isDarkMode, setDarkMode] = useState(false)

    console.log('Render')
    const prime = useMemo(() => findNthPrime(text), [text])

    return (

        <div className={'m-4 p-2 w-96 h-96 border border-black ' + (isDarkMode && "bg-red-400")}
        >
            <div>
                <BsFillMoonStarsFill size={30}
                    onClick={() => setDarkMode(!isDarkMode)} />
                <input
                    className='border border-black w-60 p-1 px-2 mt-2'
                    type='number'
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }} />
            </div>
            <div>
                <h1 className='font-bold'>nth Prime: {prime}</h1>
            </div>

        </div>
    )
}

export default Demo