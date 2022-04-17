import { Searchbar, Sidebar, DeletedNote } from "../Components";
import "../styles/style.css";
import { useNotes } from "../Context";
import { searchFilter } from "../helper";

const Trash = ({ contentTemplate }) => {
  const { noteState } = useNotes();
  const { deletednotes, search } = noteState;
  const filterTrashNotes = searchFilter(deletednotes, search);
  return (
    <>
      <Sidebar classtemplate="side-section" />
      <div className={`${contentTemplate}`}>
        <Searchbar />
        <h2>Notes in Trash</h2>
        <div className="note-container">
          {filterTrashNotes.length === 0 && (
            <h1>You have not added any notes to trash yet...</h1>
          )}
          {filterTrashNotes.length !== 0 &&
            filterTrashNotes.map((item) => (
              <DeletedNote key={item._id} noteItem={item} />
            ))}
        </div>
      </div>
    </>
  );
};

export { Trash };
