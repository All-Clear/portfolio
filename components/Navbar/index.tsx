import React from 'react'
import styles from './Navbar.module.scss'

export default function Navbar() {
    return (
        <div className={styles.nav}>
            <a className={styles.brand} href="/">Entropy.<span className={styles.gray_text}>Concept</span></a>
            <a className={styles.gray_text} href="/projects">Projects</a>
            <a className={styles.gray_text} href="/blog">Blog</a>
        </div>
    )
}
