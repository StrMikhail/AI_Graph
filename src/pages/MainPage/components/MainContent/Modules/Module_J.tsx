
import styles from './modules.module.css';
import { H } from '../../../../../components/H/H';
import { FC } from 'react';
import Module from './Module';

const Module_J: FC = () => {
    return (
        <Module className={styles.J}>
            <H>Доп. ресурсы и поддержка</H>
        </Module>
    );
};

export { Module_J };
