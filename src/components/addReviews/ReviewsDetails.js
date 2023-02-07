import { useReviewsContext } from '../../hooks/useReviewsContext'
import { useAuthContext } from '../../hooks/useAuthContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const ReviewDetails = ({ review }) => {
 /* const { dispatch } = useReviewsContext()
  const { user } = useAuthContext()

  /*const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('http://localhost:8000/reviews/delete' + review._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }*/

  return (
    <div className="review-details">
      <h4>{review.name}</h4>
      <p><strong>message: </strong>{review.message}</p>
      <p><strong>logo </strong>{review.logo}</p>
    </div>
  )
}

export default ReviewDetails
