import { useEffect, useState } from 'react';

export default function Logs() {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/logs')
      .then(res => res.json())
      .then(setLogs);
  }, []);

  return (
    <div>
      <h2>Logs</h2>
      <pre>{JSON.stringify(logs, null, 2)}</pre>
    </div>
  );
};