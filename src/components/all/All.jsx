/* eslint-disable react/prop-types */
import './all.scss'

export default function All({ events }) {

  return (
    <div className='all'>
      { events.map((event) => (
        <div className="wrapper" key={event.id}>
          <span > {event.date} . {event.title}</span>
          <p >{event.eventName}</p>
          <hr/>
        </div>
      ))}  
    </div>
  )
}
