import { Searchbar, Sidebar, ArchivedNote } from "../Components";
import "../styles/style.css";
import { useNotes } from "../Context";

const Archive = ({ contentTemplate }) => {
  const { noteState } = useNotes();
  const { archivednotes } = noteState;
  return (
    <>
      <Sidebar classtemplate="side-section" />
      <div className={`${contentTemplate}`}>
        <Searchbar />
        <h2> Archived Notes </h2>
        <div className="note-container">
          {archivednotes.length === 0 && (
            <h1>You have not added any archived notes yet...</h1>
          )}
          {archivednotes.length !== 0 &&
            archivednotes.map((item) => (
              <ArchivedNote key={item._id} noteItem={item} />
            ))}
        </div>
      </div>
    </>
  );
};

export { Archive };
