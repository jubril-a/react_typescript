'use client'

import Task from "./Task"
import TodoForm from "./TodoForm"
import { useReducer } from "react"
import StateContext from "../stateContext"

type TodoType = {
  id: number,
  text: string,
  completed: boolean
}

type State = Array<TodoType>

type Action = 
  | {type: "add", text: string}
  | {type: "mark_complete", id: number}
  | {type: "mark_incomplete", id: number}
  | {type: "delete", id: number}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add": 
      return [...state, {id: state.length, text: action.text, completed: false}]
    case "delete": 
      return [...state].splice(action.id, 1)
    case "mark_complete":
      state[action.id] = {...state[action.id], completed: true}
      return [...state]
    case "mark_incomplete":
      state[action.id] = {...state[action.id], completed: false}
      return [...state]
    default:
      return state
  }
}

 
const Todo = () => {

  const [ state, dispatch ] = useReducer(reducer, [])

  return (
    <StateContext.Provider value={dispatch}>
      <main>
          <div className="mb-20">
              <h1 className="text-center text-5xl mb-10 font-semibold">Todo List</h1>
              <div className="">
                {state.map((task) => <Task key={task.id} id={task.id} text={task.text} completed={task.completed} />)}
              </div>
          </div>
          <TodoForm />   
      </main>
    </StateContext.Provider>
  )
}

export default Todo