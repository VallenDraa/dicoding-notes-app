export const getInitialData = () => {
  const notes = localStorage.getItem("notes");

  if (notes === null) {
    return [];
  }

  return JSON.parse(notes);
};

export const showFormattedDate = date => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString("id-ID", options);
};

export const createNewNote = (title, body) => {
  return {
    id: crypto.randomUUID(),
    title,
    body,
    archived: false,
    createdAt: new Date().toISOString(),
  };
};

export const saveNotes = notes => {
  localStorage.setItem("notes", JSON.stringify(notes));
};
