'use client'

import Task from "./Task"
import TodoForm from "./TodoForm"
import { useReducer } from "react"

type TodoType = {
  id: number,
  text: string,
  completed: boolean
}

type State = Array<TodoType>

type Action = 
  | {type: "add", text: string}
  | {type: "toggle", id: number}
  | {type: "delete", id: number}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add": 
      return [...state, {id: state.length, text: action.text, completed: false}]
    case "delete": 
      return state.splice(action.id, 1)
    case "toggle": 
      return state.splice(action.id, 1, {...state[action.id], completed: !state[action.id].completed})
    default:
      return state
  }
}

 
const Todo = () => {

  const [ state, dispatch ] = useReducer(reducer, [{id: 0, text: "Wash the plates", completed: false}])

  return (
    <main>
        <div className="mb-20">
            <h1 className="text-center text-5xl mb-10 font-semibold">Todo List</h1>
            <div className="">
              {state.map((task) => <Task key={task.id} id={task.id} text={task.text} completed={task.completed} />)}
            </div>
        </div>
        <TodoForm dispatch={dispatch} />   
    </main>
  )
}

export default Todo