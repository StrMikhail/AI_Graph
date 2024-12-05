
import TextBlockList from '../../../../../components/TextBlock/TextBlockList';
import { MODULE_K } from '../../../../../constants/mainPageText';
import styles from './modules.module.css';
import Badge from '../../../../../components/Badge/Badge';
import { FC } from 'react';
import Module from './Module';

const Module_H: FC = () => {
    return (
        <Module className={styles.H}>
            <TextBlockList {...MODULE_K.POSOBILITY}  />
            <Badge style={{marginTop: '20px' }} type='primary' text={'Бюджет не ограничен'}/>
        </Module>

    );
};

export { Module_H };
