import React, { useState } from 'react';
import VideoCard from './videoCard';

const VideoSection = ({ title, videos }) => {
  const [showMore, setShowMore] = useState(false);

  // Ensure videos is defined before using slice
  const displayedVideos = videos ? (showMore ? videos : videos.slice(0, 4)) : [];

  return (
    <div className="bg-gradient-to-b from-[#9747FF] to-white p-4 rounded-xl shadow-lg shadow-[#9747FF]">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className={`grid grid-cols-2 gap-4 ${showMore ? 'max-h-[600px] overflow-y-scroll hide-scrollbar' : ''}`}>
        {displayedVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-full border-black border-2 shadow-md hover:bg-[#9747FF] hover:text-white flex justify-center"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show Less' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default VideoSection;
