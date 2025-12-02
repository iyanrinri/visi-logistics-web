import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight, Package } from 'lucide-react';

const SLIDES = [
  {
    title: "Possibility In Every Direction",
    subtitle: "A PARTNERSHIP BASED ON TRUST",
    feature: "SAFETY & SECURITY",
    description: "We partner with transportation and delivery companies worldwide.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Possibility In Every Direction",
    subtitle: "COMFORTABLE PAYMENT SYSTEM",
    feature: "BEST SERVICE",
    description: "You can pay for our services using any modern method of payment",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  }
];

export default function Hero() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [trackingId, setTrackingId] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      router.push(`/track?id=${encodeURIComponent(trackingId.trim())}`);
    }
  };

  return (
    <section className="hero" id="home">
      {SLIDES.map((slide, index) => (
        <div 
          key={index}
          className={`hero-bg ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        ></div>
      ))}
      
      <div className="container">
        <div className="hero-content">
          <div className="slide-content">
            <span className="hero-subtitle-text fade-in">{SLIDES[currentSlide].subtitle}</span>
            <h1 className="hero-title fade-in-up">
              {SLIDES[currentSlide].title} <br />
              <span className="text-highlight">{SLIDES[currentSlide].feature}</span>
            </h1>
            <p className="hero-description fade-in-up-delay">
              {SLIDES[currentSlide].description}
            </p>
          </div>
          
          <div className="tracking-box glass fade-in-up-delay-2">
            <div className="tracking-header">
              <div className="tracking-icon">
                <Package size={24} />
              </div>
              <h3>Track Your Shipment</h3>
            </div>
            <form onSubmit={handleTrackSubmit} className="tracking-form-wrapper">
              <div className="input-group">
                <Search className="search-icon" size={20} />
                <input 
                  type="text" 
                  placeholder="Enter your tracking ID..." 
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-track">
                <span>Track</span>
                <ArrowRight size={18} />
              </button>
            </form>
            <p className="tracking-help">Need help? <a href="/contact">Contact Support</a></p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          z-index: -1;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .hero-bg.active {
          opacity: 1;
        }

        .hero-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--gradient-hero);
          opacity: 0.85;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          color: var(--color-white);
          display: flex;
          flex-direction: column;
          gap: 3rem;
          max-width: 800px;
        }

        .slide-content {
          min-height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-subtitle-text {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          color: var(--color-secondary);
          text-transform: uppercase;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .text-highlight {
          color: var(--color-secondary);
        }

        .hero-description {
          font-size: 1.25rem;
          opacity: 0.9;
          line-height: 1.6;
          max-width: 600px;
        }

        /* Animations */
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .fade-in-up-delay {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .fade-in-up-delay-2 {
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Tracking Box Redesign */
        .tracking-box {
          padding: 2rem;
          border-radius: 1.5rem;
          max-width: 550px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
        }

        .tracking-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .tracking-icon {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-secondary);
        }

        .tracking-box h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
          margin: 0;
        }

        .tracking-form-wrapper {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          background: white;
          padding: 0.5rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .input-group {
          flex: 1;
          display: flex;
          align-items: center;
          padding-left: 1rem;
        }

        .search-icon {
          color: #94a3b8;
          margin-right: 0.75rem;
        }

        .tracking-form-wrapper input {
          width: 100%;
          border: none;
          outline: none;
          font-size: 1rem;
          color: #1e293b;
          background: transparent;
          padding: 0.5rem 0;
        }

        .tracking-form-wrapper input::placeholder {
          color: #94a3b8;
        }

        .btn-track {
          background: var(--color-primary);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
        }

        .btn-track:hover {
          background: #002b55; /* Darker shade of primary */
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 59, 115, 0.3);
        }

        .tracking-help {
          font-size: 0.875rem;
          opacity: 0.9;
          margin-left: 0.5rem;
        }

        .tracking-help a {
          color: var(--color-secondary);
          font-weight: 600;
          margin-left: 0.25rem;
          text-decoration: none;
          position: relative;
        }

        .tracking-help a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-secondary);
          transition: width 0.3s;
        }

        .tracking-help a:hover::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .tracking-form-wrapper {
            flex-direction: column;
            background: transparent;
            padding: 0;
            box-shadow: none;
          }

          .input-group {
            background: white;
            padding: 1rem;
            border-radius: 0.75rem;
          }

          .btn-track {
            width: 100%;
            justify-content: center;
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
