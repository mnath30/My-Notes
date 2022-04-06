import "./note.css";

const DeletedNote = ({ noteItem }) => {
  const { title, content, tags, date } = noteItem;
  return (
    <div className="modal">
      <div className="modal-header">
        <h3>{title}</h3>
        <div className="modal-dismiss">
          <i className="fas fa-trash-restore-alt"></i>
        </div>
      </div>
      <div className="modal-body">
        {content}
        <div className="tag-section">
          Tags:{" "}
          {tags.map((item) => (
            <span className="badge">{item}</span>
          ))}
        </div>
      </div>
      <div className="modal-footer">
        <span className="date-section">Created on: {date} </span>
        <span>
          <button className="modal-btn border">
            <i className="fas fa-archive"></i>
          </button>
          <button className="modal-btn border">
            <i className="fas fa-trash"></i>
          </button>
        </span>
      </div>
    </div>
  );
};

export { DeletedNote };
