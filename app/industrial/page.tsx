import Link from 'next/link';

export default function Home() {
  const productImages = [
    '/bookimgs/circe.jpg',
    '/bookimgs/thelordoftheRings.jpg',
    '/bookimgs/aworldalonebook.jpg',
    '/bookimgs/lovestorybook.jpg',
    '/bookimgs/thebookofdoorsbook.jpg',
    '/bookimgs/funnystorybook.jpg',
    '/bookimgs/thehauntedcar.jpg',
    '/bookimgs/goosebumpsHorrorland.jpg',
    '/bookimgs/goosebumpsMummy.jpg',
    '/bookimgs/goosebumpstalesofHorror.jpg',
    '/bookimgs/sololeveling12.jpg',
    '/bookimgs/sololeveling11.jpg',
    '/bookimgs/mars.jpg',
    '/bookimgs/agameofThrones.jpg',
    '/bookimgs/dune.jpg',
    '/bookimgs/example1.jpg',
    '/bookimgs/example2.jpg',
    '/bookimgs/example3.jpg',
    '/bookimgs/example4.jpg',
    '/bookimgs/example5.jpg',
  ];

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

      {/* Product Grid Section */}
      {/* <div style={{ padding: '3rem 2rem', backgroundColor: '#000', color: '#fff' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Products</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
          }}
        >
          {productImages.map((src, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <img
                src={src}
                alt={`Product ${index + 1}`}
                style={{
                  width: '100%',
                  maxWidth: '200px',
                  borderRadius: '8px',
                  margin: '0 auto',
                }}
              />
              <p style={{ marginTop: '0.5rem' }}>Product {index + 1}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
