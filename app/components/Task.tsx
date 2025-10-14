type TaskProps = {
    id: number,
    text: string,
    completed: boolean
}

const Task = ({id, text, completed}: TaskProps) => {
    return (
        <div className="flex justify-between w-150 border border-gray-500 py-2 px-4 items-center mb-2">
            <p className="font-medium text-gray-800">{text}</p>
            <div>
                <button className="bg-amber-400 p-2 mr-2 hover:bg-amber-500 cursor-pointer">{completed ? "Unmark" : "Mark as Done"}</button>
                <button className="bg-red-600 text-white p-2 hover:bg-red-700 cursor-pointer">Delete</button>
            </div>
        </div>
    )
}

export default Task