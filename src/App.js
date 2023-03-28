import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import WorkDictionary from './pages/WorkDictionary'
import Profile from './pages/Profile'
import Header from './components/Header'
import { PrivateRoute } from './components/PrivateRoute'
import FileInfo from './components/FileInfo'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route exact path='/' element={<WorkDictionary />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/file/:id' element={<FileInfo />} />
        </Route>

        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  )
}

export default App
