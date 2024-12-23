import { HTMLAttributes, useEffect, useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { MdHeight } from 'react-icons/md';
import useJavaScriptEnabled from '@hooks/useJavaScript';
import { ProjectType } from '@types';

type LinkType = {
  project: ProjectType;
} & HTMLAttributes<HTMLDivElement>;

export default function Screens({ project, ...props }: LinkType) {
  const isJavaScriptEnabled = useJavaScriptEnabled();
  const [index, setIndex] = useState(0);
  const [isFull, setIsFull] = useState(true);

  function handleSwipe(dir: 'left' | 'right') {
    if (dir === 'left') {
      setIndex((prev) => (prev === 0 ? project.screens.length - 1 : prev - 1));
    } else {
      setIndex((prev) => (prev === project.screens.length - 1 ? 0 : prev + 1));
    }
  }

  useEffect(() => {
    setIndex(0);
  }, [project.link]);

  return (
    <>
      {isJavaScriptEnabled ? (
        <div className="space-between-x mb-4">
          {project.screens.length > 1 ? (
            <button title="See previous screenshot" onClick={() => handleSwipe('left')}>
              <AiFillCaretLeft className="mr-1" />
              Previous
            </button>
          ) : null}
          <button onClick={() => setIsFull((c) => !c)}>
            <MdHeight className="mr-1" />
            {isFull ? 'Set screenshot scrollable' : 'Set screenshot full size'}
            <MdHeight className="ml-1" />
          </button>
          {project.screens.length > 1 ? (
            <button title="See next screenshot" onClick={() => handleSwipe('right')}>
              Next
              <AiFillCaretRight className="ml-1" />
            </button>
          ) : null}
        </div>
      ) : null}
      <div className="project__screen" {...props}>
        <figure className={isFull ? '' : 'scrollable'}>
          <img
            src={project.screens[index]}
            alt={`Screenshot of ${project.current}`}
            width="300"
            height="400"
            loading="lazy"
          />
          <figcaption className="sr-only">{`Full size screenshot of ${project.title} website`}</figcaption>
        </figure>
        {isJavaScriptEnabled && project.screens.length > 1 ? (
          <>
            <div
              title="See previous screenshot"
              onClick={() => handleSwipe('left')}
              tabIndex={0}
              role="button"
              aria-label="See previous screenshot"
              className="left"
            ></div>
            <div
              title="See next screenshot"
              onClick={() => handleSwipe('right')}
              tabIndex={0}
              role="button"
              aria-label="See next screenshot"
              className="right"
            ></div>
          </>
        ) : null}
      </div>
    </>
  );
}
