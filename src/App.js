import logo from './assets/img/logo.svg'
import Card from './components/Card';
import Contexts from './contexts/Contexts'

import { useState } from 'react'
import Footer from './components/Footer';

function App() {

  const [amount, setAmount] = useState(0);
  const [people, setpeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [total, settotal] = useState(0);
  
  return (
    <>
      <Contexts.Provider value={{ amount, setAmount, people, setpeople, tip, setTip, bill, setBill, total, settotal}}>
        <div className=" bg-light-grayish-cyan flex flex-col align-middle justify-center
          md:h-[100vh]
        ">
          <div className="flex flex-col h-[70%] w-full align-middle justify-evenly
          md:h-full
          ">
            <div className="flex align-middle justify-center w-full h-[5%] mt-[1.5rem]
            ">
              <img src={logo} alt="logo" />
            </div>
            <div className="flex w-full align-middle justify-evenly">
              <Card />
            </div>
          </div>
          <Footer/>
        </div>
      </Contexts.Provider>
    </>
  );
}

export default App;