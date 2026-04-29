import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import logo from '../assets/casa.jpg'
import logoFull from '../assets/logo-full.jpg'
import casaLogoFull from '../assets/casa-logo-full.png'
import zurabImg from '../assets/zurab_kurtanidze.png'
import eleneImg from '../assets/Elene_Janelidze.png'
import giorgiImg from '../assets/Giorgi_murusidze.png'
import tinatinImg from '../assets/Tinatin_Tavdumadze.png'
import { useImagePreloader } from '../hooks/useImagePreloader'

function About() {
  const aboutRef = useRef(null)
  const principlesRef = useRef(null)
  const teamRef = useRef(null)

  // Preload all images
  const imagesLoaded = useImagePreloader([logo, logoFull, casaLogoFull, zurabImg, eleneImg, giorgiImg, tinatinImg])

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

    if (aboutRef.current) observer.observe(aboutRef.current)
    if (principlesRef.current) observer.observe(principlesRef.current)
    if (teamRef.current) observer.observe(teamRef.current)

    return () => observer.disconnect()
  }, [imagesLoaded])
  const teamMembers = [
    {
      name: 'Zurab Kurtanidze',
      position: 'Founder & CEO',
      description: 'With over 10 years in real estate development, Zurab founded Casa Calda with a vision to transform Georgia\'s residential landscape.',
      image: zurabImg
    },
    {
      name: 'Elene Janelidze',
      position: 'Deputy Head of Legal',
      description: 'Experienced legal advisor specializing in corporate law, delivering strategic counsel and dedicated client representation daily.',
      image: eleneImg
    },
    {
      name: 'Giorgi Murusidze',
      position: 'CFO',
      description: 'Giorgi, our CFO, leads financial strategy, ensures fiscal health, and drives sustainable growth with precision.',
      image: giorgiImg
    },
    {
      name: 'Tinatin Tavdumadze',
      position: 'CMO',
      description: 'Our CMO crafts bold marketing strategies, builds brand value, and drives customer engagement with measurable impact.',
      image: tinatinImg
    }
  ]

  const achievements = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '1000+', label: 'Happy Families' },
    { number: '50+', label: 'Completed Projects' },
    { number: '95%', label: 'Client Satisfaction' }
  ]

  const principles = [
    {
      title: 'Mission',
      description: 'To create exceptional residential communities that enhance the quality of life for our residents while delivering superior value to our investors.'
    },
    {
      title: 'Vision',
      description: 'To be Georgia\'s most trusted and innovative real estate developer, setting new standards for design, quality, and customer satisfaction.'
    },
    {
      title: 'Values',
      description: 'Integrity, Excellence, Innovation, and Community - these core values guide every decision we make and every project we undertake.'
    }
  ]

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

      {/* About Us Section - Combined */}
      <section className="about-combined-section fade-in-scroll" ref={aboutRef}>
        <div className="container">
          <div className="about-combined-grid">
            {/* Left side - Title and decoration */}
            <div className="about-left">
              <h1 className="about-title-minimal">About Us</h1>
              <p className="about-year">Since 2018</p>
              <img src={casaLogoFull} alt="Casa Calda Logo" className="about-logo-circle" />
            </div>

            {/* Right side - Content */}
            <div className="about-right">
              <div className="about-text-block">
                <p className="about-lead">
                  For over 15 years, we've been committed to creating exceptional residential communities that combine modern luxury with timeless design.
                </p>
                <p className="about-body">
                  Founded in 2018, Casa Calda Development was built upon the solid foundation of a team with over two decades of industry expertise. Backed by the experience of professionals who have been delivering complex residential and industrial projects since 2001, the company brings a deep understanding of market dynamics and development processes.
                </p>
                <p className="about-body">
                  Casa Calda Development combines strategic vision with operational excellence, focusing on high-quality, future-ready assets that meet the evolving needs of both investors and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="principles-minimal fade-in-scroll" ref={principlesRef}>
        <div className="container">
          <div className="story-decorative-lines">
            <div className="story-line story-line-1"></div>
            <div className="story-line story-line-2"></div>
            <div className="story-line story-line-3"></div>
          </div>
          <h2 className="principles-heading">Our Foundation</h2>
          <div className="principles-grid-minimal">
            {principles.map((principle, index) => (
              <div key={index} className="principle-card-minimal">
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-minimal fade-in-scroll" ref={teamRef}>
        <div className="container">
          <div className="story-decorative-lines">
            <div className="story-line story-line-1"></div>
            <div className="story-line story-line-2"></div>
            <div className="story-line story-line-3"></div>
          </div>
          <h2 className="team-heading">Our Team</h2>
          <div className="team-grid-minimal">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card-minimal">
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-photo" />
                </div>
                <div className="team-info">
                  <h3 className="team-name-minimal">{member.name}</h3>
                  <p className="team-position-minimal">{member.position}</p>
                  <p className="team-description-minimal">{member.description}</p>
                </div>
              </div>
            ))}
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

export default About
