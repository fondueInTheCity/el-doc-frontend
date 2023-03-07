import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import WorkDictionary from './pages/WorkDictionary'
import Profile from './pages/Profile'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/' element={<WorkDictionary />} />
        <Route exact path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
