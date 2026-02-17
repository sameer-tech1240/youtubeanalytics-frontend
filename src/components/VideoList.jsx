import "./video.css";

function VideoList({ videos }) {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="video-section">
      <h2 className="section-title">Latest Videos</h2>

      <div className="video-grid">
        {videos.map((video) => {
          const youtubeUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
          const thumbnail = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;

          return (
            <a
              key={video.videoId}
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="video-card"
            >
              <img
                src={thumbnail}
                alt={video.title}
                className="video-thumb"
              />

              <div className="video-info">
                <h3>{video.title}</h3>

                <div className="stats">
                  <span>👁 {video.views}</span>
                  <span>👍 {video.likes}</span>
                  <span>💬 {video.comments}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default VideoList;
