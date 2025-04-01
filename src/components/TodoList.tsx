import {FC} from "react";
import {Todo} from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({todos, onToggle, onDelete}) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default TodoList;

