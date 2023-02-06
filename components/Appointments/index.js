// Write your code here
import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {appointmentsList: [], title: '', date: '', getStarred: false}

  addAppointment = event => {
    const {title, date} = this.state
    event.preventDefault()
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isFavorite: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  titleChanged = event => {
    this.setState({title: event.target.value})
  }

  dateChanged = event => {
    this.setState({date: event.target.value})
  }

  starredObj = () => {
    const {appointmentsList, getStarred} = this.state
    if (!getStarred === true) {
      const filtered = appointmentsList.filter(each => each.isFavorite === true)
      this.setState(prevState => ({
        appointmentsList: filtered,
        getStarred: !prevState.getStarred,
      }))
    } else {
      this.setState(prevState => ({
        getStarred: !prevState.getStarred,
      }))
    }
  }

  isFavoriteChanged = id => {
    // const {appointmentsList} = this.state
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(e => {
        if (e.id === id) {
          return {...e, isFavorite: !e.isFavorite}
        }
        return e
      }),
    }))
  }

  render() {
    const {appointmentsList, title, date} = this.state

    return (
      <div className="bg-cont">
        <div className="card">
          <div className="min-card">
            <form>
              <h1 className="title">Add Appointment</h1>
              <label htmlFor="titleInput" className="label-element">
                Title
              </label>
              <br />
              <input
                className="box"
                type="text"
                value={title}
                id="titleInput"
                onChange={this.titleChanged}
              />
              <br />
              <label htmlFor="dateInput" className="label-element">
                Date
              </label>
              <br />
              <input
                className="box"
                value={date}
                type="date"
                id="dateInput"
                onChange={this.dateChanged}
              />
              <br />
              <button
                className="but1"
                type="submit"
                onClick={this.addAppointment}
              >
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
              alt="appointments"
              className="img-big"
            />
          </div>
          <div className="c">
            <h1 className="title">Appointments</h1>
            <button
              className="star-but"
              type="button"
              onClick={this.starredObj}
            >
              Starred
            </button>
          </div>
          <ul className="list-cont">
            {appointmentsList.map(each => (
              <AppointmentItem
                key={each.id}
                details={each}
                isFavoriteChanged={this.isFavoriteChanged}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
