import { FaCodepen, FaGithub } from 'react-icons/fa';
import { MdPublic, MdSettingsBackupRestore } from 'react-icons/md';
import { SiCodesandbox } from 'react-icons/si';
import { PostType, ProjectType } from '@types';
import Linkk from './linkk';

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
        <Linkk href={item.link || ''} className="card__title" title={item.title}>
          <h2 className="t-ellipsis">{item.title}</h2>
        </Linkk>
        {item.type === 'perso' ? (
          <div className="card__links">
            {item.pen ? (
              <Linkk href={'https://codepen.io/beumsk/pen/' + item.pen} title="Codepen link">
                <FaCodepen title="Codepen" aria-labelledby="Codepen" />
              </Linkk>
            ) : null}
            {item.sandbox ? (
              <Linkk href={'https://codesandbox.io/s/' + item.sandbox} title="Codesandbox link">
                <SiCodesandbox title="Codesandbox" aria-labelledby="Codesandbox" />
              </Linkk>
            ) : null}
            <Linkk href={'https://github.com/beumsk/' + item.title.replace(/ /g, '-')} title="Github repository">
              <FaGithub title="Github" aria-labelledby="Github" />
            </Linkk>
          </div>
        ) : null}
        {item.type === 'pro' ? (
          <div className="card__links">
            {item.current ? (
              <Linkk href={item.current} title="Live website">
                <MdPublic title="Live website" aria-labelledby="Live website" />
              </Linkk>
            ) : null}
            {item.past ? (
              <Linkk href={item.past} title="Site as I left it">
                <MdSettingsBackupRestore title="Site as I left it" aria-labelledby="Site as I left it" />
              </Linkk>
            ) : null}
          </div>
        ) : null}
      </div>
      <Linkk href={item.link || ''} title={item.title} tabIndex={-1}>
        <div className="card__img">
          <img src={item.img} alt={item.title} width="260" height="146" loading="lazy" />
        </div>
      </Linkk>
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
