import React, { useEffect, useState } from "react";
import "./../DIY/styles.modules.css"; // Import your styles
import MaintenanceGuidelines from "..//Maintain/index";  // Import the new component

const DIYPage = () => {
  const [videos, setVideos] = useState([]);
  const [showAll, setShowAll] = useState(false); // Tracks if "See All" is clicked

  // Fetch DIY videos from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/diy-videos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched videos:", data); // Log the data received from the API
        setVideos(data);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error.message);
      });
  }, []);

  // Videos to display (first 8 or all)
  const displayedVideos = showAll ? videos : videos.slice(0, 20);

  return (
    <div
      className="diy-page"
   
    >
      <div className="videos-container">



        {displayedVideos.length > 0 ? (
          displayedVideos.map((video) => (
            <div className="video-card" key={video.id}>
              <h3 className="video_title">{video.title}</h3>
              {video.type === "local" ? (
                <video controls>
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  width="100%"
                  height="315"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>


                )}
            </div>
          ))
        ) : (
          <p>No videos available</p>
        )}
      </div>

      <MaintenanceGuidelines></MaintenanceGuidelines>
      
    
    </div>
  );
};

export default DIYPage;
