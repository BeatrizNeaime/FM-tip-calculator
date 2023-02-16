import { useContext, useEffect, useState } from 'react'

import Display from "./Display"
import Form from "./Form"
import Contexts from '../contexts/Contexts'

const Card = () => {
  const { calc } = useContext(Contexts);

  return ( 
    <div className="bg-light-cyan md:w-[75%] md:flex md:gap-5 rounded-3xl p-[1.5rem] w-full my-[1.5rem]">
      <Form/>
      <Display/>
    </div>
  )
}

export default Card