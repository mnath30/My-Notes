import "./modal.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNotes } from "../../Context/noteContext";
import { getCurrentDate } from "../../helper";
import { tagData } from "../../helper";

const Modal = ({ modalClose }) => {
  const { noteDispatch } = useNotes();
  const { setShowModal } = modalClose;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [taglist, setTagList] = useState([]);
  const handleTagList = (e) => {
    if (e.target.checked) {
      taglist.includes(e.target.value)
        ? setTagList([...taglist])
        : setTagList([...taglist, e.target.value]);
    } else {
      setTagList([...taglist.filter((item) => item !== e.target.value)]);
    }
  };

  const saveData = () => {
    const newnote = {
      _id: uuid(),
      noteTitle: title === "" ? "Empty Note" : title,
      noteContent: content,
      noteTags: taglist,
      date: getCurrentDate(),
    };
    setShowModal((showModal) => !showModal);
    setTitle("");
    setContent("");
    setTagList([]);
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
              onChange={(e) => setTitle(e.target.value)}
              value={title}
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
              onChange={(e) => setContent(e.target.value)}
              value={content}
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
