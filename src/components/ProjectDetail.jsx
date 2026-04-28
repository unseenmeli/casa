import { Link } from 'react-router-dom'
import mainPhoto from '../assets/main_photo.jpg'
import logo from '../assets/casa.jpg'
import floorOutline from '../assets/outline.png'
import { useImagePreloader } from '../hooks/useImagePreloader'

function ProjectDetail() {
  // Preload all images
  const imagesLoaded = useImagePreloader([mainPhoto, logo, floorOutline])

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
                className="floor-outline-overlay floor-4"
              />
              <img
                src={floorOutline}
                alt="Floor 3"
                className="floor-outline-overlay floor-3"
              />
              <img
                src={floorOutline}
                alt="Floor 2"
                className="floor-outline-overlay floor-2"
              />
              <img
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
