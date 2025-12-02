"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Learn more about our history, mission, and values.</p>
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
