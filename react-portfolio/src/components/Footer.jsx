// Imports for footer icons: GitHub and Email
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Function to view GitHub and Email links as icons at the footer of each page
function Footer() {
    return (
      <footer className="footer has-background-dark">
        <div className="content has-text-centered">
          <a href="mailto:beth.murillo318@gmail.com" className="icon">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a href="https://github.com/beth-em" target="_blank" rel="noopener noreferrer" className="icon">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </footer>
    );
  }
  
  // Export footer.jsx
  export default Footer;
  