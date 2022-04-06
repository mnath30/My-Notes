const getCurrentDate = () => {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const data = [
  {
    title: "This is a sample note",
    category: "Health",
    tags: ["Health", "Creativity", "Exercise", "School", "Work"],
    date: getCurrentDate(),
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has ",
  },
  {
    title: "This is a sample note 2",
    category: "Wellness",
    date: getCurrentDate(),
    tags: ["Health", "Creativity", "Exercise", "School", "Work"],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of ",
  },
  {
    title: "This is a sample note 3",
    category: "Education",
    date: getCurrentDate(),
    tags: ["Health", "Creativity", "Exercise", "School", "Work"],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "This is a sample note 4",
    category: "Meditation",
    date: getCurrentDate(),
    tags: ["Health", "Creativity", "Exercise", "School", "Work"],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem .",
  },
];

export { data };
