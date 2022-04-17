const changeNoteColor = (noteItem, color, allNotesList) => {
  return allNotesList.map((element) =>
    element._id === noteItem._id
      ? { ...element, backgroundColor: color }
      : { ...element }
  );
};

export { changeNoteColor };
