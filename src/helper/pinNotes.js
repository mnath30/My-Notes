const pinNotes = (noteItem, allNotesList) => {
  const afterPinningNote = allNotesList.map((element) =>
    element._id === noteItem._id
      ? { ...element, isPinned: true }
      : { ...element }
  );
  localStorage.setItem("allnotes", JSON.stringify(afterPinningNote));
  return { afterPinningNote };
};

export { pinNotes };
