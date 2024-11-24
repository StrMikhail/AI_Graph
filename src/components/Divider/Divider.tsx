import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import styles from './divider.module.css'
import { cx } from 'class-variance-authority';

export interface DividerProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
    variant: 'vertical' | 'horizontal'
}


export const Divider: FC<DividerProps> = (props) => {
    const { variant, className } = props

    return (
        <div className={cx(styles.divider, className, {
            [styles.horizontal] : variant === 'horizontal',
            [styles.vertical] : variant === 'vertical',
        },)} {...props}/>
    );
};

export default Divider;
