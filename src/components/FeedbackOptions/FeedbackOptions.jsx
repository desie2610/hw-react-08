export default function FeedbackOptions({
  options,
  onLeaveFeedback,
}) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          style={{
            padding: "10px 15px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}