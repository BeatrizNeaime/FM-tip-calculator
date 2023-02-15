import logo from './assets/img/logo.svg'
import Card from './components/Card';
import Contexts from './contexts/Contexts'

import { useState } from 'react'

function App() {

  const [amount, setAmount] = useState(0);
  const [people, setpeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);

  return (
    <>
      <Contexts.Provider value={{ amount, setAmount, people, setpeople, tip, setTip, bill, setBill }}>
        <div className=" bg-light-grayish-cyan flex flex-col align-middle justify-center">
          <div className="flex flex-col h-[80%] w-full align-middle justify-evenly">
            <div className="flex align-middle justify-center w-full h-[10%]">
              <img src={logo} alt="logo" />
            </div>
            <div className="flex w-full align-middle justify-evenly">
              <Card />
            </div>
          </div>
        </div>
      </Contexts.Provider>
    </>
  );
}

export default App;