import "./note.css";
import { useNotes } from "../../context";
import { useShowColorPalette } from "../../hooks";
import { handleBlur } from "../../helper";
import { ColorPalette } from "../ColorPalette/ColorPalette";

const DeletedNote = ({ noteItem }) => {
  const { noteDispatch } = useNotes();
  const { noteTitle, noteContent, noteTags, date, backgroundColor } = noteItem;
  const { displayColorPalette, setDisplayColorPalette } = useShowColorPalette();

  return (
    <div className={`modal ${backgroundColor}`}>
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
          <div
            className="btn-color-palette"
            onBlur={(e) => handleBlur(e, setDisplayColorPalette)}
          >
            <button
              className="modal-btn border"
              onClick={() => {
                setDisplayColorPalette((show) => !show);
              }}
            >
              <i className="fas fa-palette"></i>
              {displayColorPalette && (
                <ColorPalette
                  design="color-palette"
                  noteCard={noteItem}
                  page="trash"
                />
              )}
            </button>
          </div>
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
