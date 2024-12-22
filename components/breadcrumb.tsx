import { useRouter } from 'next/router';
import { AiFillCaretRight } from 'react-icons/ai';
import Linkk from './linkk';

export default function Breadcrumb() {
  const router = useRouter();
  // the regex replace removes all characters after '?' to get rid of the query parameters
  const route = router.asPath.replace(/\?.*/g, "$'");
  const split = route.split('/').filter((x) => x);

  return router.route !== '/' ? (
    <div className="breadcrumb">
      <div className="container">
        <ul>
          <li>
            <Linkk href="/">Home</Linkk>
          </li>
          {split.map((x, i) => (
            <li key={x}>
              {i === split.length - 1 ? (
                <>
                  <AiFillCaretRight />
                  {x.replace(/-/g, ' ')}
                </>
              ) : (
                <>
                  <AiFillCaretRight />
                  <Linkk href={`/${x}`}>{x.replace(/-/g, ' ')}</Linkk>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;
}
