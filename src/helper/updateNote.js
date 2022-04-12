const updateNote = (updatedNote, allnotes) => {
  const newAllNotesList = allnotes.map((element) =>
    element._id === updatedNote._id ? { ...updatedNote } : { ...element }
  );
  localStorage.setItem("allnotes", JSON.stringify(newAllNotesList));
  return newAllNotesList;
};

export { updateNote };
