import { Link } from 'react-router-dom'
import logo from '../assets/casa.jpg'
import logoFull from '../assets/logo-full.jpg'
import zurabImg from '../assets/zurab_kurtanidze.png'
import eleneImg from '../assets/Elene_Janelidze.png'
import giorgiImg from '../assets/Giorgi_murusidze.png'
import tinatinImg from '../assets/Tinatin_Tavdumadze.png'
import { useImagePreloader } from '../hooks/useImagePreloader'

function About() {
  // Preload all images
  const imagesLoaded = useImagePreloader([logo, logoFull, zurabImg, eleneImg, giorgiImg, tinatinImg])
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

      {/* Hero Section */}
      <section className="about-hero-new">
        <div className="about-hero-content">
          <h1 className="about-title-new">About Casa Calda Development</h1>
          <p className="about-subtitle-new">
            For over 15 years, we've been committed to creating exceptional residential communities that combine modern luxury with timeless design, setting new standards in Georgia's real estate market.
          </p>
        </div>
      </section>

      {/* Our Story Section with Logo */}
      <section className="about-story-new">
        <div className="container">
          <div className="story-with-logo">
            <div className="story-logo-side">
              <img src={logoFull} alt="Casa Calda Logo" className="story-logo-img" />
            </div>
            <div className="story-text-side">
              <h2 className="section-title-new">Our Story</h2>
              <p className="story-paragraph-new">
                Founded in 2018, Casa Calda Development was built upon the solid foundation of a team with over two decades of industry expertise. Backed by the experience of professionals who have been delivering complex residential and industrial projects since 2001, the company brings a deep understanding of market dynamics and development processes.
              </p>
              <p className="story-paragraph-new">
                Casa Calda Development combines strategic vision with operational excellence, focusing on high-quality, future-ready assets that meet the evolving needs of both investors and communities. Our proven track record reflects a commitment to innovation, sustainability, and value-driven growth across every phase of real estate development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="principles-new">
        <div className="container">
          <h2 className="section-title-new centered">Our Foundation</h2>
          <p className="section-subtitle-new">The principles that guide everything we do</p>
          <div className="principles-grid-new">
            {principles.map((principle, index) => (
              <div key={index} className="principle-card-new">
                <div className="principle-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-new">
        <div className="container">
          <h2 className="section-title-new centered">Meet Our Team</h2>
          <p className="section-subtitle-new">The experts behind Casa Calda's success</p>
          <div className="team-grid-new">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card-new">
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-photo" />
                </div>
                <div className="team-info">
                  <h3 className="team-name-new">{member.name}</h3>
                  <p className="team-position-new">{member.position}</p>
                  <p className="team-description-new">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-new">
        <div className="container">
          <h2 className="section-title-new centered white">Our Achievements</h2>
          <p className="section-subtitle-new white">Numbers that reflect our commitment to excellence</p>
          <div className="achievements-grid-new">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card-new">
                <div className="achievement-number-new">{achievement.number}</div>
                <div className="achievement-label-new">{achievement.label}</div>
              </div>
            ))}
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

export default About
