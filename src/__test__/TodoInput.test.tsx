import { render, screen, fireEvent } from "@testing-library/react";
import TodoInput from "../components/TodoInput";

describe("TodoInput", () => {
    it("renders input and button", () => {
        render(<TodoInput input="" onChange={() => {}} onAdd={() => {}} />);
        expect(screen.getByPlaceholderText("할 일을 입력하세요")).toBeInTheDocument();
        expect(screen.getByText("추가")).toBeInTheDocument();
    });

    it("calls onChange when typing", () => {
        const handleChange = vi.fn();
        render(<TodoInput input="" onChange={handleChange} onAdd={() => {}} />);
        fireEvent.change(screen.getByPlaceholderText("할 일을 입력하세요"), {
            target: { value: "test" },
        });
        expect(handleChange).toHaveBeenCalledWith("test");
    });

    it("calls onAdd when '추가' button is clicked", () => {
        const handleAdd = vi.fn();
        render(<TodoInput input="공부하기" onChange={() => {}} onAdd={handleAdd} />);
        fireEvent.click(screen.getByText("추가"));
        expect(handleAdd).toHaveBeenCalled();
    });
});
