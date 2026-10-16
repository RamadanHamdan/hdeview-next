'use client';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/628194010189?text=Halo%20Admin%20HDe%20Technology,%20saya%20ingin%20konsultasi%20mengenai%20produk%20dan%20solusi%20visual..."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Chat via WhatsApp HDe Technology"
    >
      <div className="whatsapp-pulse"></div>
      <div className="whatsapp-content">
        <span className="whatsapp-text">Admin HDe</span>
        <div className="whatsapp-icon">
          <i className="fab fa-whatsapp"></i>
        </div>
      </div>
    </a>
  );
}
