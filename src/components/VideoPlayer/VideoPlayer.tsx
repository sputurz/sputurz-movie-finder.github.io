import { FC } from 'react';
import ReactPlayer from 'react-player';
import * as S from './VideoPlayer.styles';
import { Icon } from '../Icon';
import { IMovie } from '../../models';

interface IProps {
  trailerUrl: IMovie['trailerUrl'];
  trailerYouTubeId: IMovie['trailerYoutubeId'];
  onBackdrop: () => void;
  onClose: () => void;
}

export const VideoPlayer: FC<IProps> = ({
  trailerUrl,
  trailerYouTubeId,
  onBackdrop,
  onClose,
}) => {
  const videoSrc = trailerYouTubeId
    ? `https://youtube.com/watch?v=${trailerYouTubeId}`
    : trailerUrl;

  return (
    <S.Backdrop onClick={onBackdrop}>
      <S.Wrap onClick={(e) => e.stopPropagation()}>
        {videoSrc ? (
          <ReactPlayer src={videoSrc} playing={true} />
        ) : (
          <S.ErrorText>Видео не найдено</S.ErrorText>
        )}
        <S.BtnClose onClick={onClose}>
          <Icon name="CloseIcon"></Icon>
        </S.BtnClose>
      </S.Wrap>
    </S.Backdrop>
  );
};
