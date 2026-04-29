import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import mainPhoto from '../assets/main_photo.jpg'
import logo from '../assets/casa.jpg'
import floorOutline from '../assets/outline.png'
import { useImagePreloader } from '../hooks/useImagePreloader'

function ProjectDetail() {
  // Preload all images
  const imagesLoaded = useImagePreloader([mainPhoto, logo, floorOutline])

  const buildingImageRef = useRef(null)
  const floor4Ref = useRef(null)
  const floor3Ref = useRef(null)
  const floor2Ref = useRef(null)
  const floor1Ref = useRef(null)

  useEffect(() => {
    if (!imagesLoaded) return

    const positionFloors = () => {
      const img = buildingImageRef.current
      if (!img) return

      // Get the actual rendered height of the image
      const imgHeight = img.getBoundingClientRect().height

      // Calculate positions based on percentages that work at your 100% zoom
      const positions = {
        floor4: imgHeight * 0.324,
        floor3: imgHeight * 0.435,
        floor2: imgHeight * 0.540,
        floor1: imgHeight * 0.650
      }

      // Apply positions
      if (floor4Ref.current) floor4Ref.current.style.top = `${positions.floor4}px`
      if (floor3Ref.current) floor3Ref.current.style.top = `${positions.floor3}px`
      if (floor2Ref.current) floor2Ref.current.style.top = `${positions.floor2}px`
      if (floor1Ref.current) floor1Ref.current.style.top = `${positions.floor1}px`
    }

    // Position on load and image load
    const img = buildingImageRef.current
    if (img && img.complete) {
      positionFloors()
    } else if (img) {
      img.addEventListener('load', positionFloors)
    }

    // Reposition on window resize
    window.addEventListener('resize', positionFloors)

    return () => {
      window.removeEventListener('resize', positionFloors)
      if (img) {
        img.removeEventListener('load', positionFloors)
      }
    }
  }, [imagesLoaded])

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
                ref={buildingImageRef}
                src={mainPhoto}
                alt="Casa Calda Building"
                className="building-image"
              />
              {/* Floor outline overlays - positioned by JavaScript */}
              <img
                ref={floor4Ref}
                src={floorOutline}
                alt="Floor 4"
                className="floor-outline-overlay floor-4"
              />
              <img
                ref={floor3Ref}
                src={floorOutline}
                alt="Floor 3"
                className="floor-outline-overlay floor-3"
              />
              <img
                ref={floor2Ref}
                src={floorOutline}
                alt="Floor 2"
                className="floor-outline-overlay floor-2"
              />
              <img
                ref={floor1Ref}
                src={floorOutline}
                alt="Floor 1"
                className="floor-outline-overlay floor-1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Info Section */}
      <section className="project-info-section">
        <div className="container">
          <h2 className="project-title-detail">Didi Digomi Casa</h2>
          <p className="project-subtitle-detail">Modern residential complex with contemporary design and premium amenities</p>
          <p className="project-description-detail">Click on any floor to explore apartments and discover your perfect home in the heart of Tbilisi's fastest-growing district.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Casa Calda Development</h3>
              <p>Building dreams into reality with innovative residential developments across Georgia.</p>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Projects</Link></li>
                <li><a href="#properties">Properties</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact</h4>
              <p><a href="tel:+995544556600">+995 544556600</a></p>
              <p><a href="mailto:casacaldadevelopment@gmail.com">casacaldadevelopment@gmail.com</a></p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Casa Calda Development. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ProjectDetail
