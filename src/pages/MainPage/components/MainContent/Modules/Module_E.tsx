
import { cx } from 'class-variance-authority';
import { MODULE_E } from '../../../../../constants/mainPageText';
import styles from './modules.module.css';
import { H } from '../../../../../components/H/H';
import { Typography } from '../../../../../components/Typography/Typography';
import Badge from '../../../../../components/Badge/Badge';
import { FC } from 'react';
import Module from './Module';
import { uid } from '../../../../../helpers/helpers';

const Module_E: FC = () => {
    return (
        <Module className={cx(styles.E)}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
                <H size='lg'>{MODULE_E.ONE.header}</H>

                    {MODULE_E.ONE.list.map(item => (
                            <div key={uid()}>
                                <Typography size='sm' color='secondary'>{item.title}</Typography>
                                <div style={{ display: 'flex', gap: '10px', justifyItems: 'flex-start'}}>
                                    {item.badges.map((badge) => (
                                            <Badge  key={uid()} type='primary' text={badge} />
                                        )) 
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
                    <H size='lg'>{MODULE_E.TWO.header}</H>
                    {MODULE_E.TWO.list.map(item => (
                            <div key={uid()}>
                                <Typography size='sm' color='secondary'>{item.title}</Typography>
                                <div style={{ display: 'flex', gap: '10px', justifyItems: 'flex-start'}}>
                                    {item.badges.map(badge => (
                                            <Badge key={uid()} type='accent' text={badge} />
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
            </div>
        </Module>

    );
};

export { Module_E };
