import { useRef, useContext, MouseEvent } from "react"
import StateContext from "../stateContext"

const TodoForm = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const dispatch = useContext(StateContext)

    function handleClick(e: MouseEvent<HTMLInputElement>) {
        e.preventDefault()

        if (inputRef.current && dispatch) {
            dispatch({type: "add", text: inputRef.current.value})
            inputRef.current.value = ""
        }
    }
    
  return (
    <div>
        <h2 className="text-center text-4xl mb-4 font-semibold">Add a Task</h2>
        <form className="flex gap-2 w-fit mx-auto">
            <input ref={inputRef} className="border px-2 border-gray-500 h-10" type="text" name="task" id="" />
            <input onClick={(e) => handleClick(e)} className="bg-amber-400 px-8 cursor-pointer hover:bg-amber-500" type="submit" value="add" />
        </form>
    </div>
  )
}

export default TodoForm