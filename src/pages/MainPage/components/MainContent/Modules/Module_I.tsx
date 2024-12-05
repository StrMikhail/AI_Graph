
import styles from './modules.module.css';
import { H } from '../../../../../components/H/H';
import { FC } from 'react';
import Module from './Module';

const Module_I: FC = () => {
    return (
        <Module className={styles.I}>
            <H>Отраслевые тренды / обстоятельства</H>
        </Module>

    );
};

export { Module_I };
