/* eslint-disable react/prop-types */
import './backend.scss'

export default function Backend({ events }) {
  const backendEvents = events.filter((event) =>event.title === 'Backend')

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
