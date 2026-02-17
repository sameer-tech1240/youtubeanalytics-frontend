import "../styles/video.css";

export default function VideoGrid({ videos }) {
  return (
    <div className="video-grid">
      {videos.map((v) => (
        <div
          className="video-card"
          key={v.videoId}
          onClick={() =>
            window.open(`https://www.youtube.com/watch?v=${v.videoId}`, "_blank")
          }
          style={{ cursor: "pointer" }}
        >
          <img
            src={`https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`}
            alt={v.title}
          />
          <h4>{v.title}</h4>
          <p>👁 {v.views}</p>
          <p>👍 {v.likes} | 💬 {v.comments}</p>
        </div>
      ))}
    </div>
  );
}
