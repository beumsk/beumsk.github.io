import { useEffect, useState } from 'react';

const useJavaScriptEnabled = () => {
  const [isJavaScriptEnabled, setIsJavaScriptEnabled] = useState(false);

  useEffect(() => {
    setIsJavaScriptEnabled(true);
  }, []);

  return isJavaScriptEnabled;
};

export default useJavaScriptEnabled;
