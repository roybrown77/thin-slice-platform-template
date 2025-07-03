import { useEffect, useState } from 'react';

export default function Status() {
  const [status, setStatus] = useState({});
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/health')
      .then(res => res.json())
      .then(setStatus);
  }, []);

  return (
    <div>
      <h2>System Status</h2>
      <pre>{JSON.stringify(status, null, 2)}</pre>
    </div>
  );
};