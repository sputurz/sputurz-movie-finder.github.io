import { useDebouncedValue } from '../../hooks/useDebouncedValue';
import { useSearch } from '../../hooks/useSearch';
import { ErrorFallback } from '../ErrorFallback';
import { Loader } from '../Loader';
import { SearchCard } from '../SearchCard';
import * as S from './SearchList.styles';
import { FC, useEffect, useState } from 'react';

interface IProps {
  searchValue: string;
  isOutside: boolean;
  onCardClick: () => void;
}

export const SearchList: FC<IProps> = ({
  searchValue,
  isOutside,
  onCardClick,
}) => {
  const debouncedSearch = useDebouncedValue(searchValue, 300);
  const { data, error, isLoading } = useSearch(debouncedSearch);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const isListOpen = !!((data && data.length > 0) || isAnimatingOut);

  useEffect(() => {
    if (!isListOpen) {
      setIsAnimatingOut(true);
    }
  }, [isListOpen]);

  if (error) return <ErrorFallback>Error: {error.message}</ErrorFallback>;
  if (isLoading)
    return (
      <S.Wrap
        $isOpen={isListOpen}
        onAnimationEnd={() => {
          if (!isListOpen) {
            setIsAnimatingOut(false);
          }
        }}
      >
        <S.ListItem>
          <S.Inner>
            <Loader></Loader>
          </S.Inner>
        </S.ListItem>
      </S.Wrap>
    );

  return (
    <S.Wrap
      $isOpen={isListOpen}
      onAnimationEnd={() => {
        if (!isListOpen) {
          setIsAnimatingOut(false);
        }
      }}
    >
      {!isOutside && debouncedSearch.length > 0 && data && (
        <>
          {data.length > 0 ? (
            <>
              {data?.map((movie) => (
                <S.ListItem key={movie.id}>
                  <SearchCard
                    movie={movie}
                    onCardClick={onCardClick}
                  ></SearchCard>
                </S.ListItem>
              ))}
            </>
          ) : (
            <S.ListItem>
              <S.Inner>
                <S.Error>Not found</S.Error>
              </S.Inner>
            </S.ListItem>
          )}
        </>
      )}
    </S.Wrap>
  );
};
