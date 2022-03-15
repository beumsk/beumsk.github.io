import { useEffect } from 'react';
import { useRouter } from 'next/router';

const styleDiv = {
  height: '100vh',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

// eslint-disable-next-line react/prop-types
function Error({ statusCode }) {
  const router = useRouter();

  useEffect(() => {
    // reload page to bypass safari error of window undefined
    router.reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={styleDiv}>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred in the browser, please refresh the page or click on the button below.'}
      </p>
      <button onClick={() => router.reload()} className="btn my-5">
        Give me another chance
      </button>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
