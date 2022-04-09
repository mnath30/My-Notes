import "./note.css";
import { useNotes } from "../../Context/noteContext";

const DeletedNote = ({ noteItem }) => {
  const { noteDispatch } = useNotes();
  const { noteTitle, noteContent, noteTags, date } = noteItem;
  return (
    <div className="modal">
      <div className="modal-header">
        <h3>{noteTitle}</h3>
        <div
          className="modal-dismiss"
          onClick={() =>
            noteDispatch({ type: "REMOVE_FROM_TRASH", payload: noteItem })
          }
        >
          <i className="fas fa-trash-restore-alt"></i>
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
            onClick={() =>
              noteDispatch({ type: "ARCHIVE_FROM_DELETE", payload: noteItem })
            }
          >
            <i className="fas fa-archive"></i>
          </button>
          <button
            className="modal-btn border"
            onClick={() =>
              noteDispatch({ type: "DELETE_FROM_TRASH", payload: noteItem })
            }
          >
            <i className="fas fa-trash"></i>
          </button>
        </span>
      </div>
    </div>
  );
};

export { DeletedNote };
