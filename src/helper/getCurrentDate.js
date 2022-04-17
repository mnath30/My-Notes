const getCurrentDate = () => {
  const dateTime = new Date();
  const onlyDate = `${dateTime.getDate()}/${
    dateTime.getMonth() + 1
  }/${dateTime.getFullYear()}`;
  return {
    dateTime,
    onlyDate,
  };
};

export { getCurrentDate };
