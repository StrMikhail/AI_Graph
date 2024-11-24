import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from './H.module.css';
import cn from 'classnames';

export interface HProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    color?: 'secondary'
}

export const H = ({size = 'md', children, className, color, ...props }: HProps) : JSX.Element => {
    return (
        <h3
            className={cn(styles.h, className, 
                {
                    [styles.sm] : size === 'sm',
                    [styles.md] : size === 'md',
                    [styles.lg] : size === 'lg',
                },
                { 
                    [styles.secondary] : color === 'secondary'
                }
        )}
            {...props}
        >
            {children}  
        </h3>
    ); 
};

