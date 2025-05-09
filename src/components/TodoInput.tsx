import {FC} from "react";

interface TodoInputProps {
    input: string;
    onChange: (value: string) => void;
    onAdd: (value: string) => void;
}

const TodoInput: FC<TodoInputProps> = ({ input, onChange, onAdd }) => {
    return (
        <div>
            <input
                placeholder="할 일을 입력하세요"
                value={input}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") onAdd(input);
                }}
            />
            <button onClick={() => onAdd(input)}>추가</button>
        </div>
    );
};

export default TodoInput;

