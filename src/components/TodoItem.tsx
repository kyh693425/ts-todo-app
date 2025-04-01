import {FC} from "react";
import {Todo} from "../types/todo";

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({todo, onToggle, onDelete}) => {
    return (
        <li>
            <span
                onClick={() => onToggle(todo.id)}
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    cursor: "pointer",
                    marginRight: "8px",
                }}
            >
            {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)}>삭제</button>
        </li>
    );
};

export default TodoItem;

