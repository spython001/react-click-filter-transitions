import './App.scss'
import Topbar from './components/topbar/Topbar'
import Contents from './pages/contents/Contents'

function App() {

  return (
    <div className='app'>
      <Topbar/>

      <div className="container">
        <Contents/>
      </div>
    </div>
  )
}

export default App
