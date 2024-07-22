import React from 'react';
import styles from './Works.module.scss';
import { FaBitcoin } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { MdQuiz } from "react-icons/md";

export default function Works() {
    return (
        <div className={styles.main}>
            <h1 className={styles.worksHeader}>My Recent works</h1>
            <div className={styles.cryptoList}>
                <div className={styles.content}>
                    <div className={styles.flex}>
                        <FaBitcoin color='#6E07F3' size={'2rem'} />
                        <h2 className={styles.cryptoListHeader}>Coin Tracker</h2>
                    </div>
                    <p className={styles.text}>Coin Tracker app is Cryptocurrency Tracker That uses the dynamic data from <a className={styles.link} href='https://coincap.io/'>CoinCap API</a> to show changes of rates of Different Crypto Currencies.</p>
                </div>

                <a target='_blank' rel="noreferrer" className={`${styles.flexLink}`} href='https://crypto-list-fawn.vercel.app/coin/bitcoin'>
                    <h3>View project</h3>
                    <RiExternalLinkFill color='#6E07F3' size={'2rem'} />
                </a>
                <img style={{borderTopRightRadius: '3%', borderTopLeftRadius: '3%'}} className={styles.cryptoListImg} src='https://i.yapx.cc/XwaAN.png' alt='crypto list' />
                <img style={{borderBottomRightRadius: '3%', borderBottomLeftRadius: '3%'}} className={styles.cryptoListImg} src='https://i.yapx.cc/XwaNL.png' alt='crypto list' />

            </div>
            <div className={styles.testPlatform}>

            </div>

            <div className={styles.quizPlatform}>
                <div className={styles.content}>
                    <div className={styles.flex}>
                        <MdQuiz color='#6E07F3' size={'2rem'} />
                        <h2 className={styles.cryptoListHeader}>Quiz Platform</h2>
                    </div>
                    <p className={styles.text}>The Quiz Platform is an engaging full-stack application designed for users to craft their own quizzes, participate in quizzes created by others, and leave ratings and comments. This platform fosters a dynamic community where creativity and learning thrive.</p>
                </div>

                <a target='_blank' rel="noreferrer" className={`${styles.flexLink}`} href='https://github.com/Gor-Hoveyan/reactQuizPlatfrom'>
                    <h3>View on github</h3>
                    <RiExternalLinkFill color='#6E07F3' size={'2rem'} />
                </a>

                <img style={{borderTopRightRadius: '3%', borderTopLeftRadius: '3%'}} className={styles.quizPlatformImg} src='https://i.yapx.ru/Xwaic.png' alt='Quiz platform' />
                <img  className={styles.quizPlatformImg} src='https://i.yapx.ru/XwajZ.png' alt='Quiz platform' />


            </div>
            <div className={styles.testPlatform}>

            </div>
        </div>
    )
}