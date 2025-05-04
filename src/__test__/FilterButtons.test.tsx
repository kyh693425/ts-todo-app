import {render, screen} from "@testing-library/react";
import FilterButtons from "../components/FilterButtons";

describe("FilterButtons", () => {
    it("renders all filter buttons", async () => {
        const dummyFilter = "all";
        render(<FilterButtons filter={dummyFilter} setFilter={() => {}}/>);
        expect(screen.getByText("전체")).toBeInTheDocument();
        expect(screen.getByText("진행중")).toBeInTheDocument();
        expect(screen.getByText("완료")).toBeInTheDocument();
    });

    it("highlights selected all filter button", async () => {
        render(<FilterButtons filter="all" setFilter={() => {}}/>);

        const allFilter = screen.getByText("전체");
        expect(allFilter).toHaveStyle("font-weight: bold");
    });

    it("highlights selected active filter button", async () => {
        render(<FilterButtons filter="active" setFilter={() => {}}/>);

        const activeFilter = screen.getByText("진행중");
        expect(activeFilter).toHaveStyle("font-weight: bold");
    });

    it("highlights selected completed filter button", async () => {
        render(<FilterButtons filter="completed" setFilter={() => {}}/>);

        const completedFilter = screen.getByText("완료");
        expect(completedFilter).toHaveStyle("font-weight: bold");
    });
});
