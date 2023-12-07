/* eslint-disable react/prop-types */
import './frontend.scss'

export default function Frontend({ events }) {
  const frontendEvents = events.filter((event) =>event.title === 'Frontend')

  return (
    <div className='all'>
      { frontendEvents.map((event) => (
          <div className="wrapper" key={event.id}>
            <span>{event.date} . {event.title}</span>
            <p>{event.eventName}</p>
            <hr/>
          </div>
      ))}
        
    </div>
  )
}
