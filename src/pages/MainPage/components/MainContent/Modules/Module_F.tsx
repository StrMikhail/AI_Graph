
import { MODULE_F } from '../../../../../constants/mainPageText';
import styles from './modules.module.css';
import { H } from '../../../../../components/H/H';
import { Typography } from '../../../../../components/Typography/Typography';
import Divider from '../../../../../components/Divider/Divider';
import TextBlockList from '../../../../../components/TextBlock/TextBlockList';
import { FC } from 'react';
import Module from './Module';

const Module_F: FC = () => {
    return (
        <Module className={styles.F}>
            <H size='lg'>{MODULE_F.HISTORY.header}</H>
            <Divider style={{ marginTop: '22px', marginBottom: '8px' }} variant='horizontal'/>

            <Typography size='lg' color='secondary' style={{ lineHeight: '27px', marginBottom: '15px' }}>{MODULE_F.DATE_ONE.date}</Typography>
            <TextBlockList {...MODULE_F.DATE_ONE}  />
            <Divider style={{ margin: '12px' }} variant='horizontal'/>

            <Typography size='lg' color='secondary' style={{ lineHeight: '27px', marginBottom: '15px' }}>{MODULE_F.DATE_TWO.date}</Typography>
            <TextBlockList {...MODULE_F.DATE_TWO}  />
        </Module>

    );
};

export { Module_F };
