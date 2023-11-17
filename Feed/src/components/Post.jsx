import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';

export const Post = ({ author, content }) => {

  const [comments, setComments] = useState([
    "Post muito bacana, hein?!"
  ])

  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)

  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Esse campo é obrigatorio')
  }

  function deleteComment(commentToDelete) {
    const commentsWithouDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithouDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title='16 de Novembro as 18:00' dateTime='2023-16-11'>Publicado há 1h</time>

      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong> Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={(handleNewCommentChange)}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <button type='submit' disabled={isNewCommentEmpty}>
          Comentar
        </button>
      </form>

      <div className={styles.commentList}>
        {comments.map(coment => {
          return <Comment key={coment} content={coment} onDeleteComment={deleteComment} />
        })}
      </div>
    </article>
  )
}
