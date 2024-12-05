import { Image } from 'react-bootstrap'
import Block from '../../../../components/Block/Block'
import { Typography } from '../../../../components/Typography/Typography'
import styles from './subhead.module.css'
import Badge from '../../../../components/Badge/Badge'
import Avatar from '../../../../assets/images/avatar.png'

const SubHeader = () => {
    return (
        <div className={styles.subHeader}>

            <Block type='contrast' className={styles.A}>
                <Typography size='lg'>Миронов  <br /> Виталий Сергеевич</Typography>
                <Image src={Avatar} roundedCircle />                    
            </Block>

            <Block type='contrast' className={styles.B}>
                <div className={styles.about}>
                    <Typography className={styles.title}>Класс</Typography>
                    <Badge  style={{ maxWidth: '97.3px' }}  type='default' text={"А2"}/> 
                </div>

                <div className={styles.about}>
                    <Typography  className={styles.title}>Отрасль</Typography>
                    <Typography size='md' className={styles.description}>Франшиза: общепит доставка суши/пиццы</Typography>
                </div>
                
                <div className={styles.about}>
                    <Typography className={styles.title}>Должность</Typography>
                    <Typography size='md' className={styles.description}>Основатель компании</Typography>
                </div>

                <div className={styles.about}>
                    <Typography  className={styles.title}>Запрос</Typography>
                    <Typography size='md' className={styles.description}>Комплексный аудит и оцифровка компании, внедрение <br/> систем управления и операционного директора</Typography>
                </div>

                <div className={styles.about}>
                    <Typography  className={styles.title}>Стадия сделки</Typography>
                    <Badge text={'Дожим до продажи аудита'} />
                </div>                   
            </Block>
        </div>
    )
}

export default SubHeader
