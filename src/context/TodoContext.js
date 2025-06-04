import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: "Todo msg",
            completed: false
        },
        {
            id:2,
            todo: "Todo msg-2",
            completed: false
        }
    ],
    addTodo: (todo)  => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider