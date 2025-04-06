import {FC} from "react";

interface TodoInputProps {
    input: string;
    onChange: (value: string) => void;
    onAdd: () => void;
}

const TodoInput: FC<TodoInputProps> = ({input, onChange, onAdd}) => {
    return (
        <div>
            <input
                value={input}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") onAdd();
                }}
                placeholder="할 일을 입력하세요"
            />
            <button onClick={onAdd}>추가</button>
        </div>
    );
};

export default TodoInput;

