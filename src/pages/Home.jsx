import { Searchbar, Sidebar, Note } from "../Components";
import { data } from "../data";
import "../styles/style.css";

const Home = ({ contentTemplate }) => {
  return (
    <>
      <Sidebar classtemplate="side-section" />
      <div className={`${contentTemplate}`}>
        <Searchbar />
        <button className="note-button">Create New Note</button>
        <h2>All Notes</h2>
        <div className="note-container">
          {data.map((item) => (
            <Note noteItem={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export { Home };
