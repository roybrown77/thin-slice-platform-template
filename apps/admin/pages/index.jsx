export default function AdminHome() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li><a href="/logs">View Logs</a></li>
        <li><a href="/status">System Status</a></li>
      </ul>
    </div>
  );
};