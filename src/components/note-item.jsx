import { showFormattedDate } from "../utils";

export const NoteItem = ({ note, onDelete, onArchive }) => {
  const { id, title, body, createdAt } = note;

  function handleDelete() {
    onDelete(id);
  }

  function handleArchive() {
    onArchive(id);
  }

  return (
    <li className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <span className="note-item__date">{showFormattedDate(createdAt)}</span>
        <p className="note-item__body">{body}</p>
      </div>

      <div className="note-item__action">
        <button onClick={handleDelete} className="note-item__delete-button">
          delete
        </button>
        <button onClick={handleArchive} className="note-item__archive-button">
          archive
        </button>
      </div>
    </li>
  );
};
