interface Props {
    name: string;
    size?: number;
    className?: string;
}

export const SvgIcon = ({ name, size = 24, className }: Props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        className={className}
        style={{ display: 'inline-block' }} // Важно!
    >
        <use xlinkHref={`#icon-${name}`} width={size} height={size} />
    </svg>
);