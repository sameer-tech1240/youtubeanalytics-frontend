# YouTube Analyzer & AI Frontend

This is the frontend UI for the YouTube Analyzer & AI Platform.

It connects with the Spring Boot backend to provide:

* Channel analytics interface
* Latest videos viewer
* AI summary generator
* Clean and responsive user interface

## Technology Stack

* React (Vite)
* JavaScript (ES6)
* CSS (Custom styling)
* Fetch API

## Features

### 1. Channel Analyzer UI

* Accepts a YouTube channel link
* Displays:

  * Channel Name
  * Subscribers Count
  * Total Views
  * Total Videos

### 2. Latest Videos Section

* Grid-based layout
* Displays:

  * Video thumbnail
  * Title
  * Basic statistics
* Clicking a video opens it directly on YouTube

### 3. AI Summary UI

* Accepts any URL input
* Displays:

  * Summary
  * Key Points

### 4. Clean UI Design

* Fully responsive layout
* Works on both mobile and desktop
* Card-based structured UI with clean styling

## Project Structure

src/
 ├── components/
 │   ├── Header.jsx
 │   ├── Footer.jsx
 │   ├── ModeToggle.jsx
 │   ├── AnalyzeForm.jsx
 │   ├── ChannelCard.jsx
 │   ├── VideoGrid.jsx
 │   ├── SummaryBox.jsx
 │
 ├── pages/
 │   └── Home.jsx
 │
 ├── services/
 │   └── api.js
 │
 ├── styles/
 │   ├── form.css
 │   ├── video.css
 │   └── channel.css


## Setup Instructions

### 1. Clone Repository

git clone https://github.com/your-username/youtube-frontend.git
cd youtube-frontend

### 2. Install Dependencies

npm install

### 3. Run the Application

npm run dev

Application runs on:
http://localhost:5173

## Backend Connection

Ensure that the backend service is running at:

http://localhost:8888

Verify the API base URL inside:

src/services/api.js

## Author

Developed by Sameer Siddiqui
Full Stack Developer – Java and Spring Boot and React

LinkedIn: https://www.linkedin.com/in/sameer-s-653b7b265/
