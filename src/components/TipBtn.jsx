import { useContext} from 'react'

import Contexts from '../contexts/Contexts';

const TipBtn = ({ tipvalue }) => {

    const { tip, setTip } = useContext(Contexts);

    return (
        <div>
            <button className={tip === tipvalue ? 
            ('bg-strong-cyan text-center text-white rounded-md h-10 w-28 md:hover:bg-light-grayish-cyan')
        : ('bg-dark-cyan text-center text-white rounded-md h-10 w-28 md:hover:bg-light-grayish-cyan')}
                onClick={() => {
                    setTip(tipvalue)
                }} >
                {tipvalue}%
            </button>
        </div>
    )
}

export default TipBtn