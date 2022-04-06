const initialThemeValue = () => {
  const theme = localStorage.getItem("theme");
  if (theme === null) {
    return false;
  }
  if (theme === "light") {
    return false;
  }
  return true;
};

export { initialThemeValue };
