import './topbar.scss'

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="left">
            <ul>
                <li>Discover</li>
                <li>Live</li>
                <li>Jobs</li>
                <li>Conferences</li>
            </ul>
        </div>

        <div className="right">
            <ul>
                <li>Log In</li>
            </ul>

            <button>Get Started</button>
        </div>
    </div>
  )
}
