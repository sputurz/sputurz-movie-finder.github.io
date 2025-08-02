import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Icon } from '../Icon';
import { StyledSearchBtnMobile, StyledSearchDesktop } from './Search.styles';

export function Search() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      {isMobile ? (
        <StyledSearchBtnMobile>
          <Icon name="SearchIcon"></Icon>
        </StyledSearchBtnMobile>
      ) : (
        <StyledSearchDesktop>
          <Icon name="SearchIcon"></Icon>
          <input type="search" placeholder="Поиск"></input>
        </StyledSearchDesktop>
      )}
    </>
  );
}
