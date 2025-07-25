import { lazy } from 'react';

// socials
export const VkIcon = lazy(() => import('../../assets/icons/vk.svg?react'));
export const YtIcon = lazy(() => import('../../assets/icons/yt.svg?react'));
export const OkIcon = lazy(() => import('../../assets/icons/ok.svg?react'));
export const TgIcon = lazy(() => import('../../assets/icons/tg.svg?react'));
//home
export const UpdateIcon = lazy(
  () => import('../../assets/icons/update.svg?react')
);
//movie/home
export const StarIcon = lazy(() => import('../../assets/icons/star.svg?react'));
// menu
export const GenresIcon = lazy(
  () => import('../../assets/icons/genres.svg?react')
);

// Автоматический тип для имен иконок
export type IconName = keyof typeof import('./icons');
