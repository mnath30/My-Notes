import { Searchbar, Sidebar, ArchivedNote } from "../Components";
import "../styles/style.css";
import { data } from "../data";

const Archive = ({ contentTemplate }) => {
  return (
    <>
      <Sidebar classtemplate="side-section" />
      <div className={`${contentTemplate}`}>
        <Searchbar />
        <h2>Archived Notes</h2>
        <div className="note-container">
          {data.map((item) => (
            <ArchivedNote noteItem={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export { Archive };
