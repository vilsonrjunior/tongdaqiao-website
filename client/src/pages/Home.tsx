import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
 
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary">
        <div className="container flex items-center justify-between" style={{ paddingTop: '0.25rem', paddingBottom: '0.25rem' }}>
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/manus-storage/tongda_qiao_logo_full_7e664801.png"
              alt="Tongda Qiao Logo"
              className="h-40 w-auto"
            />
          </div>
 
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#home"
              className="text-white hover:text-accent transition-colors text-xs font-semibold tracking-wide border-b-2 border-accent pb-1"
            >
              HOME
            </a>
            <a
              href="#about"
              className="text-white hover:text-accent transition-colors text-xs font-semibold tracking-wide pb-1 border-b-2 border-transparent hover:border-accent"
            >
              ABOUT US
            </a>
            <a
              href="#expertise"
              className="text-white hover:text-accent transition-colors text-xs font-semibold tracking-wide pb-1 border-b-2 border-transparent hover:border-accent"
            >
              OUR EXPERTISE
            </a>
            <a
              href="#reach"
              className="text-white hover:text-accent transition-colors text-xs font-semibold tracking-wide pb-1 border-b-2 border-transparent hover:border-accent"
            >
              GLOBAL REACH
            </a>
            <a
              href="#contact"
              className="text-white hover:text-accent transition-colors text-xs font-semibold tracking-wide pb-1 border-b-2 border-transparent hover:border-accent"
            >
              CONTACT
            </a>
          </nav>
        </div>
      </header>
 
      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full h-screen bg-cover bg-center pt-20"
        style={{
          backgroundImage: `url('/manus-storage/hero-ship-port-new_22738109.png')`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay" />
        <div className="relative z-10 container h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 style={{ fontFamily: '"Cormorant Garamond", serif' }} className="text-white mb-8 leading-tight text-5xl md:text-7xl font-light">
              Building Trusted Connections Across Global Markets.
            </h1>
            <p className="text-white/90 mb-8 text-lg max-w-xl">
              Tongda Qiao Group Ltd is an international business group connecting opportunities,
              people and markets through trusted partnerships and commercial expertise.
            </p>
            <button className="btn-outline-gold">LEARN MORE →</button>
          </div>
        </div>
      </section>
 
      {/* Who We Are Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="mb-6">
                <span
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  className="text-sm md:text-base font-semibold tracking-widest text-accent uppercase"
                >
                  WHO WE ARE
                </span>
                <span className="inline-block w-8 h-px bg-accent ml-3" />
              </div>
              <h2 style={{ fontFamily: '"Cormorant Garamond", serif' }} className="mb-8 text-foreground text-4xl md:text-5xl leading-tight font-light">
                An International Business Group Built on Trust and Expertise.
              </h2>
              <p className="text-foreground/80 mb-6">
                We connect manufacturers, suppliers and buyers across global markets. Through strategic
                sourcing, supplier development and commercial expertise, we help businesses build reliable
                international supply chains and long-term partnerships.
              </p>
            </div>
 
            {/* Image */}
            <div className="image-overlay h-96 md:h-full">
              <img
                src="/manus-storage/office-skyline_4cef1626.png"
                alt="Modern office with city skyline"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
 
      {/* Our Expertise Section */}
      <section id="expertise" className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div>
                <span
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  className="text-sm md:text-base font-semibold tracking-widest text-accent uppercase"
                >
                  OUR EXPERTISE
                </span>
                <span className="inline-block w-8 h-px bg-accent ml-3" />
              </div>
            </div>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Strategic Sourcing */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif' }} className="mb-4 text-foreground text-2xl font-light">Strategic Sourcing</h3>
              <p className="text-foreground/70">
                Identifying and developing reliable manufacturing partners to create sustainable value.
              </p>
            </div>
 
            {/* Commercial Advisory */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3.623a.856.856 0 01-.856-.856V5.234c0-.461.38-.856.856-.856h12.754a.856.856 0 01.856.856v15.91M11 7h.01M7 11h.01M15.86 15.87l-2.54-2.54a1.5 1.5 0 10-2.12 2.12l2.54 2.54"
                    />
                  </svg>
                </div>
              </div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif' }} className="mb-4 text-foreground text-2xl font-light">Commercial Advisory</h3>
              <p className="text-foreground/70">
                Supporting international procurement, supplier engagement and commercial negotiations.
              </p>
            </div>
 
            {/* Global Supply Solutions */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0110.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20H19a2 2 0 002-2v-5a2 2 0 00-2-2h-2.5a2 2 0 00-1 3.75M15 20v-5m0 0h4"
                    />
                  </svg>
                </div>
              </div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif' }} className="mb-4 text-foreground text-2xl font-light">Global Supply Solutions</h3>
              <p className="text-foreground/70">
                Delivering efficient and tailored cross-border solutions that drive business growth.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      {/* Global Reach Section */}
      <section id="reach" className="py-20 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Map Image */}
            <div className="image-overlay h-96 md:h-full order-2 md:order-1">
              <img
                src="/manus-storage/world-map-connections_b3973fe5.png"
                alt="Global network connections"
                className="w-full h-full object-cover"
              />
            </div>
 
            {/* Text Content */}
            <div className="order-1 md:order-2">
              <div className="mb-6">
                <span
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  className="text-sm md:text-base font-semibold tracking-widest text-accent uppercase"
                >
                  GLOBAL REACH
                </span>
                <span className="inline-block w-8 h-px bg-accent ml-3" />
              </div>
              <h2 style={{ fontFamily: '"Cormorant Garamond", serif' }} className="mb-8 text-white text-4xl md:text-5xl leading-tight font-light">Connecting Businesses Across the World.</h2>
              <p className="text-white/90">
                Through an extensive international network of partners and suppliers, we bridge markets
                and create opportunities wherever our clients do business.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      {/* Why Tongda Qiao Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div>
                <span
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  className="text-sm md:text-base font-semibold tracking-widest text-accent uppercase"
                >
                  WHY TONGDA QIAO
                </span>
                <span className="inline-block w-8 h-px bg-accent ml-3" />
              </div>
            </div>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Trusted Partnerships */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>
              </div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif' }} className="mb-4 text-foreground text-2xl font-light">Trusted Partnerships</h3>
              <p className="text-foreground/70">
                Long-term relationships built on trust, transparency and results.
              </p>
            </div>
 
            {/* Commercial Integrity */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif' }} className="mb-4 text-foreground text-2xl font-light">Commercial Integrity</h3>
              <p className="text-foreground/70">
                We operate with honesty, responsibility and professionalism.
              </p>
            </div>
 
            {/* International Perspective */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0110.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20H19a2 2 0 002-2v-5a2 2 0 00-2-2h-2.5a2 2 0 00-1 3.75M15 20v-5m0 0h4"
                    />
                  </svg>
                </div>
              </div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif' }} className="mb-4 text-foreground text-2xl font-light">International Perspective</h3>
              <p className="text-foreground/70">
                A global mindset with local insight across multiple industries.
              </p>
            </div>
 
            {/* Long-term Value */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif' }} className="mb-4 text-foreground text-2xl font-light">Long-term Value</h3>
              <p className="text-foreground/70">
                Creating sustainable value through strategic thinking and execution.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      {/* Footer */}
      <footer id="contact" className="bg-primary text-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <img
                  src="/manus-storage/tongda_qiao_logo_full_7e664801.png"
                  alt="Tongda Qiao Logo"
                  className="h-40 w-auto"
                />
              </div>
              <p className="text-white/70 text-sm">
                Building Trusted Connections Across Global Markets
              </p>
            </div>
 
            {/* Contact */}
            <div>
              <h4 style={{ fontFamily: '"Playfair Display", serif' }} className="font-bold mb-4 text-accent">
                CONTACT
              </h4>
              <div className="space-y-3">
                <a
                  href="mailto:info@tongdaqiao.com"
                  className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  info@tongdaqiao.com
                </a>
                <a
                  href="tel:+447546886524"
                  className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +44 7546 886524
                </a>
                <div className="flex items-start gap-2 text-white/80 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>8 Eastgate Close</p>
                    <p>SE28 8PJ</p>
                    <p>United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>
 
            {/* Follow */}
            <div>
              <h4 style={{ fontFamily: '"Playfair Display", serif' }} className="font-bold mb-4 text-accent">
                FOLLOW
              </h4>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
 
            {/* Company Links */}
            <div>
              <h4 style={{ fontFamily: '"Playfair Display", serif' }} className="font-bold mb-4 text-accent">
                COMPANY
              </h4>
              <div className="space-y-2">
                <a
                  href="#about"
                  className="block text-white/80 hover:text-accent transition-colors text-sm"
                >
                  About Us
                </a>
                <a
                  href="#expertise"
                  className="block text-white/80 hover:text-accent transition-colors text-sm"
                >
                  Our Expertise
                </a>
                <a
                  href="#reach"
                  className="block text-white/80 hover:text-accent transition-colors text-sm"
                >
                  Global Reach
                </a>
                <a
                  href="#contact"
                  className="block text-white/80 hover:text-accent transition-colors text-sm"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
 
          {/* Footer Bottom */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>&copy; 2025 Tongda Qiao Group Ltd. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
