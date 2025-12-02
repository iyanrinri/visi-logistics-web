"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';
import { useLanguage } from '@/lib/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <main>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">{t('about.title')}</h1>
          <p className="page-subtitle">{t('about.subtitle')}</p>
        </div>
      </div>
      <About />
      <Footer />

      <style jsx>{`
        .page-header {
          padding: 6rem 0 2rem;
          background-color: #f8fafc;
          text-align: center;
        }

        .page-title {
          font-size: 3rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1rem;
        }

        .page-subtitle {
          color: #64748b;
          font-size: 1.2rem;
        }
      `}</style>
    </main>
  );
}
