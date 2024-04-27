# **VisionTube**

VisionTube is a YouTube clone web application built using ReactJS. It aims to provide users with a familiar video streaming experience similar to YouTube, with features such as video search, watch functionality, and a home page showcasing trending videos.

## Features

- **`Video Search`**: Search for videos using keywords and get relevant results fetched from YouTube's API.
- **`Watch Functionality`**: Watch videos seamlessly within the application with an intuitive player interface.
- **`Home Page`**: Explore trending videos and discover new content right from the home page.
- **`Responsive Design`**: Enjoy VisionTube across various devices with its responsive design powered by Tailwind CSS.

## Technologies Used

- **`ReactJS`**: Frontend library for building user interfaces.
- **`ReduxJS`**: State management library for managing application state.
- **`React Router DOM`**: Declarative routing for React applications, enabling navigation functionality.
- **`React Icons`**: Library for adding icons to React applications.
- **`Axios`**: HTTP client for making API requests.
- **`Tailwind CSS`**: Utility-first CSS framework for quickly styling applications.
- **`Autoprefixer`**: Tool for parsing CSS and adding vendor prefixes to CSS rules.
- **`PostCSS`**: CSS preprocessor for transforming CSS with JavaScript plugins.
- **`TypeScript`**: Superset of JavaScript that adds static typing to the language.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ken314526/VisionTube.git
    ```

2. Install dependencies:

    ```bash
    cd VisionTube
    npm install
    ```

3. Set up YouTube API:
   - Get your YouTube Data API key from the [Google Cloud Console](https://console.developers.google.com/).
   - Create `.env` file in `client` folder
   - Add `REACT_APP_YOUTUBE_DATA_API_KEY=YOUR_API_KEY` to `.env` file.

4. Start the development server:

    ```bash
    npm start
    ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Usage

- **`Home`**: Explore trending videos on the home page.
- **`Search`**: Enter keywords in the search bar to find videos.
- **`Watch`**: Click on a video thumbnail to watch the video.

## Author

Developed by **Abhishek Sharma**

