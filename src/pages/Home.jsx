import { Searchbar, Sidebar, Note, Modal, Filter } from "../components";
import "../styles/style.css";
import { useNotes } from "../context";
import { useDisplayModal } from "../hooks";
import { sortByDate, searchFilter } from "../helper";

const Home = () => {
  const { noteState } = useNotes();
  const { allnotes, sort, search } = noteState;
  const { showModal, setShowModal } = useDisplayModal();
  const sortedNotes = sortByDate(allnotes, sort);
  const searchedNotes = searchFilter(sortedNotes, search);
  const pinnedNotes = searchedNotes.filter((element) => element.isPinned);
  const unpinnedNotes = searchedNotes.filter((element) => !element.isPinned);

  return (
    <div className="grid container">
      <Sidebar />
      <div className="content-section">
        <Searchbar />
        <Filter />
        <button
          className="note-button"
          onClick={() => setShowModal((showModal) => !showModal)}
        >
          Create New Note
        </button>
        {showModal && <Modal closeModal={setShowModal} />}

        {pinnedNotes.length !== 0 && (
          <>
            <h1>Pinned Notes</h1>
            <div className="note-container">
              {pinnedNotes.map((note) => (
                <Note key={note._id} noteItem={note} />
              ))}
            </div>
          </>
        )}

        <h2>All Notes</h2>
        <div className="note-container">
          {unpinnedNotes.length === 0 && (
            <h1>You have not added any notes yet...</h1>
          )}
          {unpinnedNotes.length !== 0 &&
            unpinnedNotes.map((item) => (
              <Note key={item._id} noteItem={item} />
            ))}
        </div>
      </div>
    </div>
  );
};
export { Home };
