import {FC} from "react";

interface FilterButtonsProps {
    filter: "all" | "active" | "completed";
    setFilter: (filter: "all" | "active" | "completed") => void;
}

const FilterButtons: FC<FilterButtonsProps> = ({filter, setFilter}) => {
    return (
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
    );
};

export default FilterButtons;

