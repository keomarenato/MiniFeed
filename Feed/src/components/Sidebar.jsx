import styles from './SideBar.module.css';
import logo from '../assets/keoma2.jpg'
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
        src='https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />

      <div className={styles.profile}>
        <Avatar src={logo} />

        <strong>Keoma Renato</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
