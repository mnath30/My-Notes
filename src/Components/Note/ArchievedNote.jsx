import "./note.css";
import { useNotes } from "../../Context";
import { Modal } from "../Modal/Modal";
import { useDisplayModal, useShowColorPalette } from "../../hooks";
import { handleBlur } from "../../helper";
import { ColorPalette } from "../ColorPalette/ColorPalette";

const ArchivedNote = ({ noteItem }) => {
  const { noteDispatch } = useNotes();
  const { noteTitle, noteContent, noteTags, date, backgroundColor } = noteItem;
  const { showModal, setShowModal } = useDisplayModal();
  const { displayColorPalette, setDisplayColorPalette } = useShowColorPalette();
  return (
    <div className={`modal ${backgroundColor}`}>
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
                  page="archive"
                />
              )}
            </button>
          </div>
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
              isInArchive="true"
            />
          )}
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
