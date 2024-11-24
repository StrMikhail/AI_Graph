import { FC } from 'react';
import styles from './textBlock.module.css'
import { ITextBlockItem } from './TextBlockList';
import { Typography } from '../Typography/Typography';

const TextBlock: FC<ITextBlockItem> = (props) => {
    const { title, description} = props
    return (
        <div className={styles.info}>
            <Typography size='sm' color='secondary'>{title}</Typography>
            <Typography size='sm' bold>{description}</Typography>
        </div>
    );
};

export default TextBlock;
