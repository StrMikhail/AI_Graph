
import styles from './modules.module.css';
import { H } from '../../../../../components/H/H';
import { Typography } from '../../../../../components/Typography/Typography';
import Badge from '../../../../../components/Badge/Badge';
import { FC } from 'react';
import Module from './Module';

const Module_G: FC = () => {
    return (
        <Module className={styles.G}>
            <H size='lg' style={{ marginBottom: '22px' }}>Следующий шаг</H>
            <Typography  style={{ marginBottom: '24px' }} size='sm' bold>договорились, что Максим свяжется с клиентом 10.07.24 г. после завершения текущих проектов и мероприятий (сначала написать в Whats App и договориться о звонке)</Typography>
            <H size='lg' style={{ marginBottom: '22px' }}>Целевое действие</H>
            <Badge type='accent' text={'Продажа аудита «под ключ»'}/>
        </Module>
    );
};

export { Module_G };
