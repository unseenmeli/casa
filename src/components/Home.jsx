import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import mainPhoto from '../assets/main_photo.jpg'
import logo from '../assets/casa.jpg'
import casaBgTry from '../assets/sunsunsun.png'
import casaLogoFull from '../assets/casa-logo-full.png'
import casaLogoWhite from '../assets/casa-logo-white.png'
import digImage from '../assets/dig.png'
import { useImagePreloader } from '../hooks/useImagePreloader'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const storyRef = useRef(null)
  const projectsRef = useRef(null)

  // Preload all images
  const imagesLoaded = useImagePreloader([mainPhoto, logo, casaBgTry, casaLogoFull, casaLogoWhite, digImage])

  useEffect(() => {
    // Only set up observer after images are loaded
    if (!imagesLoaded) return

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    if (storyRef.current) observer.observe(storyRef.current)
    if (projectsRef.current) observer.observe(projectsRef.current)

    return () => observer.disconnect()
  }, [imagesLoaded])

  // Array of images - add more images here in the future
  const images = [
    { src: mainPhoto, alt: 'Casa Calda Building' }
    // Add more images here: { src: image2, alt: 'Description' }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
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

      {/* Building Visualization Section - Carousel */}
      <section className="building-section">
        <div className="carousel">
          {/* Carousel Images */}
          <div className="carousel-track">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="building-image"
                />
              </div>
            ))}
          </div>

          {/* Project Info Overlay - Left Side */}
          <div className="carousel-info-left">
            <h2 className="carousel-project-title">Casa Calda</h2>
            <p className="carousel-project-subtitle">Didi Digomi, Tbilisi</p>
            <p className="carousel-project-desc">Modern residential complex with contemporary design and premium amenities</p>
          </div>

          {/* Navigation Arrows - Only show if more than 1 image */}
          {images.length > 1 && (
            <>
              <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
                ‹
              </button>
              <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
                ›
              </button>

              {/* Dots Indicator */}
              <div className="carousel-dots">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </>
          )}

          {/* View Project Button Overlay */}
          <Link to="/project/didi-digomi-casa" className="carousel-overlay">
            <button className="view-project-btn">View Project</button>
          </Link>
        </div>
      </section>

      {/* Our Story Section - Redesigned */}
      <section className="our-story-redesign fade-in-scroll" ref={storyRef}>
        <div className="container">
          <div className="story-grid">
            {/* Left side - Title and decoration */}
            <div className="story-left">
              <div className="story-decorative-lines">
                <div className="story-line story-line-1"></div>
                <div className="story-line story-line-2"></div>
                <div className="story-line story-line-3"></div>
              </div>
              <h2 className="story-heading-redesign">Our Story</h2>
              <div className="story-year">Since 2018</div>
              <img src={casaLogoFull} alt="Casa Calda Development" className="story-logo-image" />
            </div>

            {/* Right side - Content */}
            <div className="story-right">
              <div className="story-text-block">
                <p className="story-lead">
                  For over 15 years, we've been committed to creating exceptional residential communities that combine modern luxury with timeless design.
                </p>
                <p className="story-body">
                  Founded in 2018, Casa Calda Development was built upon the solid foundation of a team with over two decades of industry expertise. Backed by professionals who have been delivering complex residential and industrial projects since 2001, we bring a deep understanding of market dynamics and development processes.
                </p>
                <div className="story-stats">
                  <div className="story-stat-item">
                    <span className="story-stat-number">15+</span>
                    <span className="story-stat-label">Years Experience</span>
                  </div>
                  <div className="story-stat-divider"></div>
                  <div className="story-stat-item">
                    <span className="story-stat-number">2001</span>
                    <span className="story-stat-label">Team Since</span>
                  </div>
                </div>
                <Link to="/about" className="story-learn-more">
                  Learn More About Us
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="our-projects-section fade-in-scroll" ref={projectsRef}>
        <div className="container">
          {/* Title and subtitle */}
          <div className="story-decorative-lines">
            <div className="story-line story-line-1"></div>
            <div className="story-line story-line-2"></div>
            <div className="story-line story-line-3"></div>
          </div>
          <h2 className="projects-heading-redesign">Our Projects</h2>
          <p className="projects-subtitle-orange">Crafting exceptional spaces where modern design meets timeless elegance</p>

          {/* Projects Gallery - Row of images */}
          <div className="projects-gallery-row">
            <div className="project-image-wrapper">
              <img src={digImage} alt="Didi Digomi Project" className="project-gallery-image" />
              <Link to="/project/didi-digomi-casa" className="project-overlay-left">
                <button className="view-project-btn-left">View Project</button>
              </Link>
            </div>
            {/* More project images will go here */}
          </div>
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

export default Home
