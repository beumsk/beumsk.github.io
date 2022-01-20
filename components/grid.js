import Link from 'next/link';
import { FaCodepen, FaGithub } from 'react-icons/fa';
import { MdPublic, MdSettingsBackupRestore } from 'react-icons/md';

export default function Grid(props) {
  const items = props.data.map((item, index) => {
    const title = item.title.replace(/-/g, ' ').charAt(0).toUpperCase() + item.title.replace(/-/g, ' ').slice(1);
    return (
      <div className="card" key={index}>
        <div className="card__behind">
          <Link href={item.link || ''}>
            <a className="card__title" title={title}>
              <h2 className="t-ellipsis">
                {title}
              </h2>
            </a>
          </Link>
          {item.pen && (
            <div className="card__links">
              <a href={"https://github.com/beumsk/" + item.title} target="_blank" rel="noopener noreferrer" title="Codepen link"><FaCodepen /></a>
              <a href={"https://codepen.io/beumsk/pen/" + item.pen} target="_blank" rel="noopener noreferrer" title="Github repository"><FaGithub /></a>
            </div>
          )}
          {(item.current || item.past) && (
            <div className="card__links">
              {item.current && <a href={item.current} target="_blank" rel="noopener noreferrer" title="Live website"><MdPublic /></a>}
              {item.past && <a href={item.past} target="_blank" rel="noopener noreferrer" title="Site as I left it"><MdSettingsBackupRestore /></a>}
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
    )
  });

  return (
    <div className={"grid " + props.className}>
      {items}
    </div>
  )
}