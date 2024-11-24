import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './header.module.css'
import { cx } from 'class-variance-authority';
import User from '../../assets/images/user.png'
import Notification from '../../assets/images/notification.png'
import Sharp from '../../assets/images/sharp.png'
import Search from '../../assets/images/search.png'
import { Typography } from '../Typography/Typography';


interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({...props}: HeaderProps) : JSX.Element => {
    return (
        <div className={cx(styles.header, props.className)}>
            <div className={styles.text}>AI Graph DASHBOARD</div>
            <div className={styles.right}>   
                <div className={styles.input}>
                    <img src={Search}/>
                    <input placeholder="Type here..." type='search' />
                </div>
                <button className={cx(styles.button, styles.user)}>
                    <img className={styles.icon} src={User} alt="" />
                    <Typography>Sign In</Typography>
                </button>
                <button className={cx(styles.button)}>
                    <img className={styles.icon} src={Sharp} alt="" />
                </button>
                <button className={cx(styles.button)}>
                    <img className={styles.icon} src={Notification} alt="" />
                </button>
            </div>
        </div>
    ); 
};

