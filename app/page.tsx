import Link from 'next/link';

export default function Home() {

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'url(/industrial/lasermachine.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '88vh', // shorter height for better fit
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '1.5rem 2.5rem',
            borderRadius: '10px',
          }}
        >
          <h2 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>SMVM</h2>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Innovation and Quality</h1>
           <Link href="/industrial">
            <button
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                backgroundColor: '#ff6600',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Whole Sale
            </button>
          </Link> 
        </div>
      </div>
    </div>
  );
}
