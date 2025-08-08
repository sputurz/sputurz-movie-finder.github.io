import { useForm } from 'react-hook-form';
import { Icon } from '../Icon';
import * as S from './Search.styles';
import { useSearch } from '../../hooks/useSearch';
import { ErrorFallback } from '../ErrorFallback';
import { useDebouncedValue } from '../../hooks/useDebouncedValue';
import { SearchCard } from '../SearchCard';
import { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

export function Search() {
  const { register, watch, reset, setFocus } = useForm();
  const searchValue = watch('searchQuery');
  const debouncedSearch = useDebouncedValue(searchValue, 300);
  const { data, error } = useSearch(debouncedSearch);
  const [isMobileSearch, setIsMobileSearch] = useState(false);
  const wrapRef = useRef<HTMLLabelElement>(null);
  const isOutside = useOnClickOutside({
    ref: wrapRef,
  });

  const onMobileSearch = () => {
    setIsMobileSearch(true);
    queueMicrotask(() => setFocus('searchQuery'));
    document.body.style.overflow = 'hidden';
    window.history.pushState({ isSearchOpen: true }, '');
  };

  const onBackdrop = () => {
    setIsMobileSearch(false);
    document.body.style.overflow = '';

    if (window.history.state?.isSearchOpen) {
      window.history.back();
    }
  };

  const handleReset = () => {
    reset({ searchQuery: '' });
    queueMicrotask(() => setFocus('searchQuery'));
  };

  const onCardClick = () => {
    handleReset();
    if (isMobileSearch) onBackdrop();
  };

  useEffect(() => {
    const handlePopState = () => {
      if (isMobileSearch) {
        onBackdrop();
        window.history.pushState(null, '', window.location.pathname);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isMobileSearch]);

  if (error) return <ErrorFallback>Ошибка: {error.message}</ErrorFallback>;

  return (
    <>
      <S.BtnMobile onClick={onMobileSearch}>
        <Icon name="SearchIcon" />
      </S.BtnMobile>

      <S.Backdrop
        onClick={onBackdrop}
        $isMobileSearch={isMobileSearch}
      ></S.Backdrop>
      <S.Wrap $isMobileSearch={isMobileSearch} ref={wrapRef}>
        <Icon name="SearchIcon" />
        <input
          type="text"
          placeholder="Поиск"
          {...register('searchQuery')}
          defaultValue=""
        />

        {data && data.length > 0 && !isOutside ? (
          <S.ResultList>
            {data?.map((movie) => (
              <S.ResultItem key={movie.id}>
                <SearchCard
                  movie={movie}
                  onCardClick={onCardClick}
                ></SearchCard>
              </S.ResultItem>
            ))}
          </S.ResultList>
        ) : null}

        <S.BtnReset $isEmpty={!searchValue} onClick={handleReset} type="button">
          <Icon name="CloseIcon" />
        </S.BtnReset>
      </S.Wrap>
    </>
  );
}
