const removeNote = (item, deleteList) => {
  const deletedNoteList = deleteList.filter(
    (element) => element._id !== item._id
  );
  localStorage.setItem("deletednotes", JSON.stringify(deletedNoteList));
  return deletedNoteList;
};

export { removeNote };
