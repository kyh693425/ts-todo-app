import {useTodos} from "./hooks/useTodos";
import TodoInput from "./components/TodoInput.tsx";
import TodoList from "./components/TodoList.tsx";
import FilterButtons from "./components/FilterButtons.tsx";

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

            <FilterButtons filter={filter} setFilter={setFilter} />

            <TodoList
                todos={filteredTodos}
                onToggle={handleToggle}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default App

