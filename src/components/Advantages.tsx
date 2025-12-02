import React from 'react';
import { Award, TrendingUp, ShieldCheck, Users } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const Advantages = () => {
  const { t } = useLanguage();
  
  const advantages = [
    {
      id: '01',
      title: t('advantages.fastDelivery.title'),
      description: t('advantages.fastDelivery.description'),
      icon: <Award size={40} strokeWidth={1.5} />,
    },
    {
      id: '02',
      title: t('advantages.realTimeTracking.title'),
      description: t('advantages.realTimeTracking.description'),
      icon: <TrendingUp size={40} strokeWidth={1.5} />,
    },
    {
      id: '03',
      title: t('advantages.securePackaging.title'),
      description: t('advantages.securePackaging.description'),
      icon: <ShieldCheck size={40} strokeWidth={1.5} />,
    },
    {
      id: '04',
      title: t('advantages.customerSupport.title'),
      description: t('advantages.customerSupport.description'),
      icon: <Users size={40} strokeWidth={1.5} />,
    },
  ];
  return (
    <section className="advantages-section">
      <div className="container">
        <div className="header">
          <div className="title-wrapper">
            <span className="line"></span>
            <h2 className="section-title">{t('advantages.title')}</h2>
            <span className="line"></span>
          </div>
          <h3 className="main-heading">{t('advantages.subtitle')}</h3>
        </div>
        
        <div className="grid">
          {advantages.map((item) => (
            <div key={item.id} className="card">
              <div className="icon-container">
                <div className="icon-circle">
                  {item.icon}
                </div>
                <div className="badge">{item.id}</div>
              </div>
              <div className="card-content">
                <h4 className="card-title">{item.title}</h4>
                <p className="card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .advantages-section {
          padding: 6rem 1rem;
          background-color: #111827; /* Dark Navy/Black */
          color: #ffffff;
          position: relative;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .title-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .line {
          width: 40px;
          height: 2px;
          background-color: #38bdf8; /* Light Blue */
          opacity: 0.5;
        }

        .section-title {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #38bdf8;
          font-weight: 600;
        }

        .main-heading {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          background: rgba(56, 189, 248, 0.1);
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border-radius: 4px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 3rem;
        }

        @media (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .icon-container {
          position: relative;
          margin-bottom: 2rem;
          width: 120px;
          height: 120px;
        }

        .icon-circle {
          width: 100%;
          height: 100%;
          background-color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0ea5e9; /* Blue Icon */
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .card:hover .icon-circle {
          transform: scale(1.05);
        }

        .badge {
          position: absolute;
          top: 0;
          right: 0;
          width: 40px;
          height: 40px;
          background-color: #38bdf8; /* Light Blue Badge */
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          border: 3px solid #111827; /* Match section bg for cutout effect */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          z-index: 10;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .card-description {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #9ca3af; /* Gray-400 */
          max-width: 280px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
};

export default Advantages;
