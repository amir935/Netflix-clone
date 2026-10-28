import "./Footer.css";

function Footer() {
  return (
    <footer className="netflix-footer">
      <p className="footer-contact">
        Questions? Call <a href="tel:18445697700">1-844-569-7700</a>
      </p>

      <div className="footer-links">
        <div className="footer-column">
          <a href="https://help.netflix.com/">FAQ</a>
          <a href="https://www.netflix.com/">Netflix House</a>
          <a href="https://jobs.netflix.com/">Jobs</a>
          <a href="https://www.netflix.com/">Buy Gift Cards</a>
          <a href="https://www.netflix.com/">Privacy</a>
          <a href="https://help.netflix.com/contactus">Contact Us</a>
          <a href="https://www.netflix.com/">Only on Netflix</a>
        </div>

        <div className="footer-column">
          <a href="https://help.netflix.com/">Help Center</a>
          <a href="https://media.netflix.com/">Media Center</a>
          <a href="https://www.netflix.com/">Netflix Shop</a>
          <a href="https://www.netflix.com/">Ways to Watch</a>
          <a href="https://www.netflix.com/">Cookie Preferences</a>
          <a href="https://fast.com/">Speed Test</a>
          <a href="https://www.netflix.com/">
            Do Not Sell or Share My Personal Information
          </a>
        </div>

        <div className="footer-column">
          <a href="https://www.netflix.com/">Account</a>
          <a href="https://ir.netflix.net/">Investor Relations</a>
          <a href="https://www.netflix.com/">Redeem Gift Cards</a>
          <a href="https://www.netflix.com/">Terms of Use</a>
          <a href="https://www.netflix.com/">Corporate Information</a>
          <a href="https://www.netflix.com/">Legal Notices</a>
          <a href="https://www.netflix.com/">Ad Choices</a>
        </div>
      </div>

      <label className="footer-language-label" htmlFor="footer-language">
        Language
      </label>
      <select
        id="footer-language"
        className="footer-language"
        defaultValue="en"
      >
        <option value="en">English</option>
      </select>

      <p className="footer-note">
        This page is protected by Google reCAPTCHA to ensure you’re not a bot.
      </p>
    </footer>
  );
}

export default Footer;
