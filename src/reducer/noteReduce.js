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
  pinNotes,
  unPinNotes,
  filterTagList,
  changeNoteColor,
} from "../helper";

const noteReduce = (state, action) => {
  switch (action.type) {
    case "ADD_TO_ALL_NOTES":
      return {
        ...state,
        allnotes: [...addNote(action.payload, state.allnotes)],
        filterednotes: [...addNote(action.payload, state.allnotes)],
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
        filterednotes: [...newNoteList],
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
        filterednotes: [...newAllNotesList],
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
        filterednotes: [...addedNoteList],
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
        filterednotes: [...restoredList],
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
      const afterUpdatingNote = updateNote(action.payload, state.allnotes);
      return {
        ...state,
        allnotes: [...afterUpdatingNote],
        filterednotes: [...afterUpdatingNote],
      };
    case "UPDATE_FROM_ARCHIVE_NOTES":
      return {
        ...state,
        archivednotes: [
          ...updateArchiveNote(action.payload, state.archivednotes),
        ],
      };
    case "PIN_NOTES":
      const { afterPinningNote } = pinNotes(action.payload, state.allnotes);
      return {
        ...state,
        allnotes: [...afterPinningNote],
        filterednotes: [...afterPinningNote],
      };
    case "UNPIN_NOTES":
      const { afterUnpinList } = unPinNotes(action.payload, state.allnotes);
      return {
        ...state,
        allnotes: [...afterUnpinList],
        filterednotes: [...afterUnpinList],
      };

    case "SORT_BY_DATE":
      return {
        ...state,
        sort: action.payload,
      };
    case "SEARCH_BY_TITLE_DESCRIPTION":
      return {
        ...state,
        search: action.payload,
      };
    case "FILTER_BY_TAGS":
      const filteredList = filterTagList(action.payload, state.filtertags);
      return {
        ...state,
        filtertags: [...filteredList],
      };
    case "CHANGE_NOTE_COLOR_ALLNOTES":
      return {
        ...state,
        allnotes: [
          ...changeNoteColor(action.item, action.payload, state.allnotes),
        ],
      };
    case "CHANGE_NOTE_COLOR_ARCHIVED":
      return {
        ...state,
        archivednotes: [
          ...changeNoteColor(action.item, action.payload, state.archivednotes),
        ],
      };
    case "CHANGE_NOTE_COLOR_TRASH":
      return {
        ...state,
        deletednotes: [
          ...changeNoteColor(action.item, action.payload, state.deletednotes),
        ],
      };
    default:
      return { ...state };
  }
};

export { noteReduce };
