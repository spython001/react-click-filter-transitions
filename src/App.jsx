import './App.scss'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Contents from './pages/contents/Contents'

function App() {

  return (
    <div className='app'>
      <Topbar/>

      <div className="container">
        <Contents/>
        <Sidebar/>
      </div>
    </div>
  )
}

export default App
