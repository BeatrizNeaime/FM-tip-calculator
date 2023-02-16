import { useContext, useEffect } from 'react'

import Contexts from '../contexts/Contexts'
import dolar from "../assets/img/icon-dollar.svg";
import person from "../assets/img/icon-person.svg";
import Subtitle from './Subtitle';
import TipBtn from './TipBtn';


const Form = () => {
    const { amount, bill, tip, people, setAmount, setpeople, setBill, setTip, setCalc, settotal } = useContext(Contexts);

    const handleBill = (e) => {
        const { value } = e.target
        setBill(value)
    }

    const setValues = (e) => {
        setpeople(e.target.value)
    }

    const calculator = () => {
        if (people <= 0) {
            setAmount("00.00")
            settotal("00.00")
        } else {
            let gorjeta = ((bill * tip) / 100).toFixed(2)
            setAmount(parseFloat((gorjeta / people).toFixed(2)))
            let pessoal = (((bill/people) + gorjeta).toFixed(2))
            //settotal(pessoal)  
        }
    }

    useEffect(() => {
        calculator()
    }, [people]);

    return (
        <div className='md:w-[50%] mb-[2rem] w-full flex flex-col '>
            <Subtitle text="Bill" />
            <div className="">
                <i><img src={dolar} alt="dolar symbol" className="absolute p-3" /></i>
                <input type="number" className={`p-3 h-[2.8rem] w-full bg-light-grayish-cyan rounded-md focus:text-dark-cyan text-right text-[24px]`} placeholder="0" onChange={handleBill} />
            </div>
            <Subtitle text="Select Tip %" />
            <div className="flex align-middle justify-evenly flex-wrap gap-5">
                <TipBtn tipvalue={5} />
                <TipBtn tipvalue={10} />
                <TipBtn tipvalue={15} />
                <TipBtn tipvalue={25} />
                <TipBtn tipvalue={50} />
                <input type="number" className={`p-3 w-28 h-[2.8rem] bg-light-grayish-cyan rounded-md focus:text-dark-cyan text-right text-[24px]`} placeholder="CUSTOM" onChange={(e) => setTip(e.target.value)} />
            </div>
            <Subtitle text="Number of People" />
            <div className="">
                <i><img src={person} alt="dolar symbol" className="absolute p-3" /></i>
                <input type="number" className={`p-3 h-[2.8rem] w-full bg-light-grayish-cyan rounded-md focus:text-dark-cyan text-right text-[24px]`} placeholder="0" onChange={setValues} />
            </div>
        </div>
    )
}

export default Form