import { Warehouse, Plane, Ship, Truck, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('services.charterUnit.title'),
      description: t('services.charterUnit.description'),
      icon: <Truck size={48} strokeWidth={1.5} />,
      subServices: t('services.charterUnit.subServices') as string[]
    },
    {
      title: t('services.seaFreight.title'),
      description: t('services.seaFreight.description'),
      icon: <Ship size={48} strokeWidth={1.5} />,
      subServices: t('services.seaFreight.subServices') as string[]
    },
    {
      title: t('services.landTransport.title'),
      description: t('services.landTransport.description'),
      icon: <MapPin size={48} strokeWidth={1.5} />,
      subServices: t('services.landTransport.subServices') as string[]
    },
    {
      title: t('services.warehouseManagement.title'),
      description: t('services.warehouseManagement.description'),
      icon: <Warehouse size={48} strokeWidth={1.5} />,
      subServices: t('services.warehouseManagement.subServices') as string[]
    },
    {
      title: t('services.airFreight.title'),
      description: t('services.airFreight.description'),
      icon: <Plane size={48} strokeWidth={1.5} />,
      subServices: t('services.airFreight.subServices') as string[]
    }
  ];

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="service-desc">{service.description}</p>
              
              <div className="service-divider"></div>
              
              <ul className="sub-services-list">
                {service.subServices.map((sub, idx) => (
                  <li key={idx} className="sub-service-item">
                    <span className="bullet">•</span> {sub}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services {
          background-color: var(--color-background-alt);
          padding: 6rem 0;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .service-card {
          background: var(--color-white);
          padding: 2rem;
          border-radius: 16px;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: rgba(14, 165, 233, 0.3);
        }

        .service-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          gap: 1rem;
        }

        .service-icon {
          color: var(--color-secondary);
          background: rgba(14, 165, 233, 0.1);
          padding: 0.75rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
          background: rgba(14, 165, 233, 0.2);
        }

        .service-title {
          font-size: 1.25rem;
          color: var(--color-primary);
          font-weight: 700;
          margin: 0;
        }

        .service-desc {
          color: var(--color-text-light);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 0;
        }

        .service-divider {
          height: 1px;
          background: linear-gradient(to right, rgba(0,0,0,0.05), rgba(0,0,0,0.1), rgba(0,0,0,0.05));
          margin-bottom: 1.5rem;
          width: 100%;
        }

        .sub-services-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-grow: 1;
        }

        .sub-service-item {
          font-size: 0.9rem;
          color: var(--color-text);
          display: flex;
          align-items: flex-start;
          line-height: 1.4;
        }

        .bullet {
          color: var(--color-secondary);
          margin-right: 0.5rem;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}
