import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Home, Archive, Trash, Profile } from "./pages";
import { Navbar } from "./Components";
import { useTheme } from "./Context/themeContext";

function App() {
  const { darkTheme } = useTheme();
  return (
    <div className={`App ${darkTheme ? "dark" : ""} grid`}>
      <Navbar navTemplate="navigation-bar" />
      <Routes>
        <Route path="/" element={<Home contentTemplate="content-section" />} />
        <Route
          path="/archive"
          element={<Archive contentTemplate="content-section" />}
        />
        <Route
          path="/trash"
          element={<Trash contentTemplate="content-section" />}
        />
        <Route
          path="/profile"
          element={<Profile contentTemplate="content-section" />}
        />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
