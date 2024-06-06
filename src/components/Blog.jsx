import { upvoteBlog, deleteBlog } from '../reducers/blogsReducer'
import { setNotification } from '../reducers/messageReducer'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { postBlogComment } from '../reducers/blogsReducer'
import useWindowDimensions from '../hooks/useWindowDimensions'

const minMargin = 0
const marginFactor = 10

const Blog = ({ blog }) => {
  const [commentText, setCommentText] = useState('')
  const user = useSelector(({ user }) => user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { width } = useWindowDimensions()
  const containerMargin = width < 500 ? minMargin : width / marginFactor

  const handleUpvote = () => {
    dispatch(upvoteBlog(blog.id, blog))
    dispatch(setNotification(`Blog liked: ${blog.title}`, 5, false))
  }

  const handleDeletion = () => {
    if (window.confirm('Would you really like to delete this post?')) {
      dispatch(deleteBlog(blog.id))
      dispatch(
        setNotification(`Blog ${blog.title} deleted successfully.`, 5, false),
      )
      navigate('/blogs')
    }
  }

  const handleComment = async (event) => {
    event.preventDefault()
    dispatch(postBlogComment(blog, commentText))
    setCommentText('')
  }

  if (!blog) return null

  return (
    <div
      style={{
        marginLeft: containerMargin,
        marginRight: containerMargin,
      }}
    >
      <BlogContainer
        blog={blog}
        user={user}
        handleUpvote={handleUpvote}
        commentText={commentText}
        setCommentText={setCommentText}
        handleComment={handleComment}
        handleDeletion={handleDeletion}
      />
    </div>
  )
}

export const BlogContainer = ({
  blog,
  user,
  handleUpvote,
  commentText,
  setCommentText,
  handleComment,
  handleDeletion,
}) => {
  const canShowDeleteButton = user && blog.user.username === user.username

  const deleteButton = () => (
    <div style={{ marginTop: 10 }}>
      <button
        className="button is-danger is-outlined"
        onClick={() => handleDeletion()}
      >
        <span>Delete blog</span>
        <span className="icon is-small">
          <i className="fas fa-times"></i>
        </span>
      </button>
    </div>
  )

  const comments = () => (
    <div>
      <h3 className="title is-4">Comments on this blog:</h3>
      <hr />
      <div>
        {blog.comments.map((comment) => (
          <div key={comment._id}>
            <span>
              <span className="subtitle is-6">{comment.text}</span>
            </span>
            <br />
            <hr />
          </div>
        ))}
      </div>
    </div>
  )

  const noComments = () => (
    <div>
      <h3 className="title is-4">
        There are currently no comments on this blog.
      </h3>
      <hr />
    </div>
  )

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <div>
        <div>
          <h1 className="title">
            <a href={blog.url} target="_blank" rel="noreferrer">
              {blog.title}
            </a>
          </h1>
        </div>
        <h2 className="title is-4">by {blog.author}</h2>
      </div>
      <br />
      <br />
      <div className="is-outlined">
        <b className="is-size-5">Likes: </b>
        <span className="is-size-5">{blog.likes}</span>
        <div>
          <button
            className="button is-small is-rounded"
            onClick={() => handleUpvote()}
          >
            Like blog
          </button>
        </div>
        <br />
        <br />
        <i>Posted by {blog.user.name}.</i>
        <br />
        {canShowDeleteButton && deleteButton()}
        <hr />
        <br />
        {blog.comments.length > 0 ? comments() : noComments()}
        {user && (
          <div>
            <br />
            <form>
              <div className="field">
                <div className="control">
                  <input
                    placeholder="Your comment here"
                    value={commentText}
                    onChange={({ target }) => setCommentText(target.value)}
                    className="input"
                  />
                </div>
              </div>
              <button className="button" type="submit" onClick={handleComment}>
                Post comment
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
