import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import ProjectDetail from './components/ProjectDetail'
import About from './components/About'

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
