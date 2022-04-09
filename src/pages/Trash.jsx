import { Searchbar, Sidebar, DeletedNote } from "../Components";
import "../styles/style.css";
import { useNotes } from "../Context/noteContext";

const Trash = ({ contentTemplate }) => {
  const { noteState } = useNotes();
  const { deletednotes } = noteState;
  return (
    <>
      <Sidebar classtemplate="side-section" />
      <div className={`${contentTemplate}`}>
        <Searchbar />
        <h2>Notes in Trash</h2>
        <div className="note-container">
          {deletednotes.length === 0 && (
            <h1>You have not added any notes to trash yet...</h1>
          )}
          {deletednotes.length !== 0 &&
            deletednotes.map((item) => (
              <DeletedNote key={item._id} noteItem={item} />
            ))}
        </div>
      </div>
    </>
  );
};

export { Trash };
