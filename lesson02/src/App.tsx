import React, { FC, useState } from "react"
import "./App.css"

import AddPizzaForm from "./components/AddPizzaForm"
import Pizza from "./models/Pizza"
import DisplayPizzas from "./components/DisplayPizzas"

const App: FC = () => {
  const [pizzaList, setPizzaList] = useState<Pizza[]>([])

  const addPizza = (newPizza: Pizza) => {
    setPizzaList([...pizzaList, newPizza])
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzaList(
      pizzaList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
    )
  }

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">TS practice</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas pizzaList={pizzaList} updatePizza={updatePizza} />
      </div>
    </div>
  )
}

export default App
