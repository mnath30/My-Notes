const setTheme = (theme, setDarkTheme, darkTheme) => {
  setDarkTheme(!darkTheme);
  localStorage.setItem("theme", theme);
};

export { setTheme };
