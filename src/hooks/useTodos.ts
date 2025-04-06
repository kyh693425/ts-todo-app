import {useState} from 'react'
import {useEffect} from "react";
import {Todo} from "../types/todo";

export function useTodos() {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const stored = localStorage.getItem("todos");
        return stored ? JSON.parse(stored) : [];
    });
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = () => {
        if (input.trim() === "") return;

        const newTodo: Todo = {
            id: Date.now(),
            text: input,
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setInput("");
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true; // all
    });

    const handleToggle = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );

        if (filter !== "all") {
            setFilter("all");
        }
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return {
        todos,
        input,
        filter,
        setTodos,
        setFilter,
        setInput,
        handleAddTodo,
        filteredTodos,
        handleToggle,
        handleDelete
    };
}


