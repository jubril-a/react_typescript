import { createContext, ActionDispatch } from "react";

type Action = 
  | {type: "add", text: string}
  | {type: "mark_complete", id: number}
  | {type: "mark_incomplete", id: number}
  | {type: "delete", id: number}

const StateContext = createContext<ActionDispatch<[action: Action]> | null>(null)

export default StateContext