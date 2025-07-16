import Link from 'next/link';

export default function Home() {
  const products = [
    {
      title: 'CNC Machine',
      image: '/industrial/CNCmachine.png',
      discount: '10%',
    },
    {
      title: 'Industrial Machines 1',
      image: '/industrial/IndustrialMachines1.png',
      discount: '12%',
    },
    {
      title: 'Industrial Machines',
      image: '/industrial/Industrialmachines.png',
      discount: '15%',
    },
    {
      title: 'Milling Machine',
      image: '/industrial/milling.png',
      discount: '8%',
    },
    {
      title: 'Table Saw',
      image: '/industrial/tablesaw.png',
      discount: '6%',
    },
    {
      title: 'Welder Positioning',
      image: '/industrial/welderPositioning.png',
      discount: '9%',
    },
    {
      title: 'Chainsaw',
      image: '/industrial/chainsaw.png',
      discount: '7%',
    },
    {
      title: 'Portable Generator',
      image: '/industrial/portableGen.png',
      discount: '11%',
    },
    {
      title: 'Skid Steer',
      image: '/industrial/skidsteer.png',
      discount: '5%',
    },
    {
      title: 'Mini Excavator',
      image: '/industrial/miniex.png',
      discount: '5%',
    },
    {
      title: 'Wheel Loader',
      image: '/industrial/wheelLoader.png',
      discount: '5%',
    },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'url(/industrial/lasermachine.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '88vh',
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
          {/* <Link href="/industrial">
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
          </Link> */}
        </div>
      </div>

      {/* Products with Individual Coupon Sections */}
      {products.map((product, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            padding: '2rem',
            backgroundColor: '#f4f4f4',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            marginBottom: '2rem',
          }}
        >
          {/* Left Side - Image + Description */}
          <div
            style={{
              flexBasis: '75%',
              maxWidth: '75%',
              marginRight: '2%',
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: '100%',
                height: '40vh',
                objectFit: 'contain',
                borderRadius: '8px',
                marginBottom: '0.5rem',
                backgroundColor: '#fff',
              }}
            />
            <div
              style={{
                backgroundColor: '#000',
                color: '#fff',
                padding: '1rem',
                borderRadius: '5px',
              }}
            >
              <h3 style={{ margin: 0 }}>{product.title}</h3>
              <p>Top-tier industrial equipment designed for reliability and performance.</p>
            </div>
          </div>

          {/* Right Side - Individual Coupon */}
          <div
            style={{
              flexBasis: '23%',
              backgroundColor: '#fff3e0',
              padding: '2rem',
              border: '2px dashed #ff6600',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            <h2 style={{ color: '#ff6600', marginBottom: '1rem' }}>
              {product.discount} OFF
            </h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '1rem' }}>
              Limited time offer on {product.title}.
            </p>
            <Link href="/industrial">
              <button
                style={{
                  backgroundColor: '#ff6600',
                  color: '#fff',
                  padding: '0.75rem 1.25rem',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
