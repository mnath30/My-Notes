import { Searchbar, Sidebar, DeletedNote } from "../Components";
import "../styles/style.css";
import { data } from "../data";

const Trash = ({ contentTemplate }) => {
  return (
    <>
      <Sidebar classtemplate="side-section" />
      <div className={`${contentTemplate}`}>
        <Searchbar />
        <h2>Deleted Notes</h2>
        <div className="note-container">
          {data.map((item) => (
            <DeletedNote noteItem={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export { Trash };
