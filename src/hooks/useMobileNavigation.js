import { useState } from "react";

const useMobileNavigation = () => {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  const toggleSidebar = () => {
    setDisplayMobileNav((show) => !show);
  };
  const hideSidebar = () => {
    setDisplayMobileNav(false);
  };
  return { displayMobileNav, toggleSidebar, hideSidebar };
};

export { useMobileNavigation };
