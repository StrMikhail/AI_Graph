import { Typography } from '../../../../../components/Typography/Typography';
import Divider from '../../../../../components/Divider/Divider';
import TextBlockList from '../../../../../components/TextBlock/TextBlockList';
import { MODULE_C } from '../../../../../constants/mainPageText';
import styles from './modules.module.css';
import Badge from '../../../../../components/Badge/Badge';
import { H } from '../../../../../components/H/H';
import { FC } from 'react';
import Module from './Module';
import { uid } from '../../../../../helpers/helpers';

const Module_C: FC = () => {

    return (
        <Module className={styles.C}>
            <div className={styles.info}>
                <Typography color='secondary' size='sm'>                            
                    <b>Телефон:&nbsp;&nbsp;</b>+7 983 204-01-00
                </Typography>

                <Typography color='secondary' size='sm'>                            
                <b>E-mail:&nbsp;&nbsp;</b>info124@mail.ru
                </Typography>

                <Typography color='secondary' size='sm'>                            
                    <b>Локация:&nbsp;&nbsp;</b>Россия, Москва (GMT+3)                            
                </Typography>

            </div>
            <Divider variant='horizontal' />

            <TextBlockList {...MODULE_C.COMPANY}  />
            <Divider variant='horizontal'/>

            <H style={{ paddingBottom:'var(--padding-md)' }} size='lg'>{MODULE_C.CLIENT.header}</H>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '' }}>
                {MODULE_C.CLIENT.badges.map((badge, i) => (
                        <div key={uid()}>
                            <Typography size='sm' color='secondary'>{badge.title}</Typography>
                            <Badge type={i == 0 ? 'outlined' : 'primary'} text={badge.badge} />
                        </div>
                    ))}
            </div>
            <Divider variant='horizontal'/>

            <TextBlockList list={MODULE_C.CLIENT.list}  />
        </Module>
    );
};

export { Module_C };
