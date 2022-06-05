import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Skilltest from './components/Skilltest'

function App() {
   return (
      <div className="App">
         <Header />
         <div style={{ display: 'flex' }}>
            <Sidebar />
            <Skilltest />
         </div>
      </div>
   )
}

export default App
