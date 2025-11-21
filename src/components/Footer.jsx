import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Piyush</h3>
            <p>
              Full Stack Developer crafting reliable, modern, and efficient web
              experiences.
            </p>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/piyushs11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/piyush-sonawane-14424719b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Piyush Sonawane. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
