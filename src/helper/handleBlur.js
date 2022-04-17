const handleBlur = (e, setDisplayColorPalette) => {
  if (!e.currentTarget.contains(e.relatedTarget)) {
    setDisplayColorPalette(false);
  }
};

export { handleBlur };
