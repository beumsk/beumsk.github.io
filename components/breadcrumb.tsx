import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiFillCaretRight } from 'react-icons/ai';

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
            <Link href="/">Home</Link>
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
                  <Link href={`/${x}`}>
                    <a>{x.replace(/-/g, ' ')}</a>
                  </Link>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : null;
}
