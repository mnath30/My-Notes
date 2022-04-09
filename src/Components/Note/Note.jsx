import "./note.css";
import { useNotes } from "../../Context/noteContext";
import { Modal } from "../Modal/Modal";
import { updateNote } from "../../helper";

const Note = ({ noteItem, setUpdateModal }) => {
  const setShowModal = setUpdateModal;
  const { noteDispatch } = useNotes();
  const { noteTitle, noteContent, noteTags, date } = noteItem;
  return (
    <div className="modal">
      <div className="modal-header">
        <h3>{noteTitle}</h3>
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
            onClick={() => updateNote(noteItem, setShowModal)}
          >
            <i className="fas fa-edit"></i>
          </button>
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
