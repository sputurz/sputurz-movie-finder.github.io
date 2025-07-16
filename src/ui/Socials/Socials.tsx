import styles from './Socials.module.scss';

import OkIcon from '../../assets/svg/ok.svg?react'
import TgIcon from '../../assets/svg/telegram.svg?react'
import VkIcon from '../../assets/svg/vk.svg?react'
import YtIcon from '../../assets/svg/youtube.svg?react'

export function Socials() {
	return (
		<ul className={styles.socials}>
			<li>
				<a href="#">
					<VkIcon className={styles.socials__icon}></VkIcon>
				</a>
			</li>
			<li>
				<a href="#">
					<YtIcon className={styles.socials__icon}></YtIcon>
				</a>
			</li>
			<li>
				<a href="#">
					<OkIcon className={styles.socials__icon}></OkIcon>
				</a>
			</li>
			<li>
				<a href="#">
					<TgIcon className={styles.socials__icon}></TgIcon>
				</a>
			</li>
		</ul>
	);
}
