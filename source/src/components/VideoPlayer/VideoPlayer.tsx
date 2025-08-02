import React from 'react';

interface MovieTrailerProps {
  trailerUrl: string;
  trailerYouTubeId: string;
}

export const VideoPlayer: React.FC<MovieTrailerProps> = ({
  trailerUrl,
  trailerYouTubeId,
}) => {
  return (
    <div className="trailer-container">
      <h2>Трейлер</h2>
      <div className="video-wrapper">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerYouTubeId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <a
        href={trailerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="trailer-link"
      >
        Смотреть на YouTube
      </a>
    </div>
  );
};
