type CodepenProps = {
  className?: string;
  pen: string;
  title: string;
};

export default function Codepen({ className, pen, title }: CodepenProps) {
  return (
    <>
      <div className={'code-iframe-wrapper ' + (className || '')}>
        <iframe
          height="300"
          scrolling="no"
          title={title}
          loading="lazy"
          src={'https://codepen.io/beumsk/embed/' + pen + '?default-tab=result'}
        >
          <a href={'https://codepen.io/beumsk/pen/' + pen} target="_blank" rel="noopener noreferrer">
            See the Pen
          </a>
          by
          <a href="https://codepen.io/beumsk" target="_blank" rel="noopener noreferrer">
            Rémy Beumier
          </a>
        </iframe>
      </div>
    </>
  );
}
