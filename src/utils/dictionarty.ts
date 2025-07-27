export const genres = {
  russian: {
    history: 'историческое',
    horror: 'ужасы',
    scifi: 'фантастика',
    'stand-up': 'стендап',
    fantasy: 'фэнтези',
    drama: 'драма',
    mystery: 'детектив',
    family: 'семейное',
    comedy: 'комедия',
    romance: 'романтика',
    music: 'музыкальное',
    crime: 'криминальное',
    'tv-movie': 'телефильм',
    documentary: 'документальное',
    action: 'боевик',
    thriller: 'триллер',
    western: 'вестерн',
    animation: 'анимационное',
    war: 'военное',
    adventure: 'приключение',
  },
} as const;

type LocaleDict = Record<string, Record<string, string>>;

export function getTransletedValue<
  T extends LocaleDict,
  L extends keyof T,
  K extends string
>(dict: T, lang: L, key: K): string {
  const map = dict[lang];
  return key in map ? map[key as keyof typeof map] : key;
}
