import React from 'react'
import styles from "./Layout.module.css"
function Layout({children}) {
  return (
    
    <>
    <header className={styles.header}>
      <h1>Book-App</h1>
      <p><a href="#">Phoniex</a>|React-Project</p>
      </header>
    {children}
    <footer className={styles.footer}><p>Mini Project React JS ♥</p></footer>
    </>
  )
}

export default Layout