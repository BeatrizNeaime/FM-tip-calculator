import { useContext, useState } from 'react'

import Contexts from '../contexts/Contexts'
import Info from './Info';

const Display = () => {

    const {amount, setamount, tip, people, bill} = useContext(Contexts);
    const [total, settotal] = useState('00,00');

    let gorj = bill*(tip/100)
    let gorjPessoa = (gorj/people).toFixed(2)
    // setamount(gorjPessoa)

    return (
        <div className="bg-dark-cyan md:w-[50%] rounded-2xl flex flex-col p-10" >
            <Info title="Tip Amount" value={amount} />
            <Info title="Total" value={total} />
            <button className='bg-strong-cyan hover:bg-light-grayish-cyan rounded-md h-[3rem] mt-[1rem] text-dark-cyan' >
                RESET
            </button>
        </div>
    )
}

export default Display