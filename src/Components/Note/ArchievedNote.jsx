import "./note.css";
import { useNotes } from "../../Context/noteContext";

const ArchivedNote = ({ noteItem }) => {
  const { noteDispatch } = useNotes();
  const { noteTitle, noteContent, noteTags, date } = noteItem;
  return (
    <div className="modal">
      <div className="modal-header">
        <h3>{noteTitle}</h3>
        <div className="modal-dismiss">
          <button
            className="modal-btn border"
            onClick={() =>
              noteDispatch({ type: "REMOVE_FROM_ARCHIVE", payload: noteItem })
            }
          >
            <i className="fas fa-inbox-out"></i>
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
          <button className="modal-btn border">
            <i className="fas fa-edit"></i>
          </button>
          <button
            className="modal-btn border"
            onClick={() =>
              noteDispatch({ type: "DELETE_FROM_ARCHIVE", payload: noteItem })
            }
          >
            <i className="fas fa-trash"></i>
          </button>
        </span>
      </div>
    </div>
  );
};

export { ArchivedNote };
