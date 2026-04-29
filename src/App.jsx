import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import ProjectDetail from './components/ProjectDetail'
import About from './components/About'
import Floor1 from './components/Floor1'
import Floor2 from './components/Floor2'
import Floor3 from './components/Floor3'
import Floor4 from './components/Floor4'

function AnimatedRoutes() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState('fadeIn')

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut')
    }
  }, [location, displayLocation])

  return (
    <div
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransitionStage('fadeIn')
          setDisplayLocation(location)
          window.scrollTo(0, 0)
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/didi-digomi-casa" element={<ProjectDetail />} />
        <Route path="/project/didi-digomi-casa/floor-1" element={<Floor1 />} />
        <Route path="/project/didi-digomi-casa/floor-2" element={<Floor2 />} />
        <Route path="/project/didi-digomi-casa/floor-3" element={<Floor3 />} />
        <Route path="/project/didi-digomi-casa/floor-4" element={<Floor4 />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}

export default App
