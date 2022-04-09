const restoreNote = (item, deletedList, allNoteList) => {
  const deletedListAfterRestore = deletedList.filter(
    (element) => element._id !== item._id
  );
  const restoredList = [...allNoteList, { ...item }];
  localStorage.setItem("deletednotes", JSON.stringify(deletedListAfterRestore));
  localStorage.setItem("allnotes", JSON.stringify(restoredList));
  return { deletedListAfterRestore, restoredList };
};

export { restoreNote };
