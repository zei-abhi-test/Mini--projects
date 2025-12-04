export default function TodoItem({ id, text, handleDelete }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", maxWidth: 300 }}>
      <span>{text}</span>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}
