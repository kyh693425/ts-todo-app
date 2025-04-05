import {useTodos} from "./hooks/useTodos";
import TodoInput from "./components/TodoInput.tsx";
import TodoList from "./components/TodoList.tsx";

function App() {
    const {
        input,
        filter,
        setInput,
        setFilter,
        handleAddTodo,
        handleToggle,
        handleDelete,
        filteredTodos,
    } = useTodos();

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

