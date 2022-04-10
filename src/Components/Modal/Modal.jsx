import "./modal.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNotes } from "../../Context";
import { getCurrentDate, tagData, defaultNoteData } from "../../helper";

const Modal = ({ modalClose }) => {
  const [noteData, setNoteData] = useState(defaultNoteData);
  const { noteDispatch } = useNotes();
  const { setShowModal } = modalClose;
  const handleTagList = (e) => {
    if (e.target.checked) {
      noteData.taglist.includes(e.target.value)
        ? setNoteData({ ...noteData, taglist: [...noteData.taglist] })
        : setNoteData({
            ...noteData,
            taglist: [...noteData.taglist, e.target.value],
          });
    } else {
      setNoteData({
        ...noteData,
        taglist: noteData.taglist.filter((item) => item !== e.target.value),
      });
    }
  };

  const saveData = () => {
    const newnote = {
      _id: uuid(),
      noteTitle: noteData.title === "" ? "Empty Note" : noteData.title,
      noteContent: noteData.content,
      noteTags: noteData.taglist,
      date: getCurrentDate(),
    };
    setShowModal((showModal) => !showModal);
    setNoteData(defaultNoteData);
    noteDispatch({ type: "ADD_TO_ALL_NOTES", payload: newnote });
  };
  return (
    <div
      className="input-modal-body"
      onClick={() => setShowModal((showModal) => !showModal)}
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
              onChange={(e) =>
                setNoteData({ ...noteData, title: e.target.value })
              }
              value={noteData.title}
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
                setNoteData({ ...noteData, content: e.target.value })
              }
              value={noteData.content}
            ></textarea>
          </div>
          <div>
            <h3 className="padding-sm">Tags</h3>
            <div className="padding-sm">
              {tagData.map((element) => (
                <span key={element.id} className="input-tag">
                  <input
                    type="checkbox"
                    id={element.id}
                    name={element.labelname}
                    onChange={(e) => handleTagList(e)}
                    value={element.id}
                  />
                  <label htmlFor={element.id}>{element.labelname}</label>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="modal-btn border" onClick={saveData}>
            Save
          </button>
          <button
            className="modal-btn border"
            onClick={() => setShowModal((showModal) => !showModal)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export { Modal };
