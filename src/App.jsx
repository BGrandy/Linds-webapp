import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage, Research, Publications, Team, NotFound, Layout } from './components';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><LandingPage /></Layout>} />
          <Route path='/Research' element={<Layout><Research /></Layout>} />
          <Route path='/Publications' element={<Layout><Publications /></Layout>} />
          <Route path='/Team' element={<Layout><Team /></Layout>} />
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
