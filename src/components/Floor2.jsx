import { Link } from 'react-router-dom'
import logo from '../assets/casa.jpg'

function Floor2() {
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

      {/* Floor Content Section */}
      <section className="project-info-section" style={{ paddingTop: '120px' }}>
        <div className="project-header-wrapper">
          <div className="project-breadcrumb">
            <span className="breadcrumb-item">CASA CALDA</span>
            <span className="breadcrumb-divider"></span>
            <span className="breadcrumb-item">DIDI DIGHOMI</span>
            <span className="breadcrumb-separator"></span>
            <Link
              to="/project/didi-digomi-casa"
              className="breadcrumb-item"
              style={{ textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.target.style.color = '#f38020'}
              onMouseLeave={(e) => e.target.style.color = ''}
            >
              FLOOR
            </Link>
            <span className="breadcrumb-separator"></span>
            <span className="breadcrumb-item">F2</span>
          </div>
        </div>
        <div className="container">
          <h1 className="gallery-title">FLOOR 2</h1>
          <div style={{ padding: '40px 0' }}>
            <p style={{ fontSize: '18px', marginBottom: '10px' }}>Available apartments: 12</p>
            <p style={{ fontSize: '16px', color: '#666' }}>Floor plan and apartment details coming soon...</p>
          </div>
        </div>
        <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
          <Link
            to="/project/didi-digomi-casa"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: '500',
              letterSpacing: '0.5px',
              color: '#666',
              textDecoration: 'none',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              transition: 'all 0.3s ease',
              backgroundColor: '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#f38020'
              e.currentTarget.style.borderColor = '#f38020'
              e.currentTarget.style.backgroundColor = '#fff5f0'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#666'
              e.currentTarget.style.borderColor = '#e0e0e0'
              e.currentTarget.style.backgroundColor = '#fff'
            }}
          >
            <span style={{ fontSize: '18px' }}>←</span>
            <span>BACK TO FLOORS</span>
          </Link>
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

export default Floor2
