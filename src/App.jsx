import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import BaseLayout from './components/BaseLayout'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to={'/detail'} />} />
          <Route path='/detail/*' element={<BaseLayout />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
