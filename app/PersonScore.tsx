'use client'

import { useEffect, useReducer } from "react"
import { getPerson } from "./getPerson"

type State = {
    name: string | undefined,
    score: number,
    loading: boolean
}

type Action = 
    | {type: "initialize", name: string}
    | {type: "increment"}
    | {type: "decrement"}
    | {type: "reset"}


function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'initialize':
            return {name: action.name, score: 0, loading: false}
        case 'increment':
            return {...state, score: state.score + 1}
        case 'decrement':
            return {...state, score: state.score - 1}
        case 'reset':
            return {...state, score: 0}
        default:
            return state
    }
}

const PersonScore = () => {

    const [{name, score, loading}, dispatch] = useReducer(reducer, {name: undefined, score: 0, loading: true})
    
    useEffect(() => {
        getPerson().then(({name}) => {
            dispatch({type: "initialize", name: name})
        })
    }, [])

    if (loading) {
        return <div>loading ...</div>
    }

  return (
    <div>
        <h1 className="text-4xl font-semibold mb-4">{name}, {score}</h1>
        <div className="flex gap-4">
            <button className="cursor-pointer" onClick={() => dispatch({type: "increment"})}>Add</button>
            <button className="cursor-pointer" onClick={() => dispatch({type: "decrement"})}>Subtract</button>
            <button className="cursor-pointer" onClick={() => dispatch({type: "reset"})}>Reset</button>
        </div>
    </div>
  )
}

export default PersonScore