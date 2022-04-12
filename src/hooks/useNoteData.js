import { useState } from "react";

const useNoteData = (data) => {
  const [noteData, setNoteData] = useState(data);
  return { noteData, setNoteData };
};
export { useNoteData };
