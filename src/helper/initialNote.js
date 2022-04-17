const initialNote = {
  allnotes: localStorage.getItem("allnotes")
    ? [...JSON.parse(localStorage.getItem("allnotes"))]
    : [],
  archivednotes: localStorage.getItem("archivednotes")
    ? [...JSON.parse(localStorage.getItem("archivednotes"))]
    : [],
  deletednotes: localStorage.getItem("deletednotes")
    ? [...JSON.parse(localStorage.getItem("deletednotes"))]
    : [],
  filterednotes: localStorage.getItem("allnotes")
    ? [...JSON.parse(localStorage.getItem("allnotes"))]
    : [],
  sort: "",
  search: "",
  filtertags: [],
};

export { initialNote };
