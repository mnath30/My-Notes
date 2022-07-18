import "./filter.css";
import { useNotes } from "../../context";

const Filter = () => {
  const { noteDispatch } = useNotes();

  return (
    <div>
      <fieldset>
        <div className="radio-input">
          <input
            type="radio"
            id="dateDescending"
            name="sortByDate"
            value="dateDescending"
            onClick={() =>
              noteDispatch({ type: "SORT_BY_DATE", payload: "descending" })
            }
          />
          <label htmlFor="dateDescending">Sort by Newest First</label>
        </div>
        <div className="radio-input">
          <input
            type="radio"
            id="dateAscending"
            name="sortByDate"
            value="dateAscending"
            onClick={() =>
              noteDispatch({ type: "SORT_BY_DATE", payload: "ascending" })
            }
          />
          <label htmlFor="dateAscending">Sort by Oldest First</label>
        </div>
      </fieldset>
    </div>
  );
};

export { Filter };
