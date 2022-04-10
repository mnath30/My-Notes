const deleteArchive = (item, deletedNotesList, archivedList) => {
  const deletedFromArchiveList = [{ ...item }, ...deletedNotesList];
  const updatedArchiveList = archivedList.filter(
    (element) => element._id !== item._id
  );
  localStorage.setItem("deletednotes", JSON.stringify(deletedFromArchiveList));
  localStorage.setItem("archivednotes", JSON.stringify(updatedArchiveList));
  return { deletedFromArchiveList, updatedArchiveList };
};

export { deleteArchive };
