import { Header } from '../../components/Header/Header';
import styles from './mainPage.module.css'
import SubHeader from './components/SubHeader/SubHeader';
import MainContent from './components/MainContent/MainContent';

const MainPage = () => {
    return (
        <div className={styles.container}>
            <Header className={styles.header} />
            <main className={styles.main}>
                    <SubHeader />
                    <MainContent />
            </main>
        </div>
    );
};

export default MainPage;
