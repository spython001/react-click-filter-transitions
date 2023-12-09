/* eslint-disable react/prop-types */
import './fullstack.scss'

export default function Fullstack({ events }) {
  const backendEvents = events.filter((event) =>event.title === 'Fullstack')

  return (
    <div className='all'>
      { backendEvents.map((event) => (
          <div className="wrapper" key={event.id}>
            <span>{event.date} . {event.title}</span>
            <p>{event.eventName}</p>
            <hr/>
          </div>
      ))}
        
    </div>
  )
}
