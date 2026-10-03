import { navigationLinks } from "./data";

const phone = "+919495668751";
const directions =
  "https://www.google.com/maps/search/?api=1&query=Capital+Furnitures%2C+Kuniyamuthur%2C+opposite+Nahdi+Mandi+Restaurant%2C+Coimbatore%2C+Tamil+Nadu%2C+India";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="wordmark wordmark--footer">
              Capital Furnitures
            </a>
            <p>Furniture Crafted for the Way You Live.</p>
          </div>
          <div className="footer-nav">
            <span className="footer-label">EXPLORE</span>
            <div>
              {navigationLinks.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-social">
            <span className="footer-label">GET IN TOUCH</span>
            <div>
              <a href={`tel:${phone}`}>+91 9495668751</a>
              <a href={directions} target="_blank" rel="noreferrer">
                Kuniyamuthur, opposite Nahdi Mandi Restaurant, Coimbatore
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Capital Furnitures</p>
          <a href="#home">Back to top ↑</a>
          <p>NAZEER · OWNER</p>
        </div>
      </div>
    </footer>
  );
}
