const archiveNote = (item, archivelist, allnoteslist) => {
  const newArchiveList = [{ ...item }, ...archivelist];
  localStorage.setItem("archivednotes", JSON.stringify(newArchiveList));
  const newAllNotesList = allnoteslist.filter((note) => note._id !== item._id);
  localStorage.setItem("allnotes", JSON.stringify(newAllNotesList));
  console.log(newArchiveList, newAllNotesList);
  return { newArchiveList, newAllNotesList };
};

export { archiveNote };
