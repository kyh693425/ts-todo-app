import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from "../components/TodoItem";
import { vi } from "vitest";
import "@testing-library/jest-dom";
import {Todo} from "../types/todo";

describe("TodoItem", () => {
    const sampleTodo: Todo = { id: 1, text: "Test Todo", completed: false };

    it("renders todo text and delete button", () => {
        render(
            <TodoItem
                todo={sampleTodo}
                onToggle={() => {}}
                onDelete={() => {}}
            />
        );

        expect(screen.getByText("Test Todo")).toBeInTheDocument();
        expect(screen.getByText("삭제")).toBeInTheDocument();
    });

    it("applies line-through style when completed", () => {
        render(
            <TodoItem
                todo={{ ...sampleTodo, completed: true }}
                onToggle={() => {}}
                onDelete={() => {}}
            />
        );

        const allFilter = screen.getByText("Test Todo");
        expect(allFilter).toHaveStyle("textDecoration: line-through");
    });

    it("calls onToggle with id when text clicked", async () => {
        const handleToggle = vi.fn();
        render(
            <TodoItem
                todo={sampleTodo}
                onToggle={handleToggle}
                onDelete={() => {}}
            />
        );

        await userEvent.click(screen.getByText("Test Todo"));
        expect(handleToggle).toHaveBeenCalledWith(1);
    });

    it("calls onDelete with id when delete button clicked", async () => {
        const handleDelete = vi.fn();
        render(
            <TodoItem
                todo={sampleTodo}
                onToggle={() => {}}
                onDelete={handleDelete}
            />
        );
        await userEvent.click(screen.getByText("삭제"));
        expect(handleDelete).toHaveBeenCalledWith(1);
    });
});
