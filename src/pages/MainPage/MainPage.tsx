import { Header } from '../../components/Header/Header';
import styles from './mainPage.module.css'
import Block from '../../components/Block/Block';
import { cx } from 'class-variance-authority';
import Badge from '../../components/Badge/Badge';
import TextBlockList from '../../components/TextBlock/TextBlockList';
import { BLOCK_C, BLOCK_D, BLOCK_E, BLOCK_F, BLOCK_K } from './dictionary';
import Divider from '../../components/Divider/Divider';
import { H } from '../../components/H/H';
import { Typography } from '../../components/Typography/Typography';
import SubHeader from './components/SubHeader/SubHeader';

const MainPage = () => {
    return (

        <div className={styles.container}>
            <Header className={styles.header} />
            <main className={styles.main}>
                    <SubHeader />
                    <div className={styles.content}>
                        <Block className={cx(styles.C)}>
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

                            <TextBlockList {...BLOCK_C.COMPANY}  />
                            <Divider variant='horizontal'/>

                            <H style={{ paddingBottom:'var(--padding-md)' }} size='lg'>{BLOCK_C.CLIENT.header}</H>
                            <div style={{ display: 'flex', gap: '10px', marginBottom: '' }}>
                                {BLOCK_C.CLIENT.badges.map((badge, i) => {
                                    return (
                                        <div style={{  }}>
                                            <Typography size='sm' color='secondary'>{badge.title}</Typography>
                                            <Badge type={i == 0 ? 'outlined' : 'primary'} text={badge.badge} />
                                        </div>
                                    )   
                                    
                                })}
                            </div>
                            <Divider variant='horizontal'/>

                            <TextBlockList list={BLOCK_C.CLIENT.list}  />
                        </Block>

                        <Block className={cx(styles.D)}>
                            <TextBlockList {...BLOCK_D.PAIN}  />
                            <Divider style={{ margin: '12px' }} variant='horizontal'/>

                            <TextBlockList {...BLOCK_D.REQUESTS}  />
                            <Divider style={{ margin: '12px' }} variant='horizontal'/>

                            <TextBlockList {...BLOCK_D.NEEDS}  />
                            <Divider style={{ margin: '12px' }} variant='horizontal'/>

                            <TextBlockList {...BLOCK_D.PRIORITIES}  />
                        </Block>

                        <Block className={cx(styles.E)}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
                                <H size='lg'>{BLOCK_E.ONE.header}</H>
                                    {BLOCK_E.ONE.list.map(item => {
                                            return (
                                                <div>
                                                    <Typography size='sm' color='secondary'>{item.title}</Typography>
                                                    <div style={{ display: 'flex', gap: '10px', justifyItems: 'flex-start'}}>
                                                        {item.badges.map((badge) => {
                                                            return (
                                                                <Badge type='primary' text={badge} />
                                                            )
                                                        }) }
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
                                    <H size='lg' style={{ }}>{BLOCK_E.TWO.header}</H>
                                    {BLOCK_E.TWO.list.map(item => {
                                            return (
                                                <div style={{  }}>
                                                    <Typography size='sm' color='secondary'>{item.title}</Typography>
                                                    <div style={{ display: 'flex', gap: '10px', justifyItems: 'flex-start'}}>
                                                        {item.badges.map(badge => {
                                                            return (
                                                                <Badge type='accent' text={badge} />
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                        </Block>

                        <Block className={cx(styles.F)}>
                            <H size='lg'>{BLOCK_F.HISTORY.header}</H>
                            <Divider style={{ marginTop: '22px', marginBottom: '8px' }} variant='horizontal'/>

                            <Typography size='lg' color='secondary' style={{ lineHeight: '27px', marginBottom: '15px' }}>{BLOCK_F.DATE_ONE.date}</Typography>
                            <TextBlockList {...BLOCK_F.DATE_ONE}  />
                            <Divider style={{ margin: '12px' }} variant='horizontal'/>

                            <Typography size='lg' color='secondary' style={{ lineHeight: '27px', marginBottom: '15px' }}>{BLOCK_F.DATE_TWO.date}</Typography>
                            <TextBlockList {...BLOCK_F.DATE_TWO}  />
                        </Block>

                        <Block className={cx(styles.G)}>
                            <H size='lg' style={{ marginBottom: '22px' }}>Следующий шаг</H>
                            <Typography  style={{ marginBottom: '24px' }} size='sm' bold>договорились, что Максим свяжется с клиентом 10.07.24 г. после завершения текущих проектов и мероприятий (сначала написать в Whats App и договориться о звонке)</Typography>
                            <H size='lg' style={{ marginBottom: '22px' }}>Целевое действие</H>
                            <Badge type='accent' text={'Продажа аудита «под ключ»'}/>
                        </Block>

                        <Block className={styles.H}>
                            <TextBlockList {...BLOCK_K.POSOBILITY}  />
                            <Badge style={{marginTop: '20px' }} type='primary' text={'Бюджет не ограничен'}/>
                        </Block>

                        <Block className={styles.I}>
                            <H>Отраслевые тренды / обстоятельства</H>
                        </Block>

                        <Block className={styles.J}>
                            <H>Доп. ресурсы и поддержка</H>
                        </Block>
                        
                        <div>
                        
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MainPage;
