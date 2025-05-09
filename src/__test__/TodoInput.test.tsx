import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoInput from "../components/TodoInput";
import { vi } from "vitest";
import "@testing-library/jest-dom";

describe("TodoInput", () => {
    it("renders input and button", () => {
        render(<TodoInput input="" onChange={() => {}} onAdd={() => {}} />);
        expect(screen.getByPlaceholderText("할 일을 입력하세요"))
            .toBeInTheDocument();
        expect(screen.getByText("추가")).toBeInTheDocument();
    });

    it("calls onChange with each character typed", async () => {
        const handleChange = vi.fn();
        render(<TodoInput input="" onChange={handleChange} onAdd={() => {}} />);
        const input = screen.getByPlaceholderText("할 일을 입력하세요");

        await userEvent.type(input, "test");
        expect(handleChange).toHaveBeenCalledTimes(4);
        expect(handleChange.mock.calls.map(c => c[0]))
            .toEqual(["t", "e", "s", "t"]);
    });

    it("calls onAdd with current value when button clicked", async () => {
        const handleAdd = vi.fn();
        render(
            <TodoInput
                input="공부하기"
                onChange={() => {}}
                onAdd={handleAdd}
            />
        );
        await userEvent.click(screen.getByText("추가"));
        expect(handleAdd).toHaveBeenCalledWith("공부하기");
    });

    it("calls onAdd with current value when Enter pressed", async () => {
        const handleAdd = vi.fn();
        render(
            <TodoInput
                input="공부하기"
                onChange={() => {}}
                onAdd={handleAdd}
            />
        );
        const input = screen.getByPlaceholderText("할 일을 입력하세요");
        input.focus();
        await userEvent.keyboard("{Enter}");

        expect(handleAdd).toHaveBeenCalledWith("공부하기");
    });
});
