import { Sidebar } from "../Components";
import "../styles/style.css";

const Profile = ({ contentTemplate }) => {
  return (
    <>
      <Sidebar classtemplate="side-section" />
      <div className={`${contentTemplate}`}>
        <div>My Profile section</div>
      </div>
    </>
  );
};
export { Profile };
