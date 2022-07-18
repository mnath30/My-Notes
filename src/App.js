import "./App.css";
import { Navbar, Sidebar } from "./components";
import { useTheme } from "./context";
import { Router } from "./router/Router";
import { useMobileNavigation } from "./hooks";

function App() {
  const { darkTheme } = useTheme();
  const { displayMobileNav, toggleSidebar, hideSidebar } =
    useMobileNavigation();

  return (
    // <div className={`App ${darkTheme ? "dark" : ""} grid`}>
    <div className={`App ${darkTheme ? "dark" : ""}`}>
      <Navbar navTemplate="navigation-bar" toggleMobileNav={toggleSidebar} />
      <Router />

      {displayMobileNav && (
        <div className="background-overlay" onClick={hideSidebar}>
          <Sidebar
            classtemplate="mobile-sidebar"
            clickHandler={(e) => e.stopPropagation()}
            hideMobileNav={hideSidebar}
            mobileNav={displayMobileNav}
          />
        </div>
      )}
    </div>
  );
}

export default App;
