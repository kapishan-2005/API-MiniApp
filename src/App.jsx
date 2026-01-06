import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  // GitHub API fetch
useEffect(() => {
  fetch("https://api.github.com/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      return res.json();
    })
    .then((data) => setUsers(data))
    .catch((error) => console.error(error));
}, []);


  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        React Application with GitHub API
      </h1>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-800 p-4 rounded-lg text-center hover:scale-105 transition"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 mx-auto rounded-full mb-3"
            />
            <h2 className="font-semibold">{user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              className="text-blue-400 text-sm"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
