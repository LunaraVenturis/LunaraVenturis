import './footer.css';
export const Footer = (): JSX.Element => {
    return (
        <footer className="footer">
          <div className="footer-content">
            <p>© 2024 Lunara Venturis. All rights reserved.</p>
            <nav>
              <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/privacy">Privacy Policy</a>
            </nav>
          </div>
        </footer>
      );
}