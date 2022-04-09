const addNote = (item, oldItemList) => {
  const newList = [{ ...item }, ...oldItemList];
  localStorage.setItem("allnotes", JSON.stringify(newList));
  return newList;
};

export { addNote };
