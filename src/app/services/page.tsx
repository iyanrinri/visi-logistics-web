"use client";

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import { useLanguage } from '@/lib/LanguageContext';

export default function ServicesPage() {
  const { t } = useLanguage();
  return (
    <main>
      <Header />
      
      <section className="page-header">
        <div className="header-bg">
          <Image
            src="/about.webp"
            alt="Logistics Services"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="overlay"></div>
        </div>
        <div className="container header-content">
          <h1 className="page-title">{t('services.title')}</h1>
          <p className="page-subtitle">{t('services.subtitle')}</p>
        </div>
      </section>

      <Services />
      <Footer />

      <style jsx>{`
        .page-header {
          position: relative;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .header-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6); /* Dark overlay for readability */
        }

        .header-content {
          position: relative;
          z-index: 1;
        }

        .page-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .page-subtitle {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto;
          opacity: 0.9;
        }
      `}</style>
    </main>
  );
}
