import { VideoWrapper } from './VideoPlayer.styles';

interface MovieTrailerProps {
  trailerUrl: string;
  trailerYouTubeId: string;
}

export const VideoPlayer: React.FC<MovieTrailerProps> = ({
  trailerUrl,
  trailerYouTubeId,
}) => {
  return (
    <VideoWrapper>
      <iframe
        src={`https://youtube.com/watch?v=${trailerYouTubeId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoWrapper>
  );
};
