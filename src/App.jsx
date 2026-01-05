import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <h1 className="text-2xl font-bold text-white text-center mb-8">
        React Application with GitHub API and useEffect
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md p-4 text-center"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />

            <h2 className="font-semibold">{user.login}</h2>

            <a
              href={user.html_url}
              target="_blank"
              className="text-blue-600 text-sm"
            >
              {user.html_url}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
