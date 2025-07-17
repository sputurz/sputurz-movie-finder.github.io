// import { SvgIcon } from '@/ui/SvgIcon/SvgIcon';

import { StyledLink, StyledSocialItem, StyledSocials } from './Social.styles';

const SvgIcon = ({ name }: { name: string }) => (
	<svg width="24" height="24">
		<use xlinkHref={`#icon-${name}`} />
	</svg>
);

export function Socials() {
	const icons = [
		{ name: 'vk', url: 'https://vk.com' },
		{ name: 'youtube', url: 'https://youtube.com' },
		{ name: 'ok', url: 'https://ok.ru' },
		{ name: 'telegram', url: 'https://telegram.org' }
	];

	return (
		<StyledSocials>
			{icons.map(({ name, url }, index) => (
				<StyledSocialItem key={index}>
					<StyledLink href={url}>
						<SvgIcon name={name} />
					</StyledLink>
				</StyledSocialItem>
			))}
		</StyledSocials>
	);
}