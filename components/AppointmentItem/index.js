// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {details, isFavoriteChanged} = props
  const {id, title, date, isFavorite} = details

  const favoriteImage = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const clickedFavorite = () => {
    isFavoriteChanged(id)
  }
  return (
    <li className="list-item">
      <div className="main">
        <div className="cont">
          <p className="title">{title}</p>
          <p className="date">
            Date: {format(new Date(date), 'dd MMMM yyyy, EEEE')}
          </p>
        </div>
        <button
          type="button"
          className="but"
          onClick={clickedFavorite}
          data-testid="star"
        >
          <img src={favoriteImage} alt="star" />
        </button>
      </div>
    </li>
  )
}
export default AppointmentItem
