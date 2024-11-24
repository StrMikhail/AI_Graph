import { cx } from 'class-variance-authority';
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import styles from './block.module.css'

export interface BlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    children: ReactNode;
    type?: 'default' | 'contrast' | 'transparent'
}

const Block: FC<BlockProps> = (props) => {
    const { children, className, type = 'default' } = props

    return (
            <div className={cx(styles.block, className, 
                {
                    [styles.contrast] : type === 'contrast',
                    [styles.transparent] : type === 'transparent',
                }
            )}>
                {children}
            </div>
            // <Card className={cx(styles.card, className)}>
            //     <Card.Body>
            //         {children}   
            //     </Card.Body>
            // </Card>

    );
};

export default Block;
