import { v4 as uuid } from "uuid";
import { getCurrentDate } from "./getCurrentDate";

const saveNoteData = (title, content, tags) => {
  const newnote = {
    _id: uuid(),
    noteTitle: title,
    noteContent: content,
    noteTags: tags,
    date: getCurrentDate(),
  };
  return newnote;
};

export { saveNoteData };
