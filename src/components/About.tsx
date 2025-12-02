import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="grid grid-2">
          <div className="about-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>{t('about.title')}</h2>
            <div className="about-text">
              <p dangerouslySetInnerHTML={{ 
                __html: t('about.paragraph1').replace('PT. Surya Mandiri Logistik', `<strong>${t('about.companyName')}</strong>`)
              }} />
              <p>
                {t('about.paragraph2')}
              </p>
              <p>
                {t('about.paragraph3')}
              </p>
            </div>
            
            <div className="download-section">
              <a href="#" className="btn-download" onClick={(e) => e.preventDefault()}>
                {t('about.downloadProfile')}
              </a>
            </div>
            
            <div className="mission-box glass">
              <h4>{t('about.mission')}</h4>
              <p>{t('about.missionStatement')}</p>
            </div>
          </div>
          
          <div className="about-image-wrapper">
            <div className="about-image-container">
               <Image 
                src="/about.webp"
                alt="Logistics Operations" 
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="about-decoration"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          position: relative;
          overflow: hidden;
        }

        .about-text p {
          margin-bottom: 1.5rem;
          color: var(--color-text-light);
          font-size: 1.05rem;
        }

        .about-text strong {
          color: var(--color-primary);
        }

        .mission-box {
          background: linear-gradient(135deg, rgba(0, 59, 115, 0.05) 0%, rgba(0, 168, 232, 0.1) 100%);
          border-left: 4px solid var(--color-secondary);
          padding: 2rem;
          margin-top: 2.5rem;
          border-radius: 0 8px 8px 0;
        }

        .mission-box h4 {
          color: var(--color-primary);
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .mission-box p {
          font-style: italic;
          color: var(--color-text);
          font-weight: 500;
          margin-bottom: 0;
          font-size: 1.1rem;
        }

        .about-image-wrapper {
          position: relative;
          padding: 2rem;
        }

        .about-image-container {
          position: relative;
          height: 100%;
          min-height: 500px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--color-white);
          z-index: 2;
        }

        .about-decoration {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 80%;
          height: 80%;
          background: var(--gradient-accent);
          border-radius: 20px;
          z-index: 1;
          opacity: 0.1;
          transform: translate(10px, 10px);
        }

        @media (max-width: 768px) {
          .about-image-wrapper {
            padding: 0;
            margin-top: 2rem;
          }
          
          .about-image-container {
            min-height: 300px;
          }
        }

        .download-section {
          margin-top: 2rem;
        }

        .btn-download {
          display: inline-block;
          background-color: var(--color-primary);
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: background-color 0.2s;
        }

        .btn-download:hover {
          background-color: var(--color-secondary);
          color: var(--color-primary);
        }
      `}</style>
    </section>
  );
}
