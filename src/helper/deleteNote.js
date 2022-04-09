const deleteNote = (item, deletelist, allnotelist) => {
  const newDeletedList = [{ ...item }, ...deletelist];
  const newNoteList = allnotelist.filter((note) => note._id !== item._id);
  console.log(newDeletedList, newNoteList);
  localStorage.setItem("deletednotes", JSON.stringify(newDeletedList));
  localStorage.setItem("allnotes", JSON.stringify(newNoteList));
  return { newDeletedList, newNoteList };
};

export { deleteNote };
