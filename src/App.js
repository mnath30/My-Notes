import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import {
  Home,
  Archive,
  Trash,
  PageNotFound,
  LandingPage,
  Login,
  Signup,
  Logout,
} from "./pages";
import { Navbar } from "./components";
import { useTheme } from "./context";
import { RequiresAuth } from "./helper";

function App() {
  const { darkTheme } = useTheme();
  return (
    // <div className={`App ${darkTheme ? "dark" : ""} grid`}>
    <div className={`App ${darkTheme ? "dark" : ""}`}>
      <Navbar navTemplate="navigation-bar" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route
          path="home"
          element={
            <RequiresAuth>
              <Home contentTemplate="content-section" />
            </RequiresAuth>
          }
        /> */}
        <Route
          path="home"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route
          path="archive"
          element={
            <RequiresAuth>
              <Archive contentTemplate="content-section" />
            </RequiresAuth>
          }
        />
        <Route
          path="trash"
          element={
            <RequiresAuth>
              <Trash contentTemplate="content-section" />
            </RequiresAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
