const updateArchiveNote = (noteData, archivedNotes) => {
  const newArchiveNoteList = archivedNotes.map((element) =>
    element._id === noteData._id ? { ...noteData } : { ...element }
  );
  localStorage.setItem("archivednotes", JSON.stringify(newArchiveNoteList));
  return newArchiveNoteList;
};

export { updateArchiveNote };
