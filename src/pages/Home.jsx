import { useState } from "react";

import Header from "../components/Header";

import ModeToggle from "../components/ModeToggle";

import AnalyzeForm from "../components/AnalyzeForm";

import ChannelCard from "../components/ChannelCard";

import VideoGrid from "../components/VideoGrid";

import SummaryBox from "../components/SummaryBox";

import Footer from "../components/Footer";

import {

analyzeChannel,

summarizeUrl,

fetchVideos,

} from "../services/api";

export default function Home() {

const [mode, setMode] = useState("ANALYZE");

const [loading, setLoading] = useState(false);

const [channel, setChannel] = useState(null);

const [videos, setVideos] = useState([]);

const [summary, setSummary] = useState(null);

const handleSubmit = async (input) => {

if (!input || input.trim() === "") {

  alert("Please enter a valid input");

  return;

}



setLoading(true);

setChannel(null);

setVideos([]);

setSummary(null);



try {

  if (mode === "ANALYZE") {

    // 🔹 Analyze Channel

    const channelRes = await analyzeChannel(input);

    setChannel(channelRes);



    const videosRes = await fetchVideos(channelRes.channelId);

    setVideos(videosRes);

  } else if (mode === "SUMMARY") {

    // 🔹 AI Summary

    const summaryRes = await summarizeUrl(input);

    setSummary(summaryRes);

  }

} catch (err) {

  console.error("API Error:", err);

  alert("Backend error / server not running");

} finally {

  setLoading(false);

}

};

return (

<>

  <Header />



  <ModeToggle mode={mode} setMode={setMode} />



  {/* 🔑 KEY FIX: reset form when mode changes */}

  <AnalyzeForm

    key={mode}

    mode={mode}

    onSubmit={handleSubmit}

  />



  {loading && <p className="loading">Loading...</p>}



  {/* 🔵 ANALYZE MODE */}

  {mode === "ANALYZE" && channel && (

    <>

      <ChannelCard channel={channel} />

      <VideoGrid videos={videos} />

    </>

  )}



  {/* 🟢 SUMMARY MODE */}

  {mode === "SUMMARY" && summary && (

    <SummaryBox data={summary} />

  )}



  <Footer />

</>

);

}
