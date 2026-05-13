import React, { useState } from 'react';

// ইমেজ ইম্পোর্ট (নিশ্চিত করুন এই ফাইলগুলো আপনার assets ফোল্ডারে আছে)
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import logo from './assets/logo.png';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  const navItems = [
    { name: 'HOME', link: '#' },
    { name: 'ABOUT US', link: '#' },
    { 
      name: 'SISTER CONCERN ↓', 
      link: '#',
      isDropdown: true, 
      subItems: [
        { name: 'Six Season Agro Traders', link: '#' },
        { name: 'Six Season Global Business LTD', link: '#' },
        { name: 'Marss Outwear Creation', link: '#' },
        { name: 'Six Season USA LLC', link: '#' },
        { name: 'Delivery 24', link: '#' },
        { name: 'AMRISS', link: '#' },
      ]
    },
    { name: 'MANAGEMENT', link: '#' },
    { name: 'BLOG', link: '#' },
    { name: 'CAREER', link: '#' },
  ];

  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '10px 40px', backgroundColor: '#E5FEFF', position: 'sticky', top: 0, zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    }}>
      {/* লোগো সেকশন */}
      <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center' }}>
        <img 
          src={logo} 
          alt="SSG Logo" 
          style={{ height: '45px', width: 'auto', cursor: 'pointer' }} 
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: '1 1 auto', justifyContent: 'center' }}>
        {navItems.map((item) => (
          <div 
            key={item.name}
            style={{ position: 'relative' }} 
            onMouseEnter={() => item.isDropdown && setDropdownOpen(true)}
            onMouseLeave={() => item.isDropdown && setDropdownOpen(false)}
          >
            <a href={item.link} style={{
                color: '#333', textDecoration: 'none', fontSize: '12px', fontWeight: '700',
                whiteSpace: 'nowrap', letterSpacing: '0.3px', transition: 'color 0.3s ease',
                display: 'block', padding: '10px 5px'
              }}
              onMouseOver={(e) => (e.target.style.color = '#4290F7')}
              onMouseOut={(e) => (e.target.style.color = '#333')}
            >
              {item.name}
            </a>

            {item.isDropdown && dropdownOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                backgroundColor: 'white', minWidth: '220px', borderRadius: '8px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)', padding: '10px 0',
                border: '1px solid #eee', zIndex: 1001, animation: 'fadeIn 0.3s ease'
              }}>
                {item.subItems.map((sub) => (
                  <a key={sub.name} href={sub.link} style={{
                      display: 'block', padding: '10px 20px', color: '#444', textDecoration: 'none',
                      fontSize: '11px', fontWeight: '600', transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => { e.target.style.backgroundColor = '#f0faff'; e.target.style.color = '#4290F7'; }}
                    onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#444'; }}
                  >
                    {sub.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <button 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: isHovered ? 'black' : '#4290F7', 
          color: 'white', fontWeight: 'bold', borderRadius: '30px', padding: '10px 20px', 
          border: 'none', cursor: 'pointer', fontSize: '12px', transition: 'all 0.3s ease',
        }}
      >
        CONTACT US
      </button>
    </nav>
  );
};

const ImageCard = ({ src, width, height, delay }) => (
  <div style={{
    width: `${width}px`, height: `${height}px`, borderRadius: '15px', overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)', animation: `float 4s ease-in-out infinite ${delay}s`
  }}>
    <img src={src} alt="Project" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>
);

function Hero() {
  const stats = [
    { value: '6', label: 'COMPANIES' },
    { value: '12+', label: 'YEARS' },
    { value: '5', label: 'INDUSTRIES' },
    { value: '30+', label: 'COUNTRIES' }
  ];

  return (
    <div style={{ 
      margin: 0, fontFamily: "'Segoe UI', sans-serif",
      background: 'linear-gradient(to bottom right, #4290F7 30%, #1D2F49 70%)',  
      minHeight: '100vh', width: '100%', color: 'white', overflowX: 'hidden'
    }}>
      <Navbar />
      
      <div style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '60px 5%', maxWidth: '1400px', margin: '0 auto', gap: '30px'
      }}>
        
        {/* Left Side Gallery */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <ImageCard src={img1} width={277} height={114} delay={0} />
            <ImageCard src={img2} width={288} height={265} delay={0.5} />
            <ImageCard src={img3} width={255} height={250} delay={1} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <ImageCard src={img4} width={288} height={265} delay={0.3} />
            <ImageCard src={img5} width={263} height={393} delay={0.8} />
          </div>
        </div>

        {/* Right Side Main Content */}
        <main style={{ textAlign: 'right', flex: 1, position: 'relative', minHeight: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          {/* Watermark Section (সমান) */}
          <div style={{
            position: 'absolute', right: '-10%', top: '20%', transform: 'translateY(-50%)',
            zIndex: 0, pointerEvents: 'none', mixBlendMode: 'overlay', opacity: 0.3
          }}>
            <img src={logo} alt="Watermark" style={{ width: '600px', height: 'auto', filter: 'grayscale(100%)' }} />
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h1 style={{ margin: 0, fontSize: '56px', fontWeight: '800', lineHeight: '1.2' }}>
              Six Season <br /> Group
            </h1>
            <p style={{ marginTop: '20px', color: '#e0e0e0', fontSize: '20px', maxWidth: '500px', marginLeft: 'auto' }}>
              Driven by Innovation, Built on Trust — A multi-industry conglomerate shaping the future of trade, agriculture, fashion & logistics.
            </p>

            {/* বাটন সেকশন */}
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end', marginTop: '30px' }}>
              <button 
                style={{ 
                  padding: '15px 30px', background: 'transparent', color: 'white', borderRadius: '50px', 
                  border: '2px solid white', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => { e.target.style.background = 'white'; e.target.style.color = '#4290F7'; }}
                onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'white'; }}
              >
                EXPLORE OUR COMPANIES {'>'}
              </button>
              <button 
                style={{ 
                  padding: '15px 30px', background: '#4290F7', color: 'white', borderRadius: '50px', 
                  border: 'none', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => (e.target.style.background = '#1D2F49')}
                onMouseOut={(e) => (e.target.style.background = '#4290F7')}
              >
                LEARN MORE
              </button>
            </div>

            {/* ৪টি গ্লোয়িং প্লেসহোল্ডার */}
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end', marginTop: '40px' }}>
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="glow-box"
                  style={{
                    width: '120px', height: '80px', backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(66, 144, 247, 0.5)', borderRadius: '100px',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    alignItems: 'center', textAlign: 'center', backdropFilter: 'blur(5px)',
                  }}
                >
                  <div style={{ fontSize: '22px', fontWeight: '800', color: '#fff' }}>{stat.value}</div>
                  <div style={{ fontSize: '10px', color: '#4290F7', fontWeight: '700', marginTop: '4px', letterSpacing: '1px' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* ফোন সেকশন */}
            <div style={{ marginTop: '35px', display: 'flex', justifyContent: 'flex-end' }}>
              <div 
                style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  const tip = e.currentTarget.querySelector('.phone-tooltip');
                  if(tip) { tip.style.opacity = '1'; tip.style.transform = 'translateX(0)'; }
                }}
                onMouseLeave={(e) => {
                  const tip = e.currentTarget.querySelector('.phone-tooltip');
                  if(tip) { tip.style.opacity = '0'; tip.style.transform = 'translateX(10px)'; }
                }}
              >
                <span className="phone-tooltip" style={{
                  opacity: '0', transform: 'translateX(10px)', transition: 'all 0.4s ease',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '5px 15px', borderRadius: '20px',
                  fontSize: '14px', fontWeight: 'bold', color: '#4290F7', border: '1px solid #4290F7'
                }}>
                  +8801779846022
                </span>
                <div style={{
                  width: '45px', height: '45px', backgroundColor: 'rgba(66, 144, 247, 0.1)',
                  borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center',
                  border: '2px solid #4290F7', boxShadow: '0 0 15px rgba(66, 144, 247, 0.3)'
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4290F7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.88 12.88 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateX(-50%) translateY(10px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
        .glow-box { animation: glowAnimation 3s infinite alternate; }
        @keyframes glowAnimation {
          from { box-shadow: 0 0 5px rgba(66, 144, 247, 0.2); border-color: rgba(66, 144, 247, 0.4); }
          to { box-shadow: 0 0 20px rgba(66, 144, 247, 0.8), 0 0 10px rgba(255, 255, 255, 0.3); border-color: rgba(66, 144, 247, 1); background-color: rgba(66, 144, 247, 0.1); }
        }
      `}</style>
    </div>
  );
}

export default Hero;

