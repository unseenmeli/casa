import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import mainPhoto from '../assets/main_photo.jpg'
import logo from '../assets/casa.jpg'
import casaBgTry from '../assets/sunsunsun.png'
import { useImagePreloader } from '../hooks/useImagePreloader'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const storyRef = useRef(null)
  const projectsRef = useRef(null)

  // Preload all images
  const imagesLoaded = useImagePreloader([mainPhoto, logo, casaBgTry])

  useEffect(() => {
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
  }, [])

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

      {/* Our Story Section */}
      <section className="our-story-section fade-in-scroll" ref={storyRef} style={{
        backgroundImage: `linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(42, 42, 42, 0.8) 100%), url(${casaBgTry})`,
        backgroundColor: '#1a1a1a'
      }}>
        <div className="container">
          <h2 className="story-heading">Our Story</h2>
          <div className="story-content">
            <p className="story-intro">
              For over 15 years, we've been committed to creating exceptional residential communities that combine modern luxury with timeless design, setting new standards in Georgia's real estate market.
            </p>
            <p className="story-text">
              Founded in 2018, Casa Calda Development was built upon the solid foundation of a team with over two decades of industry expertise. Backed by the experience of professionals who have been delivering complex residential and industrial projects since 2001, the company brings a deep understanding of market dynamics and development processes.
            </p>
            <Link to="/about" className="view-more-btn">
              View More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="our-projects-section fade-in-scroll" ref={projectsRef}>
        <div className="container">
          <h2 className="projects-heading">Our Projects</h2>
          <p className="projects-subtitle">Crafting exceptional spaces where modern design meets timeless elegance</p>

          {/* Decorative Lines */}
          <div className="decorative-lines">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
          </div>

          {/* Gallery placeholder - will be implemented next */}
          <div className="projects-gallery">
            {/* Gallery content will go here */}
          </div>
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

export default Home
