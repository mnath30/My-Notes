import { Link } from "react-router-dom";
import { notesImg } from "../../asset";
import "./landing-page.css";

const LandingPage = () => {
  return (
    <div className="landingpage__container">
      <div className="landingpage__details">
        <h1 className="txt-xl landingpage__header">My Notes</h1>
        <p className="landingpage__para">
          Capture all your important notes in one place.
        </p>
        <Link to="/signup">
          <button className="note-button ">Get Started Now</button>
        </Link>
        <br />
        <Link to="/login" className="link  landingpage__link">
          Already have an Account
        </Link>
      </div>
      <div className="landingpage__image">
        <img src={notesImg} alt="banner" className="responsive-img" />
      </div>
    </div>
  );
};

export { LandingPage };
