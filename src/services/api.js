// const BASE = "http://localhost:8888";

// export const analyzeChannel = async (input) => {
//   const res = await fetch(`${BASE}/api/youtube/analyze`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ channelInput: input }),
//   });
//   return res.json();
// };

// export const fetchVideos = async (channelId) => {
//   const res = await fetch(`${BASE}/api/youtube/${channelId}/videos`);
//   return res.json();
// };

// export const summarizeUrl = async (url) => {
//   const res = await fetch(`${BASE}/api/ai/summarize`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ url }),
//   });
//   return res.json();
// };


const BASE = "http://192.168.1.117:8888";

export const analyzeChannel = async (input) => {
  const res = await fetch(`${BASE}/api/youtube/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ channelInput: input }),
  });
  return res.json();
};

export const fetchVideos = async (channelId) => {
  const res = await fetch(`${BASE}/api/youtube/${channelId}/videos`);
  return res.json();
};

export const summarizeUrl = async (url) => {
  const res = await fetch(`${BASE}/api/ai/summarize`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });
  return res.json();
};

