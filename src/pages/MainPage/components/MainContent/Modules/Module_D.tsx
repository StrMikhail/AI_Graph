
import Divider from '../../../../../components/Divider/Divider';
import TextBlockList from '../../../../../components/TextBlock/TextBlockList';
import { MODULE_D } from '../../../../../constants/mainPageText';
import styles from './modules.module.css';
import { FC } from 'react';
import Module from './Module';

const Module_D: FC = () => {

    return (
        <Module className={styles.D}>
            <TextBlockList {...MODULE_D.PAIN}  />
            <Divider style={{ margin: '12px' }} variant='horizontal'/>

            <TextBlockList {...MODULE_D.REQUESTS}  />
            <Divider style={{ margin: '12px' }} variant='horizontal'/>

            <TextBlockList {...MODULE_D.NEEDS}  />
            <Divider style={{ margin: '12px' }} variant='horizontal'/>

            <TextBlockList {...MODULE_D.PRIORITIES}  />
        </Module>
    );
};

export { Module_D };
