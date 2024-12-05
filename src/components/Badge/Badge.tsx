import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import styles from './badge.module.css'
import { Typography } from '../Typography/Typography';
import { cx } from 'class-variance-authority';

export interface BadgeProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
    text: ReactNode;
    className?: string;
    type?: 'default' | 'primary' | 'accent' | 'outlined'
    fullWidth?: boolean
}

const Badge: FC<BadgeProps> = (props) => {
    const { text, className, type = 'default' } = props

    return (
            <div className={cx(styles.badge, className,
                {
                    [styles.default] : type === 'default',
                    [styles.primary] : type === 'primary',
                    [styles.accent] : type === 'accent',
                    [styles.outlined] : type === 'outlined',
                },
        )} {...props}>
                <Typography className={cx({
                    [styles.default] : type === 'default',
                    [styles.contrast] : type === 'primary',
                    [styles.accent] : type === 'accent',
                })} style={{ fontSize: '0.875rem', lineHeight: '1.225rem'}}>
                    {text}
                </Typography>
            </div>
    );
};

export default Badge;
