import { FC, useEffect, useState } from 'react';
import * as S from './ImageLoader.styles';
import { Loader } from '../Loader';

type IProps = {
  src: string;
  alt?: string;
  isFetching: boolean;
  isLoading: boolean;
  onImageLoadedChange?: (loaded: boolean) => void;
  className?: string;
};

export const ImageLoader: FC<IProps> = ({
  src,
  alt,
  isFetching,
  isLoading,
  onImageLoadedChange,
  className,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
    onImageLoadedChange?.(false);
  }, [src, isFetching, onImageLoadedChange]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    onImageLoadedChange?.(true);
  };

  const isBusy = isFetching || isLoading || !imageLoaded;

  return (
    <S.Wrap className={className}>
      <S.Img $isBusy={isBusy} src={src} alt={alt} onLoad={handleImageLoad} />
      {isBusy && <Loader />}
    </S.Wrap>
  );
};
