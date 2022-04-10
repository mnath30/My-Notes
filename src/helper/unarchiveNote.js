const unArchiveNote = (item, archivelist, allnotelist) => {
  const removedarchivelist = archivelist.filter(
    (element) => element._id !== item._id
  );
  const addedNoteList = [...allnotelist, { ...item }];
  localStorage.setItem("archivednotes", JSON.stringify(removedarchivelist));
  localStorage.setItem("allnotes", JSON.stringify(addedNoteList));
  return { removedarchivelist, addedNoteList };
};

export { unArchiveNote };
