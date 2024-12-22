import Linkk from './linkk';

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
          <Linkk href={'https://codepen.io/beumsk/pen/' + pen}>See the Pen</Linkk>
          by
          <Linkk href="https://codepen.io/beumsk">Rémy Beumier</Linkk>
        </iframe>
      </div>
    </>
  );
}
