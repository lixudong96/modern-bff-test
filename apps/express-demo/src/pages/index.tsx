import './index.css';
import { useCallback } from 'react';
import { post as login } from '@api/login';

const Index = () => {
  const handleLogin = useCallback(() => {
    login().then(data => {
      // eslint-disable-next-line no-console
      console.log(data);
    });
  }, []);
  return (
    <div>
      <button onClick={handleLogin}>sendLoginRequest</button>
    </div>
  );
};

export default Index;
