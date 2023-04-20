import { FC, useState } from "react"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

import Pizza from "../models/Pizza"
import EditPizzaForm from "./EditPizzaForm"

interface SinglePizzaProps {
  pizza: Pizza
  updatePizza: (newPizza: Pizza) => void
}

const SinglePizza: FC<SinglePizzaProps> = ({ pizza, updatePizza }) => {
  const [edit, setEdit] = useState<boolean>(false)

  const handleToggleEdit = () => {
    setEdit(!edit)
  }

  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price}$</span>
      <div className="pizza-controls">
        <div onClick={handleToggleEdit}>
          <AiFillEdit />
        </div>
        <div>
          <AiFillDelete />
        </div>
      </div>

      {edit ? <EditPizzaForm data={pizza} updatePizza={updatePizza} /> : null}
    </div>
  )
}

export default SinglePizza
