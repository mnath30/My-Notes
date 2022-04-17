import { v4 as uuid } from "uuid";
import { getCurrentDate } from "./getCurrentDate";

const saveNoteData = (title, content, tags) => {
  const { dateTime, onlyDate } = getCurrentDate();
  const newnote = {
    _id: uuid(),
    noteTitle: title,
    noteContent: content,
    noteTags: tags,
    date: onlyDate,
    isPinned: false,
    fullDate: dateTime,
    backgroundColor: "",
  };
  return newnote;
};

export { saveNoteData };
