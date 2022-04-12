import { Searchbar, Sidebar, Note, Modal } from "../Components";
import "../styles/style.css";
import { useNotes } from "../Context";
import { useDisplayModal } from "../hooks";

const Home = ({ contentTemplate }) => {
  const { noteState } = useNotes();
  const { allnotes } = noteState;
  const { showModal, setShowModal } = useDisplayModal();

  return (
    <>
      <Sidebar classtemplate="side-section" />
      <div className={`${contentTemplate}`}>
        <Searchbar />
        <button
          className="note-button"
          onClick={() => setShowModal((showModal) => !showModal)}
        >
          Create New Note
        </button>
        {showModal && <Modal closeModal={setShowModal} />}
        <h2>All Notes</h2>
        <div className="note-container">
          {allnotes.length === 0 && (
            <h1>You have not added any notes yet...</h1>
          )}
          {allnotes.length !== 0 &&
            allnotes.map((item) => <Note key={item._id} noteItem={item} />)}
        </div>
      </div>
    </>
  );
};
export { Home };
