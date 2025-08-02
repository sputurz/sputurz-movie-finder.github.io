import React, { useEffect, useRef } from 'react';

interface YouTubePlayerProps {
  videoId: string; // Например: "eHgqfVQWv7s"
  width?: string;
  height?: string;
  className?: string;
}

export const VideoPlayer: React.FC<YouTubePlayerProps> = ({
  videoId,
  width = '100%',
  height = '400px',
  className = '',
}) => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Загружаем YouTube IFrame API асинхронно
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Создаем плеер после загрузки API
    (window as any).onYouTubeIframeAPIReady = () => {
      new (window as any).YT.Player(playerRef.current, {
        videoId: videoId,
        width: width,
        height: height,
        playerVars: {
          modestbranding: 1, // Убирает лого YouTube
          rel: 0, // Не показывает похожие видео в конце
        },
      });
    };

    return () => {
      // Очистка при размонтировании
      (window as any).onYouTubeIframeAPIReady = null;
    };
  }, [videoId, width, height]);

  return <div ref={playerRef} className={className} />;
};
