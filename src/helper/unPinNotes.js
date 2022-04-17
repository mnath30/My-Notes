const unPinNotes = (noteItem, allNoteList) => {
  const afterUnpinList = allNoteList.map((element) =>
    element._id === noteItem._id
      ? { ...element, isPinned: false }
      : { ...element }
  );
  localStorage.setItem("allnotes", JSON.stringify(afterUnpinList));
  return { afterUnpinList };
};

export { unPinNotes };
