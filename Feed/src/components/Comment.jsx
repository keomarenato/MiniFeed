import styles from './Comment.module.css';
import perfil from '../assets/keoma1.jpg'
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export const Comment = ({ content, onDeleteComment }) => {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  // function handleLikeComent() {
  //   setLikeCount(likeCount + 1)
  // }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false}
        src={perfil} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <dv className={styles.authorAndTime}>
              <strong>Keoma Renato</strong>
              <time title='16 de Novembro as 18:00' dateTime='2023-16-11'>Cara de 1h atrás</time>
            </dv>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={() => setLikeCount(likeCount + 1)}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
