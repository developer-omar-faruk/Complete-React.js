import React, { useEffect, useState } from "react";

function User() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(30);
  const [error, setError] = useState("");

  function handleChange(e) {
    let val = e.target.value;
    setUser(val);
  }

  useEffect(() => {
    async function GithubUser() {
      try {
        const response = await fetch(
          `https://api.github.com/users?per_page=${user}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
        setData([]);
      }
    }
    GithubUser();
  }, [user]);

  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <h1 className="text-center text-lg mb-3">Github Users</h1>
      <input
        onChange={handleChange}
        type="number"
        className="border-white border p-2"
        placeholder="Number of user"
      />
      <p>{error}</p>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {data.map((data) => (
          <img
            className="h-[100px]"
            src={data.avatar_url}
            alt=""
            key={data.id}
          />
        ))}
      </div>
    </div>
  );
}

export default User;
