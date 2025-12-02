import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="grid grid-4 footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-wrapper">
               <Image 
                src="/logo.png" 
                alt="Visi Logistics Logo" 
                width={180} 
                height={54} 
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="footer-desc">
              {t('footer.companyDescription')}
            </p>
            <p className="copyright">© {new Date().getFullYear()} Visi Logistics. {t('footer.allRightsReserved')}</p>
          </div>
          
          <div className="footer-links">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><a href="#home">{t('navigation.home')}</a></li>
              <li><a href="/about">{t('navigation.about')}</a></li>
              <li><a href="/services">{t('navigation.services')}</a></li>
              <li><a href="#track">{t('navigation.track')}</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>{t('footer.services')}</h4>
            <ul>
              <li><a href="/services">{t('services.charterUnit.title')}</a></li>
              <li><a href="/services">{t('services.seaFreight.title')}</a></li>
              <li><a href="/services">{t('services.landTransport.title')}</a></li>
              <li><a href="/services">{t('services.warehouseManagement.title')}</a></li>
              <li><a href="/services">{t('services.airFreight.title')}</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{t('common.contactUs')}</h4>
            <div className="contact-item">
              <strong>Head Office:</strong>
              <a href="https://maps.app.goo.gl/5CiCba5Z7xsvwGk66" target="_blank" rel="noopener noreferrer">Jl. Bambu Apus Raya No.3</a>
            </div>
            <div className="contact-item">
              <strong>Email:</strong>
              <a href="mailto:info@visilogistics.com">info@visilogistics.com</a>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong>
              <a href="https://wa.me/622185519677" target="_blank" rel="noopener noreferrer">+6221 8551 9677</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--gradient-primary);
          color: var(--color-white);
          padding: var(--spacing-lg) 0;
          font-size: 0.95rem;
        }

        .footer-logo-wrapper {
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        .footer-desc {
          opacity: 0.8;
          margin-bottom: 1rem;
        }

        .footer h4 {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: var(--color-secondary);
          font-weight: 700;
        }

        .footer-links ul li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          opacity: 0.8;
          transition: all var(--transition-fast);
        }

        .footer-links a:hover {
          opacity: 1;
          color: var(--color-secondary);
          padding-left: 5px;
        }

        .contact-item {
          margin-bottom: 1rem;
        }

        .contact-item strong {
          display: block;
          color: var(--color-secondary);
          font-size: 0.85rem;
          margin-bottom: 0.25rem;
        }

        .contact-item p, .contact-item a {
          opacity: 0.9;
          display: block;
        }

        .contact-item a:hover {
          color: var(--color-secondary);
          opacity: 1;
        }

        .copyright {
          margin-top: 3rem;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </footer>
  );
}
