export default function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>{title}</h2>

      {children}
    </div>
  );
}