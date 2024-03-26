import Link from 'next/link';
import { FaCodepen, FaGithub } from 'react-icons/fa';
import { MdPublic, MdSettingsBackupRestore } from 'react-icons/md';
import { SiCodesandbox } from 'react-icons/si';
import { PostType, ProjectType } from '@types';

type Item = Partial<ProjectType> & Partial<PostType>;
type GridItemProps = {
  item: Item;
};

type GridProps = {
  data: Item[];
  className: string;
};

function GridItem({ item }: GridItemProps) {
  return (
    <div className="card">
      <div className="card__behind">
        <Link href={item.link || ''}>
          <a className="card__title" title={item.title}>
            <h2 className="t-ellipsis">{item.title}</h2>
          </a>
        </Link>
        {item.type === 'perso' ? (
          <div className="card__links">
            {item.pen ? (
              <a
                href={'https://codepen.io/beumsk/pen/' + item.pen}
                target="_blank"
                rel="noopener noreferrer"
                title="Codepen link"
              >
                <FaCodepen title="Codepen" aria-labelledby="Codepen" />
              </a>
            ) : null}
            {item.sandbox ? (
              <a
                href={'https://codesandbox.io/s/' + item.sandbox}
                target="_blank"
                rel="noopener noreferrer"
                title="Codesandbox link"
              >
                <SiCodesandbox title="Codesandbox" aria-labelledby="Codesandbox" />
              </a>
            ) : null}
            <a
              href={'https://github.com/beumsk/' + item.title}
              target="_blank"
              rel="noopener noreferrer"
              title="Github repository"
            >
              <FaGithub title="Github" aria-labelledby="Github" />
            </a>
          </div>
        ) : null}
        {item.type === 'pro' ? (
          <div className="card__links">
            {item.current ? (
              <a href={item.current} target="_blank" rel="noopener noreferrer" title="Live website">
                <MdPublic title="Live website" aria-labelledby="Live website" />
              </a>
            ) : null}
            {item.past ? (
              <a href={item.past} target="_blank" rel="noopener noreferrer" title="Site as I left it">
                <MdSettingsBackupRestore title="Site as I left it" aria-labelledby="Site as I left it" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
      <Link href={item.link || ''}>
        <a title={item.title} tabIndex={-1}>
          <div className="card__img">
            <img src={item.img} alt={item.title} width="260" height="146" loading="lazy" />
          </div>
        </a>
      </Link>
    </div>
  );
}

export default function Grid({ data, className }: GridProps) {
  return (
    <div className={'grid ' + (className || '')}>
      {data.map((item) => {
        return <GridItem key={item.title} item={item} />;
      })}
    </div>
  );
}
