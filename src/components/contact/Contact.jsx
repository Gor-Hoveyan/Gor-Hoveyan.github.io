import React from 'react';
import styles from './Contact.module.scss';
import { CiLinkedin } from 'react-icons/ci';
import { FaTelegram, FaGithub } from 'react-icons/fa';
import { ImMail4 } from "react-icons/im";


export default function Contact() {
    const date = new Date();
    return (
        <div className={styles.main}>
            <p className={styles.content}>Live. Explore. Create.</p>
            <div>
                <a className={styles.link} target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/gorhoveyan/'>
                    <CiLinkedin onMouseOver={(e) => e.currentTarget.style.scale = '1.2'}
                        onMouseLeave={(e) => e.currentTarget.style.scale = '1'}
                        style={{ transitionDuration: '0.4s' }}
                        color='white' size={'2.5rem'}
                    />
                </a>
                <a className={styles.link} target='_blank' rel='noreferrer' href='https://t.me/gorhoveyan'>
                    <FaTelegram onMouseOver={(e) => e.currentTarget.style.scale = '1.2'}
                        onMouseLeave={(e) => e.currentTarget.style.scale = '1'}
                        style={{ transitionDuration: '0.4s' }}
                        color='white' size={'2.5rem'}
                    />
                </a>
                <a className={styles.link} target='_blank' rel='noreferrer' href='https://github.com/Gor-Hoveyan'>
                    <FaGithub onMouseOver={(e) => e.currentTarget.style.scale = '1.2'}
                        onMouseLeave={(e) => e.currentTarget.style.scale = '1'}
                        style={{ transitionDuration: '0.4s' }}
                        color='white' size={'2.5rem'}
                    />
                </a>
                <a className={styles.link} target='_blank' rel='noreferrer' href='mailto:gorhoveyan@bk.ru'>
                    <ImMail4 onMouseOver={(e) => e.currentTarget.style.scale = '1.2'}
                        onMouseLeave={(e) => e.currentTarget.style.scale = '1'}
                        style={{ transitionDuration: '0.4s' }}
                        color='white' size={'2.5rem'}
                    />
                </a>
            </div>
            <div className={styles.footer}>
                <p>Handcrafted by Gor Hoveyan | {date.getFullYear()}</p>
            </div>
        </div>
    )
}