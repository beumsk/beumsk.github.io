import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contact" className="over-h svg-divider">
      <div className="container" data-aos="fade-left">
        <p className="mb-5">Feel free to get in touch and stay connected with me via these different channels.</p>
        <div className="mb-10">
          <a href="https://codepen.io/beumsk/" target="_blank" rel="noopener noreferrer" className="btn mb-4 mr-4">
            <FaCodepen />
            <span className="ml-1">Codepen</span>
          </a>
          <a href="https://github.com/beumsk" target="_blank" rel="noopener noreferrer" className="btn mb-4 mr-4">
            <FaGithub />
            <span className="ml-1">Github</span>
          </a>
          <a href="https://www.linkedin.com/in/remybeumier/" target="_blank" rel="noopener noreferrer" className="btn">
            <FaLinkedin />
            <span className="ml-1">LinkedIn</span>
          </a>
        </div>
        <p className="copy">&copy; {new Date().getFullYear()} | Rémy Beumier</p>
      </div>
    </footer>
  );
}
