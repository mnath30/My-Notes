import {
  tagData,
  defaultNoteData,
  saveNoteData,
  handleTagList,
} from "../../helper";
import { useNotes } from "../../context";
import { useNoteData } from "../../hooks";
import "./modal.css";

const Modal = ({
  closeModal,
  value,
  modalInUpdateMode = false,
  isInArchive = false,
}) => {
  const { noteDispatch } = useNotes();
  const { noteData, setNoteData } = useNoteData(
    modalInUpdateMode ? value : defaultNoteData
  );
  const tags = [...tagData];

  return (
    <div
      className="input-modal-body"
      onClick={() => closeModal((showModal) => !showModal)}
    >
      <div className="modal input-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          Title:
          <div>
            <input
              className="txt-input"
              type="text"
              placeholder="Enter Title..."
              id="title"
              value={noteData.noteTitle}
              onChange={(e) =>
                setNoteData({ ...noteData, noteTitle: e.target.value })
              }
            />
          </div>
        </div>
        <div className="modal-body">
          Content:
          <div>
            <textarea
              className="txt-input"
              placeholder="Enter note..."
              rows="4"
              cols="50"
              id="content"
              onChange={(e) =>
                setNoteData({ ...noteData, noteContent: e.target.value })
              }
              value={noteData.noteContent}
            ></textarea>
          </div>
          <div>
            <h3 className="padding-sm">Tags</h3>
            <div className="padding-sm">
              {tags.map((item) => (
                <span key={item.id} className="input-tag">
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.labelname}
                    onChange={(e) => handleTagList(e, noteData, setNoteData)}
                    value={item.id}
                    checked={noteData.noteTags.includes(item.id)}
                  />
                  <label htmlFor={item.id}>{item.labelname}</label>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          {modalInUpdateMode ? (
            <button
              className="modal-btn border"
              onClick={() => {
                closeModal((showModal) => !showModal);
                isInArchive
                  ? noteDispatch({
                      type: "UPDATE_FROM_ARCHIVE_NOTES",
                      payload: noteData,
                    })
                  : noteDispatch({
                      type: "UPDATE_FROM_ALL_NOTES",
                      payload: noteData,
                    });
              }}
            >
              Update
            </button>
          ) : (
            <button
              className="modal-btn border"
              onClick={() => {
                const newNote = saveNoteData(
                  noteData.noteTitle,
                  noteData.noteContent,
                  noteData.noteTags
                );
                closeModal((showModal) => !showModal);
                noteDispatch({ type: "ADD_TO_ALL_NOTES", payload: newNote });
              }}
            >
              Save
            </button>
          )}
          <button
            className="modal-btn border"
            onClick={() => closeModal((showModal) => !showModal)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export { Modal };
