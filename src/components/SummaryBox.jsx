import "../styles/summary.css";

export default function SummaryBox({ data }) {
  return (
    <div className="summary-box">
      <h2>Summary</h2>
      <p>{data.summary}</p>

      <h3>Key Points</h3>
      <ul>
        {data.keyPoints.map((k, i) => (
          <li key={i}>{k}</li>
        ))}
      </ul>
    </div>
  );
}
