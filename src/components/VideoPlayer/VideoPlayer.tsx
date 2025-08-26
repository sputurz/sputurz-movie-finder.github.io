import { FC } from 'react';
import ReactPlayer from 'react-player';
import * as S from './VideoPlayer.styles';
import { Icon } from '../Icon';
import { IMovie } from '../../models';

interface IProps {
  isOpen: boolean;
  trailerUrl: IMovie['trailerUrl'];
  trailerYouTubeId: IMovie['trailerYoutubeId'];
  onBackdrop: () => void;
  onClose: () => void;
  onExited: () => void;
}

export const VideoPlayer: FC<IProps> = ({
  isOpen,
  trailerUrl,
  trailerYouTubeId,
  onBackdrop,
  onClose,
  onExited,
}) => {
  const videoSrc = trailerYouTubeId
    ? `https://youtube.com/watch?v=${trailerYouTubeId}`
    : trailerUrl;

  return (
    <S.Backdrop
      onAnimationEnd={() => {
        if (!isOpen) onExited();
      }}
      $isOpen={isOpen}
      onClick={onBackdrop}
    >
      <S.Wrap $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        {videoSrc ? (
          <ReactPlayer src={videoSrc} playing={true} />
        ) : (
          <S.ErrorText>Video not found</S.ErrorText>
        )}
        <S.BtnClose aria-label="Close video" onClick={onClose}>
          <Icon name="CloseIcon"></Icon>
        </S.BtnClose>
      </S.Wrap>
    </S.Backdrop>
  );
};
