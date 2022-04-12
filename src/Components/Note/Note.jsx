import "./note.css";
import { useNotes } from "../../Context";
import { Modal } from "../Modal/Modal";
import { useDisplayModal } from "../../hooks";

const Note = ({ noteItem }) => {
  const { noteDispatch } = useNotes();
  const { noteTitle, noteContent, noteTags, date } = noteItem;
  const { showModal, setShowModal } = useDisplayModal();
  return (
    <div className="modal">
      <div className="modal-header">
        <h3>
          {noteTitle === "" && noteContent === "" ? "Empty Note" : noteTitle}
        </h3>
        <div className="modal-dismiss">
          <button className="modal-btn border">
            <i className="fas fa-thumbtack"></i>
          </button>
        </div>
      </div>
      <div className="line"></div>
      <div className="modal-body">
        <div className="main-note-content">{noteContent}</div>

        <div className="date-section">Created on: {date} </div>
        <div className="tag-section">
          Tags:
          {noteTags.length === 0 && (
            <span className="badge">No Tags Added</span>
          )}
          {noteTags.length !== 0 &&
            noteTags.map((item) => (
              <span key={item} className="badge">
                {item}
              </span>
            ))}
        </div>
      </div>
      <div className="modal-footer">
        <span>
          <button
            className="modal-btn border"
            onClick={() => setShowModal((showModal) => !showModal)}
          >
            <i className="fas fa-edit"></i>
          </button>
          {showModal && (
            <Modal
              closeModal={setShowModal}
              value={noteItem}
              modalInUpdateMode="true"
            />
          )}
          <button
            className="modal-btn border"
            onClick={() =>
              noteDispatch({
                type: "ARCHIVE_FROM_ALL_NOTES",
                payload: noteItem,
              })
            }
          >
            <i className="fas fa-archive"></i>
          </button>
          <button
            className="modal-btn border"
            onClick={() =>
              noteDispatch({
                type: "DELETE_FROM_ALL_NOTES",
                payload: noteItem,
              })
            }
          >
            <i className="fas fa-trash"></i>
          </button>
        </span>
      </div>
    </div>
  );
};

export { Note };
