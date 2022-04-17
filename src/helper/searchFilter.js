const searchFilter = (noteList, searchQuery) => {
  let filteredList;
  if (searchQuery === "") {
    filteredList = [...noteList];
  } else {
    filteredList = noteList.filter(
      (element) =>
        element.noteTitle.toLowerCase().includes(searchQuery) ||
        element.noteContent.toLowerCase().includes(searchQuery)
    );
  }
  return filteredList;
};

export { searchFilter };
