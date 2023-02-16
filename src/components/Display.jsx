import { useContext } from 'react'

import Contexts from '../contexts/Contexts'
import Info from './Info';

import React from 'react'



const Display = () => {
    const { total, amount, setAmount, setpeople, setTip, setBill, settotal } = useContext(Contexts);

    const setZero = () => {
        setAmount(0)
        setpeople(0)
        setTip(0)
        setBill(0)
        settotal(0)
        window.location.reload()
    }
    return (
        <div className="bg-dark-cyan rounded-2xl flex flex-col p-10 md:w-[50%] gap-14" >
            <div className="flex flex-col gap-3 md:h-[55%] md:w-full align-middle justify-evenly">
                <Info title="Tip Amount" value={amount} />
                <Info title="Total" value={total} />
            </div>
            <div className="flex align-middle justify-center md:h-25%">
                <button className='bg-strong-cyan hover:bg-light-grayish-cyan rounded-md h-[3rem] mt-[1rem] text-dark-cyan w-[90%]' onClick={setZero} >
                    RESET
                </button>
            </div>
        </div>
    )
}

export default Display