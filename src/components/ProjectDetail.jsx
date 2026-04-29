import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import mainPhoto from '../assets/951.png'
import logo from '../assets/casa.jpg'
import floorOutline from '../assets/outline.png'
import { useImagePreloader } from '../hooks/useImagePreloader'

function ProjectDetail() {
  const navigate = useNavigate()
  // Preload all images
  const imagesLoaded = useImagePreloader([mainPhoto, logo, floorOutline])

  const [selectedFloor, setSelectedFloor] = useState(null)
  const [floorMenuOpen, setFloorMenuOpen] = useState(false)
  const [hoveredFloor, setHoveredFloor] = useState(null)
  const [isHoveringMenu, setIsHoveringMenu] = useState(false)

  const floors = [
    { id: 4, name: 'F4', block: 'Block №1', apartments: 10, top: '28%', left: '25%', width: '60%' },
    { id: 3, name: 'F3', block: 'Block №1', apartments: 12, top: '39%' },
    { id: 2, name: 'F2', block: 'Block №1', apartments: 12, top: '50%' },
    { id: 1, name: 'F1', block: 'Block №1', apartments: 8, top: '61%' }
  ]

  const handleFloorClick = (floor) => {
    navigate(`/project/didi-digomi-casa/floor-${floor.id}`)
  }

  const closePopup = () => {
    setSelectedFloor(null)
  }

  const toggleFloorMenu = () => {
    setFloorMenuOpen(!floorMenuOpen)
  }

  // Show loading indicator while images are loading
  if (!imagesLoaded) {
    return (
      <div className="app">
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '18px',
          color: '#f38020'
        }}>
          Loading...
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <Link to="/">
            <img src={logo} alt="Casa Calda" className="logo" />
          </Link>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href="#contact">Contact</a>
          </nav>
          <div className="language">EN</div>
        </div>
      </header>

      {/* Building Image Section - Full Width */}
      <section className="building-section">
        <div className="carousel">
          <div className="carousel-track">
            <div className="carousel-slide active">
              <img
                src={mainPhoto}
                alt="Casa Calda Building"
                className="building-image"
              />
              {/* Floor outline overlays */}
              <img
                src={floorOutline}
                alt="Floor 4"
                className={`floor-outline-overlay floor-4 ${hoveredFloor === 4 ? 'force-visible' : ''}`}
                onClick={() => handleFloorClick(floors[0])}
              />
              <img
                src={floorOutline}
                alt="Floor 3"
                className={`floor-outline-overlay floor-3 ${hoveredFloor === 3 ? 'force-visible' : ''}`}
                onClick={() => handleFloorClick(floors[1])}
              />
              <img
                src={floorOutline}
                alt="Floor 2"
                className={`floor-outline-overlay floor-2 ${hoveredFloor === 2 ? 'force-visible' : ''}`}
                onClick={() => handleFloorClick(floors[2])}
              />
              <img
                src={floorOutline}
                alt="Floor 1"
                className={`floor-outline-overlay floor-1 ${hoveredFloor === 1 ? 'force-visible' : ''}`}
                onClick={() => handleFloorClick(floors[3])}
              />
            </div>
          </div>

          {/* Floor info popup */}
          {selectedFloor && (
            <div className="floor-popup-overlay" onClick={closePopup}>
              <div className="floor-popup" onClick={(e) => e.stopPropagation()}>
                <button className="floor-popup-close" onClick={closePopup}>×</button>
                <h3>{selectedFloor.name}</h3>
                <p>{selectedFloor.block}</p>
                <p>Available apartments: {selectedFloor.apartments}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Project Info Section */}
      <section className="project-info-section">
        <div className="project-header-wrapper">
          <div className="project-breadcrumb">
            <span className="breadcrumb-item">CASA CALDA</span>
            <span className="breadcrumb-divider"></span>
            <span className="breadcrumb-item">DIDI DIGHOMI</span>
            <span className="breadcrumb-separator"></span>
            <span className="breadcrumb-item">FLOOR</span>
            <div style={{ position: 'relative' }}>
              <button className="breadcrumb-arrow" onClick={toggleFloorMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {floorMenuOpen && (
                <div
                  className="floor-dropdown-menu"
                  onMouseEnter={() => setIsHoveringMenu(true)}
                  onMouseLeave={() => {
                    setIsHoveringMenu(false)
                    setFloorMenuOpen(false)
                    setHoveredFloor(null)
                  }}
                >
                  {floors.map((floor) => (
                    <div
                      key={floor.id}
                      className="floor-menu-item"
                      onMouseEnter={() => setHoveredFloor(floor.id)}
                      onMouseLeave={() => setHoveredFloor(null)}
                      onClick={() => {
                        handleFloorClick(floor)
                        setFloorMenuOpen(false)
                      }}
                    >
                      {floor.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="container">
          <h1 className="gallery-title">GALLERY</h1>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-minimal">
        <div className="footer-minimal-container">
          <div className="footer-minimal-brand">
            <h3>Casa Calda Development</h3>
            <p>Building dreams into reality with innovative residential developments across Georgia.</p>
          </div>
          <div className="footer-minimal-contact">
            <a href="tel:+995544556600">+995 544 556 600</a>
            <a href="mailto:casacaldadevelopment@gmail.com">casacaldadevelopment@gmail.com</a>
            <p className="footer-copyright">&copy; 2024 Casa Calda Development. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ProjectDetail
