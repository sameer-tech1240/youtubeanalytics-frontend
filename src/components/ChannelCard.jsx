import "../styles/channel.css";

export default function ChannelCard({ channel }) {
  return (
    <div className="channel-card">
      <h2>{channel.name}</h2>
      <p>{channel.description}</p>
      <div className="stats">
        <span>👥 {channel.subscribers}</span>
        <span>👁 {channel.views}</span>
        <span>🎥 {channel.videoCount}</span>
      </div>
    </div>
  );
}
