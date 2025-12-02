"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, Globe, Truck, Plane, Ship } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  
  return (
    <main className="main-content">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">{t('contact.heroTitle')}</h1>
            <p className="hero-subtitle">
              {t('contact.heroSubtitle')}
            </p>
          </div>

          <div className="hero-content">
            {/* Left: Form */}
            <div className="form-wrapper">
              <form className="contact-form">
                <div className="form-row">
                  <input type="text" name="name" id="name" placeholder={t('contact.form.name')} className="form-input" />
                  <input type="email" name="email" id="email" placeholder={t('contact.form.email')} className="form-input" />
                </div>
                <div className="form-row">
                   <div className="phone-input-wrapper">
                      <input type="tel" name="phone" id="phone" placeholder={t('contact.form.phone')} className="form-input" />
                   </div>
                   <select name="interest" id="interest" className="form-input select-input">
                      <option value="">{t('contact.form.interestedIn')}</option>
                      <option value="freight">{t('contact.form.interestedOptions.freight')}</option>
                      <option value="warehousing">{t('contact.form.interestedOptions.warehousing')}</option>
                      <option value="customs">{t('contact.form.interestedOptions.customs')}</option>
                   </select>
                </div>
                <textarea name="message" id="message" rows={6} placeholder={t('contact.form.message')} className="form-input textarea-input"></textarea>
                
                <button type="submit" className="submit-btn">{t('contact.form.submit')}</button>
                
                <p className="disclaimer">
                  {t('contact.form.disclaimer')}
                </p>
              </form>
            </div>

            {/* Right: Illustration */}
            <div className="illustration-wrapper">
              <div className="illustration-circle">
                 <div className="globe-icon">
                    <Globe size={120} strokeWidth={1} />
                 </div>
                 <div className="orbit-icon plane"><Plane size={40} /></div>
                 <div className="orbit-icon ship"><Ship size={40} /></div>
                 <div className="orbit-icon truck"><Truck size={40} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="location-section">
        <div className="container">
          <div className="location-header">
            <span className="location-label">{t('contact.location.label')}</span>
            <h2 className="location-title">{t('contact.location.title')}</h2>
          </div>

          <div className="location-content">
             <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31725.101864251148!2d106.90568!3d-6.311231!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6992ad50bc88a5%3A0x1f312dd5fb128b29!2sJl.%20Bambu%20Apus%20Raya%20No.3%2C%20RT.9%2FRW.3%2C%20Bambu%20Apus%2C%20Kec.%20Cipayung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013890%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1764632274048!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
             </div>

             <div className="info-card">
                <div className="info-group">
                   <p className="info-label">{t('contact.info.address')}</p>
                   <p className="info-value">Jl. Bambu Apus Raya No.3, RT.9/RW.3, Bambu Apus, Kec. Cipayung, Kota Jakarta Timur 13890</p>
                </div>
                
                <div className="info-group">
                   <p className="info-label">{t('contact.info.email')}</p>
                   <p className="info-value">info@visilogistics.com</p>
                </div>

                <div className="info-group">
                   <p className="info-label">{t('contact.info.phone')}</p>
                   <p className="info-value">+6221 8551 9677</p>
                </div>

                <div className="social-icons">
                   <div className="social-icon"><Globe size={18} /></div>
                   <div className="social-icon"><Mail size={18} /></div>
                   <div className="social-icon"><Phone size={18} /></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .main-content {
          background-color: #fff;
          min-height: 100vh;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Hero Section */
        .hero-section {
          padding: 4rem 0 6rem;
        }

        .hero-text {
          text-align: center;
          margin-bottom: 4rem;
        }

        .hero-title {
          font-size: 3.5rem;
          color: #1e293b;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .hero-subtitle {
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-content {
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
          }
        }

        .form-wrapper {
          flex: 1;
          width: 100%;
          max-width: 500px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .form-row {
            grid-template-columns: 1fr 1fr;
          }
        }

        .form-input {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
          color: #334155;
        }

        .form-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .phone-input-wrapper {
          position: relative;
        }

        .flag-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.2rem;
        }

        .select-input {
          background-color: white;
          color: #64748b;
        }

        .textarea-input {
          resize: none;
        }

        .submit-btn {
          background-color: #2563eb;
          color: white;
          padding: 1rem;
          border-radius: 2rem;
          border: none;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.2s;
          margin-top: 0.5rem;
        }

        .submit-btn:hover {
          background-color: #1d4ed8;
        }

        .disclaimer {
          font-size: 0.75rem;
          color: #94a3b8;
          text-align: center;
          margin-top: 1rem;
        }

        /* Illustration */
        .illustration-wrapper {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }

        .illustration-circle {
          position: relative;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background-color: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .globe-icon {
          color: #3b82f6;
          z-index: 10;
        }

        .orbit-icon {
          position: absolute;
          color: #60a5fa;
          animation: float 3s ease-in-out infinite;
        }

        .plane { top: 20px; left: 20px; animation-delay: 0s; }
        .ship { bottom: 40px; right: 20px; animation-delay: 1s; }
        .truck { bottom: 20px; left: 60px; animation-delay: 0.5s; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Location Section */
        .location-section {
          padding: 4rem 0;
          background-color: #fff;
        }

        .location-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .location-label {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: #94a3b8;
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.5rem;
        }

        .location-title {
          font-size: 2.5rem;
          color: #1e293b;
          font-weight: 500;
        }

        .location-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (min-width: 992px) {
          .location-content {
            flex-direction: row;
            height: 450px;
          }
        }

        .map-container {
          flex: 2;
          border-radius: 1.5rem;
          overflow: hidden;
          min-height: 300px;
          border: 1px solid #f1f5f9;
        }

        .info-card {
          flex: 1;
          background-color: #f8fafc; /* Light gray/blue */
          border-radius: 1.5rem;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .info-group {
          margin-bottom: 2rem;
        }

        .info-label {
          font-size: 0.875rem;
          color: #64748b;
          margin-bottom: 0.25rem;
        }

        .info-value {
          font-size: 1.1rem;
          color: #0f172a;
          font-weight: 500;
          line-height: 1.5;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1e293b;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          cursor: pointer;
          transition: transform 0.2s;
        }

        .social-icon:hover {
          transform: scale(1.1);
        }
      `}</style>
    </main>
  );
}
