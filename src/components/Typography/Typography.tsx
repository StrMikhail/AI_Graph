import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import styles from './typography.module.css'
import cn from 'classnames';

export interface TProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
    size?: 'sm' | 'md' | 'lg'
    children: ReactNode
    bold?: boolean
    color?: 'secondary'
}

export const Typography = ({size = 'md', children, className, bold , color, ...props }: TProps) : JSX.Element => {
    return (
        <p
            className={cn(styles.typography, className,
                {
                    [styles.sm] : size === 'sm',
                    [styles.md] : size === 'md',
                    [styles.lg] : size === 'lg',
                },
                {
                    [styles.bold] : bold
                },
                { 
                    [styles.secondary] : color === 'secondary'
                }
        )}
            {...props}
        >
            {children}  
        </p>
    ) 
}

