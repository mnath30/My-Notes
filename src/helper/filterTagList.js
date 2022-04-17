const filterTagList = (tagName, tagList) => {
  const newTagList = tagList.includes(tagName)
    ? tagList.filter((element) => element !== tagName)
    : [...tagList, tagName];
  return newTagList;
};

export { filterTagList };
