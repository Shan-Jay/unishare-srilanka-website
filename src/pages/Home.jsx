import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Award, Users } from 'lucide-react';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page animate-fade-in" style={{ position: 'relative', zIndex: 1 }}>
      
      {/* Animated Background Elements */}
      <div className="animated-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container" style={{ gridTemplateColumns: '1fr', textAlign: 'center' }}>
          <div className="hero-content">
            <div className="badge delay-100">Leading Education Network</div>
            <h1 className="hero-title delay-200">
              Welcome to <span className="text-gradient">UNISHARE</span> <br/>
              Academy of Wisdom
            </h1>
            <p className="hero-subtitle delay-300" style={{ margin: '0 auto 1rem' }}>
              Empowering the nation and overseas with world-class higher studies. Discover your potential with our expert-led diplomas and certificate courses.
            </p>
            <div className="hero-actions delay-300" style={{ justifyContent: 'center' }}>
              <button className="btn btn-primary" onClick={() => navigate('/courses')}>
                Explore Courses <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline" onClick={() => navigate('/contact')}>
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Animated Marquee */}
        <div className="marquee-container delay-300">
          <div className="marquee-content">
            <span className="marquee-item">🚀 Admissions Now Open for 2026!</span>
            <span className="marquee-item">🎓 100% Guaranteed Excellence</span>
            <span className="marquee-item">🌍 Learn from International Experts</span>
            <span className="marquee-item">📜 UGC Recognized Diplomas</span>
            <span className="marquee-item">🚀 Admissions Now Open for 2026!</span>
            <span className="marquee-item">🎓 100% Guaranteed Excellence</span>
            <span className="marquee-item">🌍 Learn from International Experts</span>
            <span className="marquee-item">📜 UGC Recognized Diplomas</span>
          </div>
        </div>
      </section>

      {/* Main Image Showcase */}
      <section className="showcase-banner animate-fade-in delay-300">
        <div className="container" style={{ display: 'flex', justifyContent: 'center', paddingBottom: '4rem' }}>
           <div className="showcase-card glass" style={{ width: '100%', maxWidth: '800px', borderRadius: '24px', padding: '1rem', background: 'var(--glass-bg)' }}>
               <img src="https://unishareorg.wordpress.com/wp-content/uploads/2024/11/whatsapp-image-2025-02-04-at-19.47.49.jpeg" alt="UNISHARE Promotion" style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '16px', display: 'block' }} />
           </div>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="features-section">
        <div className="container features-grid">
          <div className="feature-card glass">
            <BookOpen className="feature-icon" size={40} />
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals with years of experience.</p>
          </div>
          <div className="feature-card glass">
            <Award className="feature-icon" size={40} />
            <h3>Recognized Certs</h3>
            <p>Our diplomas and certificates are highly valued worldwide.</p>
          </div>
          <div className="feature-card glass">
            <Users className="feature-icon" size={40} />
            <h3>Global Network</h3>
            <p>Join a community of thousands of successful students.</p>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="info-section">
        <div className="container info-container">
          <div className="info-text">
            <h2>Why Choose UNISHARE?</h2>
            <p>
              We are committed to providing an exceptional educational experience. Whether you are looking 
              to advance your career in ICT, Psychology, Beauty Culture, or more, our comprehensive programs 
              are designed to equip you with the practical skills needed to succeed.
            </p>
            <button className="btn btn-secondary mt-4" onClick={() => navigate('/courses')}>
              View All Programs
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
