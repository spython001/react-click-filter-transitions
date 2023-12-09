import { useState } from 'react'
import All from '../../components/all/All';
import Backend from '../../components/backend/Backend';
import Frontend from '../../components/frontend/Frontend'
import './contents.scss'

export default function Contents() {
  const [selectedTab, setSelectedTab] = useState('all');

  const handleClick = (button) => {
    setSelectedTab(button);
  }


  //EVENTS
  const events = [
    {
        id:1,
        title: 'Backend',
        date: 'January 30th - February 1st',
        eventName: 'THAT Confrence Texas',
    },
    {
      id:2,
      title: 'Fullstack',
      date: 'Febraury 29th - March 1st',
      eventName: 'DEVWORLD',
    },
    {
      id:3,
      title: 'Backend',
      date: 'March 19th - March 22nd',
      eventName: 'SQLBits',
    },
    {
      id:4,
      title: 'Frontend',
      date: 'June 6th - June 7th',
      eventName: 'CSS Day',
    },
    {
      id:5,
      title: 'Frontend',
      date: 'July 11th - July 15th',
      eventName: 'Mock Day',
    },
  ]

    
  
  return (
    <div className='contents'>
        <div className="wrapper">
            <div className="top">
              <span >Conferences</span>
              <p>/</p>
              <span>Tech</span>
            </div>

            <div className="middle">
              <p>Tech Conferences</p>
            </div>

            <div className="bottom">
              <button 
                onClick={() => handleClick('all')}
                className={selectedTab === 'all' ? 'click' : '' }
              >
                ALL
              </button>
              
              <button
                onClick={() => handleClick('frontend')}
                className={selectedTab === 'frontend' ? 'click' : '' }
              >
                FRONTEND
              </button>
              
              <button
                onClick={() => handleClick('backend')}
                className={selectedTab === 'backend' ? 'click' : '' }
              >
                BACKEND
              </button>
              <button
                onClick={() => handleClick('fullstack')}
                className={selectedTab === 'fullstack' ? 'click' : '' }
              >
                FULLSTACK
              </button>
            </div>

            { selectedTab === 'all' ? <All events={events}/> : null}
            { selectedTab === 'frontend' ? <Frontend events={events}/> : null}
            { selectedTab === 'backend' ? <Backend events={events}/> : null}
        </div>
    </div>
  )
}
