import { createContext, useContext } from "react";
import { useReducer } from "react";
import { initialNote } from "../helper";
import { noteReduce } from "../reducer/noteReduce";

const NoteContext = createContext({});
const useNotes = () => useContext(NoteContext);

const NoteProvider = ({ children }) => {
  const [noteState, noteDispatch] = useReducer(noteReduce, initialNote);
  return (
    <NoteContext.Provider value={{ noteState, noteDispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

export { NoteProvider, useNotes };
