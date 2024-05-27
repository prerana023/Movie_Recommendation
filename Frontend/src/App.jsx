import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/Home'
import InformationPage from './pages/Information'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={ <HomePage />} />
        <Route path='/movies/:movieId' element={ <InformationPage/>} />
      </Routes>
    </Router>
  );
}

export default App
