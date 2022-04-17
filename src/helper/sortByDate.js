const sortByDate = (noteList, orderType) => {
  let sortedList;
  if (orderType === "") {
    sortedList = [...noteList];
  }
  if (orderType === "ascending") {
    sortedList = noteList.sort(
      (item1, item2) =>
        new Date(item1.fullDate).getTime() - new Date(item2.fullDate).getTime()
    );
  }
  if (orderType === "descending") {
    sortedList = noteList.sort(
      (item1, item2) =>
        new Date(item2.fullDate) - new Date(item1.fullDate).getTime()
    );
  }
  return sortedList;
};

export { sortByDate };
