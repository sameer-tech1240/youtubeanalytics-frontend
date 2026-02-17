import "../styles/toggle.css";

export default function ModeToggle({ mode, setMode }) {
  return (
    <div className="toggle">
      <button
        className={mode === "ANALYZE" ? "active" : ""}
        onClick={() => setMode("ANALYZE")}
      >
        Analyze Channel
      </button>
      <button
        className={mode === "SUMMARY" ? "active" : ""}
        onClick={() => setMode("SUMMARY")}
      >
        AI Summary
      </button>
     
    </div>
  );
}
