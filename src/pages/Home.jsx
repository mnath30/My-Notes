import { Searchbar, Sidebar, Note, Modal } from "../Components";
import "../styles/style.css";
import { useState } from "react";
import { useNotes } from "../Context/noteContext";

const Home = ({ contentTemplate }) => {
  const { noteState } = useNotes();
  const { allnotes } = noteState;
  const [showModal, setShowModal] = useState(false);
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
        {showModal && <Modal modalClose={{ setShowModal }} />}
        <h2>All Notes</h2>
        <div className="note-container">
          {allnotes.length === 0 && (
            <h1>You have not added any notes yet...</h1>
          )}
          {allnotes.length !== 0 &&
            allnotes.map((item) => (
              <Note
                setUpdateModal={setShowModal}
                key={item._id}
                noteItem={item}
                modalVisibility={showModal}
              />
            ))}
        </div>
      </div>
    </>
  );
};
export { Home };
