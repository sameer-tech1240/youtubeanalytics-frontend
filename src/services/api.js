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


// Dynamic BASE URL (local + production)

const BASE =
  window.location.hostname === "localhost"
    ? "http://localhost:8888"
    : "https://analyticsyt.onrender.com";

// ---------------- API CALLS ----------------

export const analyzeChannel = async (input) => {
  const res = await fetch(`${BASE}/api/youtube/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ channelInput: input }),
  });

  if (!res.ok) throw new Error("Analyze API failed");
  return res.json();
};

export const fetchVideos = async (channelId) => {
  const res = await fetch(`${BASE}/api/youtube/${channelId}/videos`);

  if (!res.ok) throw new Error("Fetch videos failed");
  return res.json();
};

export const summarizeUrl = async (url) => {
  const res = await fetch(`${BASE}/api/ai/summarize`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });

  if (!res.ok) throw new Error("Summarize API failed");
  return res.json();
};


