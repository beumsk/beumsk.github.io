import PropTypes from 'prop-types';

export default function Codepen({ className, pen }) {
  return (
    <>
      <div className={'cp_embed_wrapper ' + className}>
        <iframe
          height="300"
          scrolling="no"
          title="Memory"
          loading="lazy"
          src={'https://codepen.io/beumsk/embed/' + pen + '?default-tab=result'}
        >
          <a href={'https://codepen.io/beumsk/pen/' + pen} target="_blank" rel="noopener noreferrer">
            See the Pen
          </a>{' '}
          by{' '}
          <a href="https://codepen.io/beumsk" target="_blank" rel="noopener noreferrer">
            Rémy Beumier
          </a>
          .
        </iframe>
      </div>
    </>
  );
}

Codepen.propTypes = {
  className: PropTypes.string,
  pen: PropTypes.string,
};
