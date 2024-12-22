import { FaAlignJustify, FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodesandbox } from 'react-icons/si';
import Linkk from './linkk';

const footerLinks = [
  {
    link: 'https://github.com/beumsk',
    text: 'Github',
    icon: FaGithub,
  },
  {
    link: 'https://codepen.io/beumsk/',
    text: 'Codepen',
    icon: FaCodepen,
  },
  {
    link: 'https://codesandbox.io/u/beumsk',
    text: 'Codesandbox',
    icon: SiCodesandbox,
  },
  {
    link: 'https://www.linkedin.com/in/remybeumier/',
    text: 'LinkedIn',
    icon: FaLinkedin,
  },
  {
    link: '/resume-remy-beumier',
    text: 'Resume',
    icon: FaAlignJustify,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="contact over-h svg-divider">
      <div className="container" data-aos="fade-left">
        <p className="mb-5">Feel free to get in touch and stay connected with me via these different channels.</p>
        <div className="mb-10">
          {footerLinks.map((f) => {
            const Icon = f.icon;
            return (
              <Linkk
                key={f.link}
                href={f.link}
                target={f.link.startsWith('http') || f.text === 'Resume' ? '_blank' : '_self'}
                className="btn mb-4 mr-4"
              >
                <Icon title={f.text} aria-labelledby={f.text} />
                <span className="ml-1">{f.text}</span>
              </Linkk>
            );
          })}
        </div>
        <p className="contact__copy">
          &copy; {new Date().getFullYear()} |{' '}
          <span itemProp="author" itemScope itemType="http://schema.org/Person">
            <span itemProp="name">Rémy Beumier</span>
          </span>
        </p>
      </div>
    </footer>
  );
}
