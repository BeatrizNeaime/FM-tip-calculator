import Display from "./Display"
import Form from "./Form"

const Card = () => {
  return (
    <div className="bg-light-cyan md:w-[75%] md:flex rounded-3xl p-[1.5rem] w-full ">
        <Form/>
        <Display/>
    </div>
  )
}

export default Card