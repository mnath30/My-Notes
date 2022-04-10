const archiveDeletedNote = (item, archiveList, deleteList) => {
  const archiveListFromDelete = [...archiveList, { ...item }];
  const updatedDeletedList = deleteList.filter(
    (element) => element._id !== item._id
  );
  localStorage.setItem("archivednotes", JSON.stringify(archiveListFromDelete));
  localStorage.setItem("deletednotes", JSON.stringify(updatedDeletedList));
  return { archiveListFromDelete, updatedDeletedList };
};

export { archiveDeletedNote };
