import { Socials } from '../../models/Social';
import { Icon } from '../Icon';
import * as S from './Social.styles';

export function Social() {
  const icons: Socials = [
    { name: 'VkIcon', url: 'https://vk.com' },
    { name: 'YtIcon', url: 'https://youtube.com' },
    { name: 'OkIcon', url: 'https://ok.ru' },
    { name: 'TgIcon', url: 'https://telegram.org' },
  ];

  return (
    <S.Wrap>
      {icons.map(({ name, url }, index) => (
        <S.Item key={`${name}-${index}`}>
          <S.LinkItem href={url} target="_blank" rel="noopener noreferrer">
            <Icon name={name} />
          </S.LinkItem>
        </S.Item>
      ))}
    </S.Wrap>
  );
}
