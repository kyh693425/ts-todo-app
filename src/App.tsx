import {useState} from 'react'
import {useEffect} from "react";
import {Todo} from "./types/todo";
import TodoInput from "./components/TodoInput.tsx";
import TodoList from "./components/TodoList.tsx";

function App() {
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

    return (
        <div style={{padding: "20px", maxWidth: "400px", margin: "0 auto"}}>
            <h1>📝 To-Do List</h1>

            <TodoInput
                input={input}
                onChange={setInput}
                onAdd={handleAddTodo}
            />

            <div style={{margin: "10px 0"}}>
                <button onClick={() => setFilter("all")}
                        style={{fontWeight: filter === "all" ? "bold" : "normal"}}>전체
                </button>
                <button onClick={() => setFilter("active")}
                        style={{fontWeight: filter === "active" ? "bold" : "normal"}}>진행중
                </button>
                <button onClick={() => setFilter("completed")}
                        style={{fontWeight: filter === "completed" ? "bold" : "normal"}}>완료
                </button>
            </div>

            <TodoList
                todos={filteredTodos}
                onToggle={handleToggle}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default App

