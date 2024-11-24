import { FC } from 'react';
import styles from './textBlock.module.css'
import TextBlock from './TextBlock';
import { H } from '../H/H';

export interface ITextBlockItem {
    title: string
    description: string
}

export interface ITextBlockList {
    header?: string
    list: ITextBlockItem[]
}

const TextBlockList: FC<ITextBlockList> = (props) => {
    const { list, header} = props

    return (
        <div className={styles.container}>
            {header && <H style={{ fontWeight: '600' }} size='lg'>{header}</H>}
            {list.map(item => {
                return (
                    <TextBlock {...item}/>
                )
            })}
        </div>
    );
};

export default TextBlockList;
