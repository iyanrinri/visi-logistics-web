import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link href="/">
            <div className="logo-wrapper">
              <Image 
                src="/logo.png" 
                alt="Visi Logistics Logo" 
                width={200} 
                height={60} 
                priority
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Link>
        </div>
        
        <nav className="nav">
          <ul className="nav-list">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/about" className="nav-link">About Us</Link></li>
            <li><Link href="/services" className="nav-link">Services</Link></li>
            <li><Link href="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
        </div>
      </div>

      <style jsx>{`
        .header {
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: 100;
          padding: 0.75rem 0;
          transition: all var(--transition-fast);
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-wrapper {
          position: relative;
          height: 50px;
          width: 200px;
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          gap: 2.5rem;
        }

        .nav-link {
          font-weight: 600;
          color: var(--color-text);
          font-size: 0.95rem;
          position: relative;
        }

        .nav-link:hover {
          color: var(--color-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--color-secondary);
          transition: width var(--transition-fast);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .nav, .header-actions {
            display: none;
          }
          
          .logo-wrapper {
            width: 160px;
            height: 40px;
          }
        }
      `}</style>
    </header>
  );
}
