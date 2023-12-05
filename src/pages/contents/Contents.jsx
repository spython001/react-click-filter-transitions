import { useState } from 'react'
import All from '../../components/all/All';
import Frontend from '../../components/frontend/Frontend'
import './contents.scss'

export default function Contents() {
  const [selectedTab, setSelectedTab] = useState('all');

  const handleClick = (button) => {
    setSelectedTab(button);
  }
    
  
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

            { selectedTab === 'all' ? <All /> : null}
            { selectedTab === 'frontend' ? <Frontend /> : null}
        </div>
    </div>
  )
}
