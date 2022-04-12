import {
  addNote,
  archiveNote,
  deleteNote,
  unArchiveNote,
  deleteArchive,
  removeNote,
  restoreNote,
  archiveDeletedNote,
  updateNote,
  updateArchiveNote,
} from "../helper";

const noteReduce = (state, action) => {
  switch (action.type) {
    case "ADD_TO_ALL_NOTES":
      return {
        ...state,
        allnotes: [...addNote(action.payload, state.allnotes)],
      };
    case "DELETE_FROM_ALL_NOTES":
      const { newDeletedList, newNoteList } = deleteNote(
        action.payload,
        state.deletednotes,
        state.allnotes
      );
      return {
        ...state,
        allnotes: [...newNoteList],
        deletednotes: [...newDeletedList],
      };
    case "ARCHIVE_FROM_ALL_NOTES":
      const { newArchiveList, newAllNotesList } = archiveNote(
        action.payload,
        state.archivednotes,
        state.allnotes
      );
      return {
        ...state,
        allnotes: [...newAllNotesList],
        archivednotes: [...newArchiveList],
      };
    case "DELETE_FROM_ARCHIVE":
      const { deletedFromArchiveList, updatedArchiveList } = deleteArchive(
        action.payload,
        state.deletednotes,
        state.archivednotes
      );
      return {
        ...state,
        deletednotes: [...deletedFromArchiveList],
        archivednotes: [...updatedArchiveList],
      };
    case "REMOVE_FROM_ARCHIVE":
      const { removedarchivelist, addedNoteList } = unArchiveNote(
        action.payload,
        state.archivednotes,
        state.allnotes
      );
      return {
        ...state,
        archivednotes: [...removedarchivelist],
        allnotes: [...addedNoteList],
      };
    case "DELETE_FROM_TRASH":
      return {
        ...state,
        deletednotes: [...removeNote(action.payload, state.deletednotes)],
      };
    case "REMOVE_FROM_TRASH":
      const { deletedListAfterRestore, restoredList } = restoreNote(
        action.payload,
        state.deletednotes,
        state.allnotes
      );
      return {
        ...state,
        deletednotes: [...deletedListAfterRestore],
        allnotes: [...restoredList],
      };
    case "ARCHIVE_FROM_DELETE":
      const { archiveListFromDelete, updatedDeletedList } = archiveDeletedNote(
        action.payload,
        state.archivednotes,
        state.deletednotes
      );
      return {
        ...state,
        archivednotes: [...archiveListFromDelete],
        deletednotes: [...updatedDeletedList],
      };
    case "UPDATE_FROM_ALL_NOTES":
      return {
        ...state,
        allnotes: [...updateNote(action.payload, state.allnotes)],
      };
    case "UPDATE_FROM_ARCHIVE_NOTES":
      return {
        ...state,
        archivednotes: [
          ...updateArchiveNote(action.payload, state.archivednotes),
        ],
      };
    case "PIN_ALL_NOTES":
      return { ...state };
    default:
      return { ...state };
  }
};

export { noteReduce };
