const handleTagList = (e, noteData, setNoteData) => {
  if (e.target.checked) {
    noteData.noteTags.includes(e.target.value)
      ? setNoteData({ ...noteData, noteTags: [...noteData.noteTags] })
      : setNoteData({
          ...noteData,
          noteTags: [...noteData.noteTags, e.target.value],
        });
  } else {
    setNoteData({
      ...noteData,
      noteTags: noteData.noteTags.filter((item) => item !== e.target.value),
    });
  }
};

export { handleTagList };
