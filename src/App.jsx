import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage.jsx'
import Research from './components/Research.jsx'
import Publications from './components/Publications.jsx'
import Team from './components/Team.jsx'
import NotFound from './components/NotFound.jsx'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/Research' element={<Research />} />
          <Route path='/Publications' element={<Publications />} />
          <Route path='/Team' element={<Team />} />
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
