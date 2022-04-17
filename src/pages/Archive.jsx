import { Searchbar, Sidebar, ArchivedNote } from "../Components";
import "../styles/style.css";
import { useNotes } from "../Context";
import { searchFilter } from "../helper";

const Archive = ({ contentTemplate }) => {
  const { noteState } = useNotes();
  const { archivednotes, search } = noteState;
  const searchedArchive = searchFilter(archivednotes, search);
  return (
    <>
      <Sidebar classtemplate="side-section" />
      <div className={`${contentTemplate}`}>
        <Searchbar />
        <h2> Archived Notes </h2>
        <div className="note-container">
          {searchedArchive.length === 0 && (
            <h1>You have not added any archived notes yet...</h1>
          )}
          {searchedArchive.length !== 0 &&
            searchedArchive.map((item) => (
              <ArchivedNote key={item._id} noteItem={item} />
            ))}
        </div>
      </div>
    </>
  );
};

export { Archive };
