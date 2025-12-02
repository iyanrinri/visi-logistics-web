"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Package, MapPin, Calendar, Truck } from 'lucide-react';

// Dummy data generators
const LOCATIONS = ['Jakarta', 'Surabaya', 'Bandung', 'Semarang', 'Medan', 'Makassar', 'Denpasar', 'Balikpapan'];
const SERVICES = ['Express Service', 'Regular Service', 'Economy Service', 'Same Day Delivery'];
const STATUSES = ['Delivered', 'Out for Delivery', 'In Transit', 'Processing'];

interface TimelineEvent {
  date: string;
  time: string;
  status: string;
  location: string;
  description: string;
}

interface ShipmentData {
  id: string;
  status: string;
  origin: string;
  destination: string;
  service: string;
  weight: string;
  estimatedDelivery: string;
  timeline: TimelineEvent[];
}

const generateDummyData = (trackingId: string): ShipmentData => {
  const origin = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
  let destination = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
  while (destination === origin) {
    destination = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
  }

  const status = STATUSES[Math.floor(Math.random() * STATUSES.length)];
  const service = SERVICES[Math.floor(Math.random() * SERVICES.length)];
  const weight = `${(Math.random() * 20 + 1).toFixed(1)} kg`;

  const now = new Date();
  const timeline: TimelineEvent[] = [];

  // Generate timeline based on status
  if (status === 'Delivered') {
    timeline.push({
      date: now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      time: now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
      status: 'Package Delivered',
      location: destination,
      description: 'Your package has been successfully delivered'
    });
  }

  if (['Delivered', 'Out for Delivery'].includes(status)) {
    const d1 = new Date(now);
    d1.setHours(d1.getHours() - 3);
    timeline.push({
      date: d1.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      time: d1.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
      status: 'Out for Delivery',
      location: destination,
      description: 'Package is on the way to your address'
    });
  }

  const d2 = new Date(now);
  d2.setDate(d2.getDate() - 1);
  timeline.push({
    date: d2.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    time: '18:45',
    status: 'In Transit',
    location: 'Jakarta Hub',
    description: 'Package departed from sorting facility'
  });

  const d3 = new Date(now);
  d3.setDate(d3.getDate() - 2);
  timeline.push({
    date: d3.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    time: '09:30',
    status: 'Package Picked Up',
    location: origin,
    description: 'Package has been picked up from sender'
  });

  const estimatedDelivery = new Date(now);
  estimatedDelivery.setDate(estimatedDelivery.getDate() + (status === 'Delivered' ? 0 : Math.floor(Math.random() * 3) + 1));

  return {
    id: trackingId,
    status,
    origin,
    destination,
    service,
    weight,
    estimatedDelivery: estimatedDelivery.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    timeline
  };
};

export default function TrackPage() {
  const searchParams = useSearchParams();
  const trackingId = searchParams.get('id') || '';
  const [shipmentData, setShipmentData] = useState<ShipmentData | null>(null);
  const [loading, setLoading] = useState(true);

  // Generate dummy data only on client after mount to avoid hydration mismatch
  useEffect(() => {
    const timer = setTimeout(() => {
      if (trackingId) {
        setShipmentData(generateDummyData(trackingId));
      }
      setLoading(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [trackingId]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'status-delivered';
      case 'Out for Delivery': return 'status-out-delivery';
      case 'In Transit': return 'status-transit';
      default: return 'status-processing';
    }
  };

  return (
    <main>
      <Header />
      
      <section className="track-page">
        <div className="container">
          {loading ? (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Tracking your shipment...</p>
            </div>
          ) : shipmentData ? (
            <div className="track-content">
              {/* Header Card */}
              <div className="track-header-card">
                <div className="header-top">
                  <div className="tracking-id-section">
                    <span className="label">Tracking ID</span>
                    <h1 className="tracking-id">{shipmentData.id}</h1>
                  </div>
                  <div className={`status-badge ${getStatusColor(shipmentData.status)}`}>
                    {shipmentData.status}
                  </div>
                </div>

                <div className="shipment-route">
                  <div className="route-point">
                    <MapPin size={20} />
                    <div>
                      <span className="route-label">Origin</span>
                      <p className="route-value">{shipmentData.origin}</p>
                    </div>
                  </div>
                  <div className="route-line" />
                  <div className="route-point">
                    <MapPin size={20} />
                    <div>
                      <span className="route-label">Destination</span>
                      <p className="route-value">{shipmentData.destination}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="details-grid">
                <div className="detail-card">
                  <div className="detail-icon"><Truck size={24} /></div>
                  <div>
                    <span className="detail-label">Service Type</span>
                    <p className="detail-value">{shipmentData.service}</p>
                  </div>
                </div>
                <div className="detail-card">
                  <div className="detail-icon"><Package size={24} /></div>
                  <div>
                    <span className="detail-label">Weight</span>
                    <p className="detail-value">{shipmentData.weight}</p>
                  </div>
                </div>
                <div className="detail-card">
                  <div className="detail-icon"><Calendar size={24} /></div>
                  <div>
                    <span className="detail-label">Est. Delivery</span>
                    <p className="detail-value">{shipmentData.estimatedDelivery}</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="timeline-card">
                <h2 className="timeline-title">Shipment Timeline</h2>
                <div className="timeline">
                  {shipmentData.timeline.map((event, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-marker">
                        <div className="timeline-dot" />
                        {index !== shipmentData.timeline.length - 1 && (
                          <div className="timeline-connector" />
                        )}
                      </div>
                      <div className="timeline-content">
                        <div className="timeline-header">
                          <h3 className="timeline-status">{event.status}</h3>
                          <span className="timeline-time">{event.date} • {event.time}</span>
                        </div>
                        <p className="timeline-location">{event.location}</p>
                        <p className="timeline-description">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-state">
              <Package size={64} />
              <h2>No tracking information found</h2>
              <p>Please check your tracking ID and try again</p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .track-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 8rem 0 4rem;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .loading-state {
          text-align: center;
          padding: 4rem 0;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid rgba(0, 59, 115, 0.1);
          border-top-color: var(--color-primary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .track-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .track-header-card {
          background: white;
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #f1f5f9;
        }

        .label {
          display: block;
          font-size: 0.875rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .tracking-id {
          font-size: 2rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .status-badge {
          padding: 0.5rem 1.25rem;
          border-radius: 2rem;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .status-delivered {
          background: #dcfce7;
          color: #166534;
        }

        .status-out-delivery {
          background: #dbeafe;
          color: #1e40af;
        }

        .status-transit {
          background: #ffedd5;
          color: #9a3412;
        }

        .status-processing {
          background: #f3f4f6;
          color: #374151;
        }

        .shipment-route {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .route-point {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
        }

        .route-point :global(svg) {
          color: var(--color-primary);
        }

        .route-label {
          display: block;
          font-size: 0.875rem;
          color: #64748b;
          margin-bottom: 0.25rem;
        }

        .route-value {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0;
        }

        .route-line {
          flex: 0 0 60px;
          height: 2px;
          background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
          position: relative;
        }

        .route-line::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid var(--color-secondary);
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .detail-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }

        .detail-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .detail-label {
          display: block;
          font-size: 0.875rem;
          color: #64748b;
          margin-bottom: 0.25rem;
        }

        .detail-value {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0;
        }

        .timeline-card {
          background: white;
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .timeline-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 2rem;
        }

        .timeline {
          display: flex;
          flex-direction: column;
        }

        .timeline-item {
          display: flex;
          gap: 1.5rem;
          padding-bottom: 2rem;
        }

        .timeline-item:last-child {
          padding-bottom: 0;
        }

        .timeline-marker {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .timeline-dot {
          width: 16px;
          height: 16px;
          background: var(--color-primary);
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 3px var(--color-primary);
          z-index: 1;
        }

        .timeline-connector {
          width: 2px;
          flex: 1;
          background: #e2e8f0;
          margin-top: 0.5rem;
        }

        .timeline-content {
          flex: 1;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.5rem;
        }

        .timeline-status {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0f172a;
          margin: 0;
        }

        .timeline-time {
          font-size: 0.875rem;
          color: #64748b;
        }

        .timeline-location {
          font-size: 0.875rem;
          color: var(--color-primary);
          font-weight: 500;
          margin: 0 0 0.5rem 0;
        }

        .timeline-description {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
        }

        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          background: white;
          border-radius: 1.5rem;
        }

        .empty-state :global(svg) {
          color: #cbd5e1;
          margin-bottom: 1rem;
        }

        .empty-state h2 {
          font-size: 1.5rem;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }

        .empty-state p {
          color: #64748b;
        }

        @media (max-width: 768px) {
          .track-page {
            padding: 6rem 0 2rem;
          }

          .tracking-id {
            font-size: 1.5rem;
          }

          .header-top {
            flex-direction: column;
            gap: 1rem;
          }

          .shipment-route {
            flex-direction: column;
            align-items: flex-start;
          }

          .route-line {
            width: 2px;
            height: 40px;
            margin-left: 10px;
          }

          .route-line::after {
            right: 50%;
            bottom: -6px;
            top: auto;
            transform: translateX(50%) rotate(90deg);
          }

          .details-grid {
            grid-template-columns: 1fr;
          }

          .timeline-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }
        }
      `}</style>
    </main>
  );
}
