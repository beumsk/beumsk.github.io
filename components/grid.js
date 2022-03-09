import Link from 'next/link';
import PropTypes from 'prop-types';
import { FaCodepen, FaGithub } from 'react-icons/fa';
import { MdPublic, MdSettingsBackupRestore } from 'react-icons/md';
import { SiCodesandbox } from 'react-icons/si';

function GridItem({ item }) {
  const title = item.title.replace(/-/g, ' ').charAt(0).toUpperCase() + item.title.replace(/-/g, ' ').slice(1);
  return (
    <div className="card">
      <div className="card__behind">
        <Link href={item.link || ''}>
          <a className="card__title" title={title}>
            <h2 className="t-ellipsis">{title}</h2>
          </a>
        </Link>
        {item.type === 'perso' && (
          <div className="card__links">
            {item.pen && (
              <a
                href={'https://codepen.io/beumsk/pen/' + item.pen}
                target="_blank"
                rel="noopener noreferrer"
                title="Codepen link"
              >
                <FaCodepen />
              </a>
            )}
            {item.sandbox && (
              <a
                href={'https://codesandbox.io/s/' + item.sandbox}
                target="_blank"
                rel="noopener noreferrer"
                title="Codesandbox link"
              >
                <SiCodesandbox />
              </a>
            )}
            <a
              href={'https://github.com/beumsk/' + item.title}
              target="_blank"
              rel="noopener noreferrer"
              title="Github repository"
            >
              <FaGithub />
            </a>
          </div>
        )}
        {item.type === 'pro' && (
          <div className="card__links">
            {item.current && (
              <a href={item.current} target="_blank" rel="noopener noreferrer" title="Live website">
                <MdPublic />
              </a>
            )}
            {item.past && (
              <a href={item.past} target="_blank" rel="noopener noreferrer" title="Site as I left it">
                <MdSettingsBackupRestore />
              </a>
            )}
          </div>
        )}
      </div>
      <Link href={item.link || ''}>
        <a title="Learn more" tabIndex="-1">
          <div className="card__img">
            <img src={item.img} alt={item.title.replace(/-/g, ' ')} width="260" height="146" loading="lazy" />
          </div>
        </a>
      </Link>
    </div>
  );
}

GridItem.propTypes = {
  item: PropTypes.object,
};

export default function Grid({ data, className }) {
  return (
    <div className={'grid ' + className}>
      {data.map((item) => {
        return <GridItem key={item.title} item={item} />;
      })}
    </div>
  );
}

Grid.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};
